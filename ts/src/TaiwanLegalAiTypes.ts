// Typed models for the TaiwanLegalAi SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface CaseAnalysi {
  analysis_id?: string
  applicable_law?: any[]
  case_detail: string
  case_type?: string
  language?: string
  legal_issue?: any[]
  party?: Record<string, any>
  precedent?: any[]
  recommendation?: string
  summary?: string
  timestamp?: string
}

export type CaseAnalysiCreateData = Partial<CaseAnalysi>

export interface ContractService {
  claus?: any[]
  compliance_check?: Record<string, any>
  content?: string
  contract_text: string
  contract_type?: string
  draft_id?: string
  focus_area?: any[]
  issue?: any[]
  language?: string
  missing_claus?: any[]
  note?: string
  overall_assessment?: string
  party?: Record<string, any>
  recommendation?: any[]
  requirement: string
  review_id?: string
  risk_level?: string
  specific_claus?: any[]
  timestamp?: string
}

export type ContractServiceCreateData = Partial<ContractService>

export interface LegalQuery {
  answer?: string
  category?: string
  language?: string
  query_id?: string
  question?: string
  relevant_law?: any[]
  timestamp?: string
}

export type LegalQueryCreateData = Partial<LegalQuery>

