"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('CaseAnalysiEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when TAIWAN_LEGAL_AI_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('TAIWAN_LEGAL_AI_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.TaiwanLegalAiSDK.test();
        const ent = testsdk.CaseAnalysi();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.TAIWAN_LEGAL_AI_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'case_analysi.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "analysisId": { "a": true, "h": "Analysis Id", "n": "analysisId", "r": false, "sh": "Unique identifier for the analysis", "t": "`$STRING`", "key$": "analysisId", "index$": 0 }, "applicableLaws": { "a": true, "h": "Applicable Laws", "n": "applicableLaws", "r": false, "sh": "Laws applicable to this case", "t": "`$ARRAY`", "key$": "applicableLaws", "index$": 1 }, "caseDetails": { "a": true, "h": "Case Details", "n": "caseDetails", "r": true, "sh": "Detailed description of the case", "t": "`$STRING`", "key$": "caseDetails", "index$": 2 }, "caseType": { "a": true, "h": "Case Type", "n": "caseType", "r": false, "sh": "Type of legal case", "t": "`$STRING`", "key$": "caseType", "index$": 3 }, "language": { "a": true, "h": "Language", "n": "language", "r": false, "t": "`$STRING`", "key$": "language", "index$": 4 }, "legalIssues": { "a": true, "h": "Legal Issues", "n": "legalIssues", "r": false, "sh": "Identified legal issues", "t": "`$ARRAY`", "key$": "legalIssues", "index$": 5 }, "parties": { "a": true, "h": "Parties", "n": "parties", "r": false, "sh": "Information about parties involved", "t": "`$OBJECT`", "key$": "parties", "index$": 6 }, "precedents": { "a": true, "h": "Precedents", "n": "precedents", "r": false, "sh": "Relevant legal precedents", "t": "`$ARRAY`", "key$": "precedents", "index$": 7 }, "recommendations": { "a": true, "h": "Recommendations", "n": "recommendations", "r": false, "sh": "AI recommendations for case strategy", "t": "`$STRING`", "key$": "recommendations", "index$": 8 }, "summary": { "a": true, "h": "Summary", "n": "summary", "r": false, "sh": "Summary of the case analysis", "t": "`$STRING`", "key$": "summary", "index$": 9 }, "timestamp": { "a": true, "fo": "date-time", "h": "Timestamp", "n": "timestamp", "r": false, "t": "`$STRING`", "key$": "timestamp", "index$": 10 } }, "name": "case_analysi", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /case-analysis", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/case-analysis", "q": {}, "r": {}, "s": [{ "lit": "case-analysis" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" } }, "relations": { "ancestors": [] }, "key$": "case_analysi", "name__orig": "case_analysi", "Name": "CaseAnalysi", "name_": "case_analysi", "name-": "case-analysi", "NAME": "CASE_ANALYSI", "index$": 0 }, { "active": true, "entity": "case_analysi", "key$": "BasicCaseAnalysiFlow", "kind": "basic", "name": "BasicCaseAnalysiFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "case_analysi_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }] }, 'CaseAnalysi', { "POST /case-analysis": { "protocol": "http", "operationId": "analyzeLegalCase", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "required": ["caseDetails"], "properties": { "caseDetails": { "type": "string", "description": "Detailed description of the case", "example": "This case involves a contract dispute between...", "key$": "caseDetails" }, "caseType": { "type": "string", "description": "Type of legal case", "enum": ["civil", "criminal", "commercial", "labor", "family", "administrative"], "example": "commercial", "key$": "caseType" }, "parties": { "type": "object", "description": "Information about parties involved", "properties": { "plaintiff": { "type": "string", "example": "Company A" }, "defendant": { "type": "string", "example": "Company B" } }, "key$": "parties" }, "language": { "type": "string", "enum": ["zh-TW", "en"], "default": "zh-TW", "example": "zh-TW", "key$": "language" } }, "index$": 1 } } } }, "responses": { "200": { "description": "Successful case analysis", "content": { "application/json": { "schema": { "type": "object", "properties": { "analysisId": { "type": "string", "description": "Unique identifier for the analysis", "example": "ca-987654321", "key$": "analysisId" }, "summary": { "type": "string", "description": "Summary of the case analysis", "key$": "summary" }, "legalIssues": { "type": "array", "description": "Identified legal issues", "items": { "type": "string" }, "key$": "legalIssues" }, "applicableLaws": { "type": "array", "description": "Laws applicable to this case", "items": { "type": "object", "properties": { "lawName": { "type": "string" }, "articles": { "type": "array", "items": { "type": "string" } } } }, "key$": "applicableLaws" }, "precedents": { "type": "array", "description": "Relevant legal precedents", "items": { "type": "object", "properties": { "caseNumber": { "type": "string" }, "court": { "type": "string" }, "year": { "type": "integer" }, "summary": { "type": "string" } } }, "key$": "precedents" }, "recommendations": { "type": "string", "description": "AI recommendations for case strategy", "key$": "recommendations" }, "timestamp": { "type": "string", "format": "date-time", "key$": "timestamp" } }, "index$": 0 } } } }, "400": { "description": "Bad request", "content": { "application/json": { "schema": { "type": "object", "properties": { "error": { "type": "string", "description": "Error code" }, "message": { "type": "string", "description": "Human-readable error message" }, "details": { "type": "string", "description": "Additional error details" }, "timestamp": { "type": "string", "format": "date-time" } }, "x-ref": "#/components/schemas/Error" } } } }, "500": { "description": "Internal server error", "content": { "application/json": { "schema": { "type": "object", "properties": { "error": { "type": "string", "description": "Error code" }, "message": { "type": "string", "description": "Human-readable error message" }, "details": { "type": "string", "description": "Additional error details" }, "timestamp": { "type": "string", "format": "date-time" } }, "x-ref": "#/components/schemas/Error" } } } } }, "parameters": [], "security": [{ "ApiKeyAuth": [] }, { "BearerAuth": [] }], "securitySource": "definition", "securitySchemes": { "ApiKeyAuth": { "type": "apiKey", "in": "header", "name": "X-API-Key", "description": "API key for authentication" }, "BearerAuth": { "type": "http", "scheme": "bearer", "bearerFormat": "JWT", "description": "JWT token authentication" } } } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const case_analysi_ref01_ent = client.CaseAnalysi();
        let case_analysi_ref01_data = setup.data.new.case_analysi['case_analysi_ref01'];
        case_analysi_ref01_data = (await case_analysi_ref01_ent.create(case_analysi_ref01_data)).data();
        (0, node_assert_1.default)(null != case_analysi_ref01_data);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/case_analysi/CaseAnalysiTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.TaiwanLegalAiSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['case_analysi01', 'case_analysi02', 'case_analysi03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'TAIWAN_LEGAL_AI_TEST_CASE_ANALYSI_ENTID': idmap,
        'TAIWAN_LEGAL_AI_TEST_LIVE': 'FALSE',
        'TAIWAN_LEGAL_AI_TEST_EXPLAIN': 'FALSE',
        'TAIWAN_LEGAL_AI_APIKEY': '',
    });
    idmap = env['TAIWAN_LEGAL_AI_TEST_CASE_ANALYSI_ENTID'];
    const live = 'TRUE' === env.TAIWAN_LEGAL_AI_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['TAIWAN_LEGAL_AI_TEST_CASE_ANALYSI_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.TaiwanLegalAiSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {
                apikey: env.TAIWAN_LEGAL_AI_APIKEY,
            },
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.TAIWAN_LEGAL_AI_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=CaseAnalysiEntity.test.js.map