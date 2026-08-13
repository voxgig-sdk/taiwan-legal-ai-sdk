# Typed models for the TaiwanLegalAi SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class CaseAnalysiRequired(TypedDict):
    caseDetails: str


class CaseAnalysi(CaseAnalysiRequired, total=False):
    analysisId: str
    applicableLaws: list
    caseType: str
    language: str
    legalIssues: list
    parties: dict
    precedents: list
    recommendations: str
    summary: str
    timestamp: str


class CaseAnalysiCreateDataRequired(TypedDict):
    caseDetails: str


class CaseAnalysiCreateData(CaseAnalysiCreateDataRequired, total=False):
    analysisId: str
    applicableLaws: list
    caseType: str
    language: str
    legalIssues: list
    parties: dict
    precedents: list
    recommendations: str
    summary: str
    timestamp: str


class ContractServiceRequired(TypedDict):
    contractText: str
    requirements: str


class ContractService(ContractServiceRequired, total=False):
    clauses: list
    complianceCheck: dict
    content: str
    contractType: str
    draftId: str
    focusAreas: list
    issues: list
    language: str
    missingClauses: list
    notes: str
    overallAssessment: str
    parties: dict
    recommendations: list
    reviewId: str
    riskLevel: str
    specificClauses: list
    timestamp: str


class ContractServiceCreateDataRequired(TypedDict):
    contractText: str
    requirements: str


class ContractServiceCreateData(ContractServiceCreateDataRequired, total=False):
    clauses: list
    complianceCheck: dict
    content: str
    contractType: str
    draftId: str
    focusAreas: list
    issues: list
    language: str
    missingClauses: list
    notes: str
    overallAssessment: str
    parties: dict
    recommendations: list
    reviewId: str
    riskLevel: str
    specificClauses: list
    timestamp: str


class LegalQuery(TypedDict, total=False):
    answer: str
    category: str
    language: str
    queryId: str
    question: str
    relevantLaws: list
    timestamp: str


class LegalQueryCreateData(TypedDict, total=False):
    answer: str
    category: str
    language: str
    queryId: str
    question: str
    relevantLaws: list
    timestamp: str
