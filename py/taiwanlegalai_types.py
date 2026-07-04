# Typed models for the TaiwanLegalAi SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class CaseAnalysi:
    case_detail: str
    analysis_id: Optional[str] = None
    applicable_law: Optional[list] = None
    case_type: Optional[str] = None
    language: Optional[str] = None
    legal_issue: Optional[list] = None
    party: Optional[dict] = None
    precedent: Optional[list] = None
    recommendation: Optional[str] = None
    summary: Optional[str] = None
    timestamp: Optional[str] = None


@dataclass
class CaseAnalysiCreateData:
    analysis_id: Optional[str] = None
    applicable_law: Optional[list] = None
    case_detail: Optional[str] = None
    case_type: Optional[str] = None
    language: Optional[str] = None
    legal_issue: Optional[list] = None
    party: Optional[dict] = None
    precedent: Optional[list] = None
    recommendation: Optional[str] = None
    summary: Optional[str] = None
    timestamp: Optional[str] = None


@dataclass
class ContractService:
    contract_text: str
    requirement: str
    claus: Optional[list] = None
    compliance_check: Optional[dict] = None
    content: Optional[str] = None
    contract_type: Optional[str] = None
    draft_id: Optional[str] = None
    focus_area: Optional[list] = None
    issue: Optional[list] = None
    language: Optional[str] = None
    missing_claus: Optional[list] = None
    note: Optional[str] = None
    overall_assessment: Optional[str] = None
    party: Optional[dict] = None
    recommendation: Optional[list] = None
    review_id: Optional[str] = None
    risk_level: Optional[str] = None
    specific_claus: Optional[list] = None
    timestamp: Optional[str] = None


@dataclass
class ContractServiceCreateData:
    claus: Optional[list] = None
    compliance_check: Optional[dict] = None
    content: Optional[str] = None
    contract_text: Optional[str] = None
    contract_type: Optional[str] = None
    draft_id: Optional[str] = None
    focus_area: Optional[list] = None
    issue: Optional[list] = None
    language: Optional[str] = None
    missing_claus: Optional[list] = None
    note: Optional[str] = None
    overall_assessment: Optional[str] = None
    party: Optional[dict] = None
    recommendation: Optional[list] = None
    requirement: Optional[str] = None
    review_id: Optional[str] = None
    risk_level: Optional[str] = None
    specific_claus: Optional[list] = None
    timestamp: Optional[str] = None


@dataclass
class LegalQuery:
    answer: Optional[str] = None
    category: Optional[str] = None
    language: Optional[str] = None
    query_id: Optional[str] = None
    question: Optional[str] = None
    relevant_law: Optional[list] = None
    timestamp: Optional[str] = None


@dataclass
class LegalQueryCreateData:
    answer: Optional[str] = None
    category: Optional[str] = None
    language: Optional[str] = None
    query_id: Optional[str] = None
    question: Optional[str] = None
    relevant_law: Optional[list] = None
    timestamp: Optional[str] = None

