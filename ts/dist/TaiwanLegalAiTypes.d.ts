export interface CaseAnalysi {
    analysisId?: string;
    applicableLaws?: any[];
    caseDetails: string;
    caseType?: string;
    language?: string;
    legalIssues?: any[];
    parties?: Record<string, any>;
    precedents?: any[];
    recommendations?: string;
    summary?: string;
    timestamp?: string;
}
export interface CaseAnalysiCreateData {
    caseDetails: string;
    caseType?: string;
    language?: string;
    parties?: Record<string, any>;
}
export interface ContractService {
    clauses?: any[];
    complianceCheck?: Record<string, any>;
    content?: string;
    contractText: string;
    contractType?: string;
    draftId?: string;
    focusAreas?: any[];
    issues?: any[];
    language?: string;
    missingClauses?: any[];
    notes?: string;
    overallAssessment?: string;
    parties?: Record<string, any>;
    recommendations?: any[];
    requirements: string;
    reviewId?: string;
    riskLevel?: string;
    specificClauses?: any[];
    timestamp?: string;
}
export interface ContractServiceCreateData {
    contractText: string;
    contractType: string;
    focusAreas?: any[];
    language?: string;
    parties?: Record<string, any>;
    requirements: string;
    specificClauses?: any[];
}
export interface LegalQuery {
    answer?: string;
    category?: string;
    language?: string;
    queryId?: string;
    question?: string;
    relevantLaws?: any[];
    timestamp?: string;
}
export interface LegalQueryCreateData {
    category?: string;
    language?: string;
    question: string;
}
