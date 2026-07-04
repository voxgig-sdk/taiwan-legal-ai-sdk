# frozen_string_literal: true

# Typed models for the TaiwanLegalAi SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# CaseAnalysi entity data model.
#
# @!attribute [rw] analysis_id
#   @return [String, nil]
#
# @!attribute [rw] applicable_law
#   @return [Array, nil]
#
# @!attribute [rw] case_detail
#   @return [String]
#
# @!attribute [rw] case_type
#   @return [String, nil]
#
# @!attribute [rw] language
#   @return [String, nil]
#
# @!attribute [rw] legal_issue
#   @return [Array, nil]
#
# @!attribute [rw] party
#   @return [Hash, nil]
#
# @!attribute [rw] precedent
#   @return [Array, nil]
#
# @!attribute [rw] recommendation
#   @return [String, nil]
#
# @!attribute [rw] summary
#   @return [String, nil]
#
# @!attribute [rw] timestamp
#   @return [String, nil]
CaseAnalysi = Struct.new(
  :analysis_id,
  :applicable_law,
  :case_detail,
  :case_type,
  :language,
  :legal_issue,
  :party,
  :precedent,
  :recommendation,
  :summary,
  :timestamp,
  keyword_init: true
)

# Match filter for CaseAnalysi#create (any subset of CaseAnalysi fields).
#
# @!attribute [rw] analysis_id
#   @return [String, nil]
#
# @!attribute [rw] applicable_law
#   @return [Array, nil]
#
# @!attribute [rw] case_detail
#   @return [String, nil]
#
# @!attribute [rw] case_type
#   @return [String, nil]
#
# @!attribute [rw] language
#   @return [String, nil]
#
# @!attribute [rw] legal_issue
#   @return [Array, nil]
#
# @!attribute [rw] party
#   @return [Hash, nil]
#
# @!attribute [rw] precedent
#   @return [Array, nil]
#
# @!attribute [rw] recommendation
#   @return [String, nil]
#
# @!attribute [rw] summary
#   @return [String, nil]
#
# @!attribute [rw] timestamp
#   @return [String, nil]
CaseAnalysiCreateData = Struct.new(
  :analysis_id,
  :applicable_law,
  :case_detail,
  :case_type,
  :language,
  :legal_issue,
  :party,
  :precedent,
  :recommendation,
  :summary,
  :timestamp,
  keyword_init: true
)

# ContractService entity data model.
#
# @!attribute [rw] claus
#   @return [Array, nil]
#
# @!attribute [rw] compliance_check
#   @return [Hash, nil]
#
# @!attribute [rw] content
#   @return [String, nil]
#
# @!attribute [rw] contract_text
#   @return [String]
#
# @!attribute [rw] contract_type
#   @return [String, nil]
#
# @!attribute [rw] draft_id
#   @return [String, nil]
#
# @!attribute [rw] focus_area
#   @return [Array, nil]
#
# @!attribute [rw] issue
#   @return [Array, nil]
#
# @!attribute [rw] language
#   @return [String, nil]
#
# @!attribute [rw] missing_claus
#   @return [Array, nil]
#
# @!attribute [rw] note
#   @return [String, nil]
#
# @!attribute [rw] overall_assessment
#   @return [String, nil]
#
# @!attribute [rw] party
#   @return [Hash, nil]
#
# @!attribute [rw] recommendation
#   @return [Array, nil]
#
# @!attribute [rw] requirement
#   @return [String]
#
# @!attribute [rw] review_id
#   @return [String, nil]
#
# @!attribute [rw] risk_level
#   @return [String, nil]
#
# @!attribute [rw] specific_claus
#   @return [Array, nil]
#
# @!attribute [rw] timestamp
#   @return [String, nil]
ContractService = Struct.new(
  :claus,
  :compliance_check,
  :content,
  :contract_text,
  :contract_type,
  :draft_id,
  :focus_area,
  :issue,
  :language,
  :missing_claus,
  :note,
  :overall_assessment,
  :party,
  :recommendation,
  :requirement,
  :review_id,
  :risk_level,
  :specific_claus,
  :timestamp,
  keyword_init: true
)

# Match filter for ContractService#create (any subset of ContractService fields).
#
# @!attribute [rw] claus
#   @return [Array, nil]
#
# @!attribute [rw] compliance_check
#   @return [Hash, nil]
#
# @!attribute [rw] content
#   @return [String, nil]
#
# @!attribute [rw] contract_text
#   @return [String, nil]
#
# @!attribute [rw] contract_type
#   @return [String, nil]
#
# @!attribute [rw] draft_id
#   @return [String, nil]
#
# @!attribute [rw] focus_area
#   @return [Array, nil]
#
# @!attribute [rw] issue
#   @return [Array, nil]
#
# @!attribute [rw] language
#   @return [String, nil]
#
# @!attribute [rw] missing_claus
#   @return [Array, nil]
#
# @!attribute [rw] note
#   @return [String, nil]
#
# @!attribute [rw] overall_assessment
#   @return [String, nil]
#
# @!attribute [rw] party
#   @return [Hash, nil]
#
# @!attribute [rw] recommendation
#   @return [Array, nil]
#
# @!attribute [rw] requirement
#   @return [String, nil]
#
# @!attribute [rw] review_id
#   @return [String, nil]
#
# @!attribute [rw] risk_level
#   @return [String, nil]
#
# @!attribute [rw] specific_claus
#   @return [Array, nil]
#
# @!attribute [rw] timestamp
#   @return [String, nil]
ContractServiceCreateData = Struct.new(
  :claus,
  :compliance_check,
  :content,
  :contract_text,
  :contract_type,
  :draft_id,
  :focus_area,
  :issue,
  :language,
  :missing_claus,
  :note,
  :overall_assessment,
  :party,
  :recommendation,
  :requirement,
  :review_id,
  :risk_level,
  :specific_claus,
  :timestamp,
  keyword_init: true
)

# LegalQuery entity data model.
#
# @!attribute [rw] answer
#   @return [String, nil]
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] language
#   @return [String, nil]
#
# @!attribute [rw] query_id
#   @return [String, nil]
#
# @!attribute [rw] question
#   @return [String, nil]
#
# @!attribute [rw] relevant_law
#   @return [Array, nil]
#
# @!attribute [rw] timestamp
#   @return [String, nil]
LegalQuery = Struct.new(
  :answer,
  :category,
  :language,
  :query_id,
  :question,
  :relevant_law,
  :timestamp,
  keyword_init: true
)

# Match filter for LegalQuery#create (any subset of LegalQuery fields).
#
# @!attribute [rw] answer
#   @return [String, nil]
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] language
#   @return [String, nil]
#
# @!attribute [rw] query_id
#   @return [String, nil]
#
# @!attribute [rw] question
#   @return [String, nil]
#
# @!attribute [rw] relevant_law
#   @return [Array, nil]
#
# @!attribute [rw] timestamp
#   @return [String, nil]
LegalQueryCreateData = Struct.new(
  :answer,
  :category,
  :language,
  :query_id,
  :question,
  :relevant_law,
  :timestamp,
  keyword_init: true
)

