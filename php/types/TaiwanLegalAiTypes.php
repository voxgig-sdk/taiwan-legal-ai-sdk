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
    public ?string $analysisId = null;
    public ?array $applicableLaws = null;
    public string $caseDetails;
    public ?string $caseType = null;
    public ?string $language = null;
    public ?array $legalIssues = null;
    public ?array $parties = null;
    public ?array $precedents = null;
    public ?string $recommendations = null;
    public ?string $summary = null;
    public ?string $timestamp = null;
}

/** Request payload for CaseAnalysi#create. */
class CaseAnalysiCreateData
{
    public ?string $analysisId = null;
    public ?array $applicableLaws = null;
    public string $caseDetails;
    public ?string $caseType = null;
    public ?string $language = null;
    public ?array $legalIssues = null;
    public ?array $parties = null;
    public ?array $precedents = null;
    public ?string $recommendations = null;
    public ?string $summary = null;
    public ?string $timestamp = null;
}

/** ContractService entity data model. */
class ContractService
{
    public ?array $clauses = null;
    public ?array $complianceCheck = null;
    public ?string $content = null;
    public string $contractText;
    public ?string $contractType = null;
    public ?string $draftId = null;
    public ?array $focusAreas = null;
    public ?array $issues = null;
    public ?string $language = null;
    public ?array $missingClauses = null;
    public ?string $notes = null;
    public ?string $overallAssessment = null;
    public ?array $parties = null;
    public ?array $recommendations = null;
    public string $requirements;
    public ?string $reviewId = null;
    public ?string $riskLevel = null;
    public ?array $specificClauses = null;
    public ?string $timestamp = null;
}

/** Request payload for ContractService#create. */
class ContractServiceCreateData
{
    public ?array $clauses = null;
    public ?array $complianceCheck = null;
    public ?string $content = null;
    public string $contractText;
    public ?string $contractType = null;
    public ?string $draftId = null;
    public ?array $focusAreas = null;
    public ?array $issues = null;
    public ?string $language = null;
    public ?array $missingClauses = null;
    public ?string $notes = null;
    public ?string $overallAssessment = null;
    public ?array $parties = null;
    public ?array $recommendations = null;
    public string $requirements;
    public ?string $reviewId = null;
    public ?string $riskLevel = null;
    public ?array $specificClauses = null;
    public ?string $timestamp = null;
}

/** LegalQuery entity data model. */
class LegalQuery
{
    public ?string $answer = null;
    public ?string $category = null;
    public ?string $language = null;
    public ?string $queryId = null;
    public ?string $question = null;
    public ?array $relevantLaws = null;
    public ?string $timestamp = null;
}

/** Request payload for LegalQuery#create. */
class LegalQueryCreateData
{
    public ?string $answer = null;
    public ?string $category = null;
    public ?string $language = null;
    public ?string $queryId = null;
    public ?string $question = null;
    public ?array $relevantLaws = null;
    public ?string $timestamp = null;
}

