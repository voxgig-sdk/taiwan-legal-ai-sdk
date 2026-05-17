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

func TestContractServiceEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.ContractService(nil)
		if ent == nil {
			t.Fatal("expected non-nil ContractServiceEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := contract_serviceBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "contract_service." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set TAIWANLEGALAI_TEST_CONTRACT_SERVICE_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		contractServiceRef01Ent := client.ContractService(nil)
		contractServiceRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "contract_service"}, setup.data), "contract_service_ref01"))

		contractServiceRef01DataResult, err := contractServiceRef01Ent.Create(contractServiceRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		contractServiceRef01Data = core.ToMapAny(contractServiceRef01DataResult)
		if contractServiceRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

	})
}

func contract_serviceBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "contract_service", "ContractServiceTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read contract_service test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse contract_service test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"contract_service01", "contract_service02", "contract_service03"},
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
	entidEnvRaw := os.Getenv("TAIWANLEGALAI_TEST_CONTRACT_SERVICE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"TAIWANLEGALAI_TEST_CONTRACT_SERVICE_ENTID": idmap,
		"TAIWANLEGALAI_TEST_LIVE":      "FALSE",
		"TAIWANLEGALAI_TEST_EXPLAIN":   "FALSE",
		"TAIWANLEGALAI_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["TAIWANLEGALAI_TEST_CONTRACT_SERVICE_ENTID"])
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
