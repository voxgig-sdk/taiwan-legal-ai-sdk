package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/taiwan-legal-ai-sdk/go"
	"github.com/voxgig-sdk/taiwan-legal-ai-sdk/go/core"

	vs "github.com/voxgig-sdk/taiwan-legal-ai-sdk/go/utility/struct"
)

func TestCaseAnalysiEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.CaseAnalysi(nil)
		if ent == nil {
			t.Fatal("expected non-nil CaseAnalysiEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := case_analysiBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "case_analysi." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set TAIWANLEGALAI_TEST_CASE_ANALYSI_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		caseAnalysiRef01Ent := client.CaseAnalysi(nil)
		caseAnalysiRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "case_analysi"}, setup.data), "case_analysi_ref01"))

		caseAnalysiRef01DataResult, err := caseAnalysiRef01Ent.Create(caseAnalysiRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		caseAnalysiRef01Data = core.ToMapAny(caseAnalysiRef01DataResult)
		if caseAnalysiRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

	})
}

func case_analysiBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "case_analysi", "CaseAnalysiTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read case_analysi test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse case_analysi test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"case_analysi01", "case_analysi02", "case_analysi03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("TAIWANLEGALAI_TEST_CASE_ANALYSI_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"TAIWANLEGALAI_TEST_CASE_ANALYSI_ENTID": idmap,
		"TAIWANLEGALAI_TEST_LIVE":      "FALSE",
		"TAIWANLEGALAI_TEST_EXPLAIN":   "FALSE",
		"TAIWANLEGALAI_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["TAIWANLEGALAI_TEST_CASE_ANALYSI_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["TAIWANLEGALAI_TEST_LIVE"] == "TRUE" {
		mergedOpts := vs.Merge([]any{
			map[string]any{
				"apikey": env["TAIWANLEGALAI_APIKEY"],
			},
			extra,
		})
		client = sdk.NewTaiwanLegalAiSDK(core.ToMapAny(mergedOpts))
	}

	live := env["TAIWANLEGALAI_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["TAIWANLEGALAI_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
