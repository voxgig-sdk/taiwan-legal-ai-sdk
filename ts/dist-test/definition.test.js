"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const __1 = require("..");
const definition_runner_1 = require("./definition-runner");
const utility_1 = require("./utility");
// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN = [
    {
        "entity": "case_analysi",
        "accessor": "CaseAnalysi",
        "op": "create",
        "method": "POST",
        "path": "/case-analysis",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "x-api-key"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "analysisId": "ca-987654321",
            "summary": "x",
            "legalIssues": [
                "x"
            ],
            "applicableLaws": [
                {
                    "lawName": "x",
                    "articles": [
                        "x"
                    ]
                }
            ],
            "precedents": [
                {
                    "caseNumber": "x",
                    "court": "x",
                    "year": 1,
                    "summary": "x"
                }
            ],
            "recommendations": "x",
            "timestamp": "2026-01-01T00:00:00Z"
        },
        "idField": "id"
    },
    {
        "entity": "legal_query",
        "accessor": "LegalQuery",
        "op": "create",
        "method": "POST",
        "path": "/query",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "x-api-key"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "queryId": "q-123456789",
            "question": "What are the requirements for filing a lawsuit in Taiwan?",
            "answer": "根據台灣民事訴訟法...",
            "relevantLaws": [
                {
                    "lawName": "民事訴訟法",
                    "article": "第244條",
                    "content": "訴訟標的之價額..."
                }
            ],
            "timestamp": "2026-01-01T00:00:00Z"
        },
        "idField": "id"
    }
];
(0, node_test_1.describe)('definition', () => {
    for (const point of PLAN) {
        (0, node_test_1.test)(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
            const control = (0, utility_1.isControlSkipped)('entityOp', point.entity + '.' + point.op, 'definition');
            if (control.skip) {
                t.skip(control.reason || 'skipped via sdk-test-control.json');
                return;
            }
            await (0, definition_runner_1.runDefinitionPoint)(__1.SDK, point);
        });
    }
});
//# sourceMappingURL=definition.test.js.map