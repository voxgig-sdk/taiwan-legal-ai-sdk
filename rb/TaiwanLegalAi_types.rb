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
# @!attribute [rw] analysisId
#   @return [String, nil]
#
# @!attribute [rw] applicableLaws
#   @return [Array, nil]
#
# @!attribute [rw] caseDetails
#   @return [String]
#
# @!attribute [rw] caseType
#   @return [String, nil]
#
# @!attribute [rw] language
#   @return [String, nil]
#
# @!attribute [rw] legalIssues
#   @return [Array, nil]
#
# @!attribute [rw] parties
#   @return [Hash, nil]
#
# @!attribute [rw] precedents
#   @return [Array, nil]
#
# @!attribute [rw] recommendations
#   @return [String, nil]
#
# @!attribute [rw] summary
#   @return [String, nil]
#
# @!attribute [rw] timestamp
#   @return [String, nil]
CaseAnalysi = Struct.new(
  :analysisId,
  :applicableLaws,
  :caseDetails,
  :caseType,
  :language,
  :legalIssues,
  :parties,
  :precedents,
  :recommendations,
  :summary,
  :timestamp,
  keyword_init: true
)

# Request payload for CaseAnalysi#create.
#
# @!attribute [rw] analysisId
#   @return [String, nil]
#
# @!attribute [rw] applicableLaws
#   @return [Array, nil]
#
# @!attribute [rw] caseDetails
#   @return [String]
#
# @!attribute [rw] caseType
#   @return [String, nil]
#
# @!attribute [rw] language
#   @return [String, nil]
#
# @!attribute [rw] legalIssues
#   @return [Array, nil]
#
# @!attribute [rw] parties
#   @return [Hash, nil]
#
# @!attribute [rw] precedents
#   @return [Array, nil]
#
# @!attribute [rw] recommendations
#   @return [String, nil]
#
# @!attribute [rw] summary
#   @return [String, nil]
#
# @!attribute [rw] timestamp
#   @return [String, nil]
CaseAnalysiCreateData = Struct.new(
  :analysisId,
  :applicableLaws,
  :caseDetails,
  :caseType,
  :language,
  :legalIssues,
  :parties,
  :precedents,
  :recommendations,
  :summary,
  :timestamp,
  keyword_init: true
)

# ContractService entity data model.
#
# @!attribute [rw] clauses
#   @return [Array, nil]
#
# @!attribute [rw] complianceCheck
#   @return [Hash, nil]
#
# @!attribute [rw] content
#   @return [String, nil]
#
# @!attribute [rw] contractText
#   @return [String]
#
# @!attribute [rw] contractType
#   @return [String, nil]
#
# @!attribute [rw] draftId
#   @return [String, nil]
#
# @!attribute [rw] focusAreas
#   @return [Array, nil]
#
# @!attribute [rw] issues
#   @return [Array, nil]
#
# @!attribute [rw] language
#   @return [String, nil]
#
# @!attribute [rw] missingClauses
#   @return [Array, nil]
#
# @!attribute [rw] notes
#   @return [String, nil]
#
# @!attribute [rw] overallAssessment
#   @return [String, nil]
#
# @!attribute [rw] parties
#   @return [Hash, nil]
#
# @!attribute [rw] recommendations
#   @return [Array, nil]
#
# @!attribute [rw] requirements
#   @return [String]
#
# @!attribute [rw] reviewId
#   @return [String, nil]
#
# @!attribute [rw] riskLevel
#   @return [String, nil]
#
# @!attribute [rw] specificClauses
#   @return [Array, nil]
#
# @!attribute [rw] timestamp
#   @return [String, nil]
ContractService = Struct.new(
  :clauses,
  :complianceCheck,
  :content,
  :contractText,
  :contractType,
  :draftId,
  :focusAreas,
  :issues,
  :language,
  :missingClauses,
  :notes,
  :overallAssessment,
  :parties,
  :recommendations,
  :requirements,
  :reviewId,
  :riskLevel,
  :specificClauses,
  :timestamp,
  keyword_init: true
)

# Request payload for ContractService#create.
#
# @!attribute [rw] clauses
#   @return [Array, nil]
#
# @!attribute [rw] complianceCheck
#   @return [Hash, nil]
#
# @!attribute [rw] content
#   @return [String, nil]
#
# @!attribute [rw] contractText
#   @return [String]
#
# @!attribute [rw] contractType
#   @return [String, nil]
#
# @!attribute [rw] draftId
#   @return [String, nil]
#
# @!attribute [rw] focusAreas
#   @return [Array, nil]
#
# @!attribute [rw] issues
#   @return [Array, nil]
#
# @!attribute [rw] language
#   @return [String, nil]
#
# @!attribute [rw] missingClauses
#   @return [Array, nil]
#
# @!attribute [rw] notes
#   @return [String, nil]
#
# @!attribute [rw] overallAssessment
#   @return [String, nil]
#
# @!attribute [rw] parties
#   @return [Hash, nil]
#
# @!attribute [rw] recommendations
#   @return [Array, nil]
#
# @!attribute [rw] requirements
#   @return [String]
#
# @!attribute [rw] reviewId
#   @return [String, nil]
#
# @!attribute [rw] riskLevel
#   @return [String, nil]
#
# @!attribute [rw] specificClauses
#   @return [Array, nil]
#
# @!attribute [rw] timestamp
#   @return [String, nil]
ContractServiceCreateData = Struct.new(
  :clauses,
  :complianceCheck,
  :content,
  :contractText,
  :contractType,
  :draftId,
  :focusAreas,
  :issues,
  :language,
  :missingClauses,
  :notes,
  :overallAssessment,
  :parties,
  :recommendations,
  :requirements,
  :reviewId,
  :riskLevel,
  :specificClauses,
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
# @!attribute [rw] queryId
#   @return [String, nil]
#
# @!attribute [rw] question
#   @return [String, nil]
#
# @!attribute [rw] relevantLaws
#   @return [Array, nil]
#
# @!attribute [rw] timestamp
#   @return [String, nil]
LegalQuery = Struct.new(
  :answer,
  :category,
  :language,
  :queryId,
  :question,
  :relevantLaws,
  :timestamp,
  keyword_init: true
)

# Request payload for LegalQuery#create.
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
# @!attribute [rw] queryId
#   @return [String, nil]
#
# @!attribute [rw] question
#   @return [String, nil]
#
# @!attribute [rw] relevantLaws
#   @return [Array, nil]
#
# @!attribute [rw] timestamp
#   @return [String, nil]
LegalQueryCreateData = Struct.new(
  :answer,
  :category,
  :language,
  :queryId,
  :question,
  :relevantLaws,
  :timestamp,
  keyword_init: true
)

