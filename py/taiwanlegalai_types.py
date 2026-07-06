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
    case_detail: str


class CaseAnalysi(CaseAnalysiRequired, total=False):
    analysis_id: str
    applicable_law: list
    case_type: str
    language: str
    legal_issue: list
    party: dict
    precedent: list
    recommendation: str
    summary: str
    timestamp: str


class CaseAnalysiCreateDataRequired(TypedDict):
    case_detail: str


class CaseAnalysiCreateData(CaseAnalysiCreateDataRequired, total=False):
    analysis_id: str
    applicable_law: list
    case_type: str
    language: str
    legal_issue: list
    party: dict
    precedent: list
    recommendation: str
    summary: str
    timestamp: str


class ContractServiceRequired(TypedDict):
    contract_text: str
    requirement: str


class ContractService(ContractServiceRequired, total=False):
    claus: list
    compliance_check: dict
    content: str
    contract_type: str
    draft_id: str
    focus_area: list
    issue: list
    language: str
    missing_claus: list
    note: str
    overall_assessment: str
    party: dict
    recommendation: list
    review_id: str
    risk_level: str
    specific_claus: list
    timestamp: str


class ContractServiceCreateDataRequired(TypedDict):
    contract_text: str
    requirement: str


class ContractServiceCreateData(ContractServiceCreateDataRequired, total=False):
    claus: list
    compliance_check: dict
    content: str
    contract_type: str
    draft_id: str
    focus_area: list
    issue: list
    language: str
    missing_claus: list
    note: str
    overall_assessment: str
    party: dict
    recommendation: list
    review_id: str
    risk_level: str
    specific_claus: list
    timestamp: str


class LegalQuery(TypedDict, total=False):
    answer: str
    category: str
    language: str
    query_id: str
    question: str
    relevant_law: list
    timestamp: str


class LegalQueryCreateData(TypedDict, total=False):
    answer: str
    category: str
    language: str
    query_id: str
    question: str
    relevant_law: list
    timestamp: str
