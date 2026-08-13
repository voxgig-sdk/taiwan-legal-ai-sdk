// Typed models for the TaiwanLegalAi SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/taiwan-legal-ai-sdk/go/core"
)

// CaseAnalysi is the typed data model for the case_analysi entity.
type CaseAnalysi struct {
	AnalysisId *string `json:"analysisId,omitempty"`
	ApplicableLaws *[]any `json:"applicableLaws,omitempty"`
	CaseDetails string `json:"caseDetails"`
	CaseType *string `json:"caseType,omitempty"`
	Language *string `json:"language,omitempty"`
	LegalIssues *[]any `json:"legalIssues,omitempty"`
	Parties *map[string]any `json:"parties,omitempty"`
	Precedents *[]any `json:"precedents,omitempty"`
	Recommendations *string `json:"recommendations,omitempty"`
	Summary *string `json:"summary,omitempty"`
	Timestamp *string `json:"timestamp,omitempty"`
}

// CaseAnalysiCreateData is the typed request payload for CaseAnalysi.CreateTyped.
type CaseAnalysiCreateData struct {
	AnalysisId *string `json:"analysisId,omitempty"`
	ApplicableLaws *[]any `json:"applicableLaws,omitempty"`
	CaseDetails string `json:"caseDetails"`
	CaseType *string `json:"caseType,omitempty"`
	Language *string `json:"language,omitempty"`
	LegalIssues *[]any `json:"legalIssues,omitempty"`
	Parties *map[string]any `json:"parties,omitempty"`
	Precedents *[]any `json:"precedents,omitempty"`
	Recommendations *string `json:"recommendations,omitempty"`
	Summary *string `json:"summary,omitempty"`
	Timestamp *string `json:"timestamp,omitempty"`
}

// ContractService is the typed data model for the contract_service entity.
type ContractService struct {
	Clauses *[]any `json:"clauses,omitempty"`
	ComplianceCheck *map[string]any `json:"complianceCheck,omitempty"`
	Content *string `json:"content,omitempty"`
	ContractText string `json:"contractText"`
	ContractType *string `json:"contractType,omitempty"`
	DraftId *string `json:"draftId,omitempty"`
	FocusAreas *[]any `json:"focusAreas,omitempty"`
	Issues *[]any `json:"issues,omitempty"`
	Language *string `json:"language,omitempty"`
	MissingClauses *[]any `json:"missingClauses,omitempty"`
	Notes *string `json:"notes,omitempty"`
	OverallAssessment *string `json:"overallAssessment,omitempty"`
	Parties *map[string]any `json:"parties,omitempty"`
	Recommendations *[]any `json:"recommendations,omitempty"`
	Requirements string `json:"requirements"`
	ReviewId *string `json:"reviewId,omitempty"`
	RiskLevel *string `json:"riskLevel,omitempty"`
	SpecificClauses *[]any `json:"specificClauses,omitempty"`
	Timestamp *string `json:"timestamp,omitempty"`
}

// ContractServiceCreateData is the typed request payload for ContractService.CreateTyped.
type ContractServiceCreateData struct {
	Clauses *[]any `json:"clauses,omitempty"`
	ComplianceCheck *map[string]any `json:"complianceCheck,omitempty"`
	Content *string `json:"content,omitempty"`
	ContractText string `json:"contractText"`
	ContractType *string `json:"contractType,omitempty"`
	DraftId *string `json:"draftId,omitempty"`
	FocusAreas *[]any `json:"focusAreas,omitempty"`
	Issues *[]any `json:"issues,omitempty"`
	Language *string `json:"language,omitempty"`
	MissingClauses *[]any `json:"missingClauses,omitempty"`
	Notes *string `json:"notes,omitempty"`
	OverallAssessment *string `json:"overallAssessment,omitempty"`
	Parties *map[string]any `json:"parties,omitempty"`
	Recommendations *[]any `json:"recommendations,omitempty"`
	Requirements string `json:"requirements"`
	ReviewId *string `json:"reviewId,omitempty"`
	RiskLevel *string `json:"riskLevel,omitempty"`
	SpecificClauses *[]any `json:"specificClauses,omitempty"`
	Timestamp *string `json:"timestamp,omitempty"`
}

// LegalQuery is the typed data model for the legal_query entity.
type LegalQuery struct {
	Answer *string `json:"answer,omitempty"`
	Category *string `json:"category,omitempty"`
	Language *string `json:"language,omitempty"`
	QueryId *string `json:"queryId,omitempty"`
	Question *string `json:"question,omitempty"`
	RelevantLaws *[]any `json:"relevantLaws,omitempty"`
	Timestamp *string `json:"timestamp,omitempty"`
}

// LegalQueryCreateData is the typed request payload for LegalQuery.CreateTyped.
type LegalQueryCreateData struct {
	Answer *string `json:"answer,omitempty"`
	Category *string `json:"category,omitempty"`
	Language *string `json:"language,omitempty"`
	QueryId *string `json:"queryId,omitempty"`
	Question *string `json:"question,omitempty"`
	RelevantLaws *[]any `json:"relevantLaws,omitempty"`
	Timestamp *string `json:"timestamp,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
