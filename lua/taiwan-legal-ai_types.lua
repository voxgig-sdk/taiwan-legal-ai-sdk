-- Typed models for the TaiwanLegalAi SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class CaseAnalysi
---@field analysisId? string
---@field applicableLaws? table
---@field caseDetails string
---@field caseType? string
---@field language? string
---@field legalIssues? table
---@field parties? table
---@field precedents? table
---@field recommendations? string
---@field summary? string
---@field timestamp? string

---@class CaseAnalysiCreateData
---@field analysisId? string
---@field applicableLaws? table
---@field caseDetails string
---@field caseType? string
---@field language? string
---@field legalIssues? table
---@field parties? table
---@field precedents? table
---@field recommendations? string
---@field summary? string
---@field timestamp? string

---@class ContractService
---@field clauses? table
---@field complianceCheck? table
---@field content? string
---@field contractText string
---@field contractType? string
---@field draftId? string
---@field focusAreas? table
---@field issues? table
---@field language? string
---@field missingClauses? table
---@field notes? string
---@field overallAssessment? string
---@field parties? table
---@field recommendations? table
---@field requirements string
---@field reviewId? string
---@field riskLevel? string
---@field specificClauses? table
---@field timestamp? string

---@class ContractServiceCreateData
---@field clauses? table
---@field complianceCheck? table
---@field content? string
---@field contractText string
---@field contractType? string
---@field draftId? string
---@field focusAreas? table
---@field issues? table
---@field language? string
---@field missingClauses? table
---@field notes? string
---@field overallAssessment? string
---@field parties? table
---@field recommendations? table
---@field requirements string
---@field reviewId? string
---@field riskLevel? string
---@field specificClauses? table
---@field timestamp? string

---@class LegalQuery
---@field answer? string
---@field category? string
---@field language? string
---@field queryId? string
---@field question? string
---@field relevantLaws? table
---@field timestamp? string

---@class LegalQueryCreateData
---@field answer? string
---@field category? string
---@field language? string
---@field queryId? string
---@field question? string
---@field relevantLaws? table
---@field timestamp? string

local M = {}

return M
