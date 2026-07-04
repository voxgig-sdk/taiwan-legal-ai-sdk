// Typed models for the TaiwanLegalAi SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// CaseAnalysi is the typed data model for the case_analysi entity.
type CaseAnalysi struct {
	AnalysisId *string `json:"analysis_id,omitempty"`
	ApplicableLaw *[]any `json:"applicable_law,omitempty"`
	CaseDetail string `json:"case_detail"`
	CaseType *string `json:"case_type,omitempty"`
	Language *string `json:"language,omitempty"`
	LegalIssue *[]any `json:"legal_issue,omitempty"`
	Party *map[string]any `json:"party,omitempty"`
	Precedent *[]any `json:"precedent,omitempty"`
	Recommendation *string `json:"recommendation,omitempty"`
	Summary *string `json:"summary,omitempty"`
	Timestamp *string `json:"timestamp,omitempty"`
}

// CaseAnalysiCreateData mirrors the case_analysi fields as an all-optional match
// filter (Go analog of Partial<CaseAnalysi>).
type CaseAnalysiCreateData struct {
	AnalysisId *string `json:"analysis_id,omitempty"`
	ApplicableLaw *[]any `json:"applicable_law,omitempty"`
	CaseDetail *string `json:"case_detail,omitempty"`
	CaseType *string `json:"case_type,omitempty"`
	Language *string `json:"language,omitempty"`
	LegalIssue *[]any `json:"legal_issue,omitempty"`
	Party *map[string]any `json:"party,omitempty"`
	Precedent *[]any `json:"precedent,omitempty"`
	Recommendation *string `json:"recommendation,omitempty"`
	Summary *string `json:"summary,omitempty"`
	Timestamp *string `json:"timestamp,omitempty"`
}

// ContractService is the typed data model for the contract_service entity.
type ContractService struct {
	Claus *[]any `json:"claus,omitempty"`
	ComplianceCheck *map[string]any `json:"compliance_check,omitempty"`
	Content *string `json:"content,omitempty"`
	ContractText string `json:"contract_text"`
	ContractType *string `json:"contract_type,omitempty"`
	DraftId *string `json:"draft_id,omitempty"`
	FocusArea *[]any `json:"focus_area,omitempty"`
	Issue *[]any `json:"issue,omitempty"`
	Language *string `json:"language,omitempty"`
	MissingClaus *[]any `json:"missing_claus,omitempty"`
	Note *string `json:"note,omitempty"`
	OverallAssessment *string `json:"overall_assessment,omitempty"`
	Party *map[string]any `json:"party,omitempty"`
	Recommendation *[]any `json:"recommendation,omitempty"`
	Requirement string `json:"requirement"`
	ReviewId *string `json:"review_id,omitempty"`
	RiskLevel *string `json:"risk_level,omitempty"`
	SpecificClaus *[]any `json:"specific_claus,omitempty"`
	Timestamp *string `json:"timestamp,omitempty"`
}

// ContractServiceCreateData mirrors the contract_service fields as an all-optional match
// filter (Go analog of Partial<ContractService>).
type ContractServiceCreateData struct {
	Claus *[]any `json:"claus,omitempty"`
	ComplianceCheck *map[string]any `json:"compliance_check,omitempty"`
	Content *string `json:"content,omitempty"`
	ContractText *string `json:"contract_text,omitempty"`
	ContractType *string `json:"contract_type,omitempty"`
	DraftId *string `json:"draft_id,omitempty"`
	FocusArea *[]any `json:"focus_area,omitempty"`
	Issue *[]any `json:"issue,omitempty"`
	Language *string `json:"language,omitempty"`
	MissingClaus *[]any `json:"missing_claus,omitempty"`
	Note *string `json:"note,omitempty"`
	OverallAssessment *string `json:"overall_assessment,omitempty"`
	Party *map[string]any `json:"party,omitempty"`
	Recommendation *[]any `json:"recommendation,omitempty"`
	Requirement *string `json:"requirement,omitempty"`
	ReviewId *string `json:"review_id,omitempty"`
	RiskLevel *string `json:"risk_level,omitempty"`
	SpecificClaus *[]any `json:"specific_claus,omitempty"`
	Timestamp *string `json:"timestamp,omitempty"`
}

// LegalQuery is the typed data model for the legal_query entity.
type LegalQuery struct {
	Answer *string `json:"answer,omitempty"`
	Category *string `json:"category,omitempty"`
	Language *string `json:"language,omitempty"`
	QueryId *string `json:"query_id,omitempty"`
	Question *string `json:"question,omitempty"`
	RelevantLaw *[]any `json:"relevant_law,omitempty"`
	Timestamp *string `json:"timestamp,omitempty"`
}

// LegalQueryCreateData mirrors the legal_query fields as an all-optional match
// filter (Go analog of Partial<LegalQuery>).
type LegalQueryCreateData struct {
	Answer *string `json:"answer,omitempty"`
	Category *string `json:"category,omitempty"`
	Language *string `json:"language,omitempty"`
	QueryId *string `json:"query_id,omitempty"`
	Question *string `json:"question,omitempty"`
	RelevantLaw *[]any `json:"relevant_law,omitempty"`
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

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
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

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
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
