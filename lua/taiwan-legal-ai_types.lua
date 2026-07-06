-- Typed models for the TaiwanLegalAi SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class CaseAnalysi
---@field analysis_id? string
---@field applicable_law? table
---@field case_detail string
---@field case_type? string
---@field language? string
---@field legal_issue? table
---@field party? table
---@field precedent? table
---@field recommendation? string
---@field summary? string
---@field timestamp? string

---@class CaseAnalysiCreateData
---@field analysis_id? string
---@field applicable_law? table
---@field case_detail string
---@field case_type? string
---@field language? string
---@field legal_issue? table
---@field party? table
---@field precedent? table
---@field recommendation? string
---@field summary? string
---@field timestamp? string

---@class ContractService
---@field claus? table
---@field compliance_check? table
---@field content? string
---@field contract_text string
---@field contract_type? string
---@field draft_id? string
---@field focus_area? table
---@field issue? table
---@field language? string
---@field missing_claus? table
---@field note? string
---@field overall_assessment? string
---@field party? table
---@field recommendation? table
---@field requirement string
---@field review_id? string
---@field risk_level? string
---@field specific_claus? table
---@field timestamp? string

---@class ContractServiceCreateData
---@field claus? table
---@field compliance_check? table
---@field content? string
---@field contract_text string
---@field contract_type? string
---@field draft_id? string
---@field focus_area? table
---@field issue? table
---@field language? string
---@field missing_claus? table
---@field note? string
---@field overall_assessment? string
---@field party? table
---@field recommendation? table
---@field requirement string
---@field review_id? string
---@field risk_level? string
---@field specific_claus? table
---@field timestamp? string

---@class LegalQuery
---@field answer? string
---@field category? string
---@field language? string
---@field query_id? string
---@field question? string
---@field relevant_law? table
---@field timestamp? string

---@class LegalQueryCreateData
---@field answer? string
---@field category? string
---@field language? string
---@field query_id? string
---@field question? string
---@field relevant_law? table
---@field timestamp? string

local M = {}

return M
