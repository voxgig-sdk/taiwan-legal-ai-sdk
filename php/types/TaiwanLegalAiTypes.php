<?php
declare(strict_types=1);

// Typed models for the TaiwanLegalAi SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** CaseAnalysi entity data model. */
class CaseAnalysi
{
    public ?string $analysis_id = null;
    public ?array $applicable_law = null;
    public string $case_detail;
    public ?string $case_type = null;
    public ?string $language = null;
    public ?array $legal_issue = null;
    public ?array $party = null;
    public ?array $precedent = null;
    public ?string $recommendation = null;
    public ?string $summary = null;
    public ?string $timestamp = null;
}

/** Request payload for CaseAnalysi#create. */
class CaseAnalysiCreateData
{
    public ?string $analysis_id = null;
    public ?array $applicable_law = null;
    public string $case_detail;
    public ?string $case_type = null;
    public ?string $language = null;
    public ?array $legal_issue = null;
    public ?array $party = null;
    public ?array $precedent = null;
    public ?string $recommendation = null;
    public ?string $summary = null;
    public ?string $timestamp = null;
}

/** ContractService entity data model. */
class ContractService
{
    public ?array $claus = null;
    public ?array $compliance_check = null;
    public ?string $content = null;
    public string $contract_text;
    public ?string $contract_type = null;
    public ?string $draft_id = null;
    public ?array $focus_area = null;
    public ?array $issue = null;
    public ?string $language = null;
    public ?array $missing_claus = null;
    public ?string $note = null;
    public ?string $overall_assessment = null;
    public ?array $party = null;
    public ?array $recommendation = null;
    public string $requirement;
    public ?string $review_id = null;
    public ?string $risk_level = null;
    public ?array $specific_claus = null;
    public ?string $timestamp = null;
}

/** Request payload for ContractService#create. */
class ContractServiceCreateData
{
    public ?array $claus = null;
    public ?array $compliance_check = null;
    public ?string $content = null;
    public string $contract_text;
    public ?string $contract_type = null;
    public ?string $draft_id = null;
    public ?array $focus_area = null;
    public ?array $issue = null;
    public ?string $language = null;
    public ?array $missing_claus = null;
    public ?string $note = null;
    public ?string $overall_assessment = null;
    public ?array $party = null;
    public ?array $recommendation = null;
    public string $requirement;
    public ?string $review_id = null;
    public ?string $risk_level = null;
    public ?array $specific_claus = null;
    public ?string $timestamp = null;
}

/** LegalQuery entity data model. */
class LegalQuery
{
    public ?string $answer = null;
    public ?string $category = null;
    public ?string $language = null;
    public ?string $query_id = null;
    public ?string $question = null;
    public ?array $relevant_law = null;
    public ?string $timestamp = null;
}

/** Request payload for LegalQuery#create. */
class LegalQueryCreateData
{
    public ?string $answer = null;
    public ?string $category = null;
    public ?string $language = null;
    public ?string $query_id = null;
    public ?string $question = null;
    public ?array $relevant_law = null;
    public ?string $timestamp = null;
}

