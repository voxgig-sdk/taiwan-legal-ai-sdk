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
(0, node_test_1.describe)('LegalQueryEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when TAIWAN_LEGAL_AI_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('TAIWAN_LEGAL_AI_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.TaiwanLegalAiSDK.test();
        const ent = testsdk.LegalQuery();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.TAIWAN_LEGAL_AI_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'legal_query.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "answer": { "a": true, "h": "Answer", "n": "answer", "r": false, "sh": "AI-generated legal guidance", "t": "`$STRING`", "key$": "answer", "index$": 0 }, "category": { "a": true, "h": "Category", "n": "category", "r": false, "sh": "Category of legal question", "t": "`$STRING`", "key$": "category", "index$": 1 }, "language": { "a": true, "h": "Language", "n": "language", "r": false, "sh": "Response language preference", "t": "`$STRING`", "key$": "language", "index$": 2 }, "queryId": { "a": true, "h": "Query Id", "n": "queryId", "r": false, "sh": "Unique identifier for the query", "t": "`$STRING`", "key$": "queryId", "index$": 3 }, "question": { "a": true, "h": "Question", "n": "question", "op": { "create": { "req": true, "type": "`$STRING`" } }, "r": false, "sh": "The submitted question", "t": "`$STRING`", "key$": "question", "index$": 4 }, "relevantLaws": { "a": true, "h": "Relevant Laws", "n": "relevantLaws", "r": false, "sh": "List of relevant legal statutes", "t": "`$ARRAY`", "key$": "relevantLaws", "index$": 5 }, "timestamp": { "a": true, "fo": "date-time", "h": "Timestamp", "n": "timestamp", "r": false, "sh": "Timestamp of the response", "t": "`$STRING`", "key$": "timestamp", "index$": 6 } }, "name": "legal_query", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /query", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/query", "q": {}, "r": {}, "s": [{ "lit": "query" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" } }, "relations": { "ancestors": [] }, "key$": "legal_query", "name__orig": "legal_query", "Name": "LegalQuery", "name_": "legal_query", "name-": "legal-query", "NAME": "LEGAL_QUERY", "index$": 2 }, { "active": true, "entity": "legal_query", "key$": "BasicLegalQueryFlow", "kind": "basic", "name": "BasicLegalQueryFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "legal_query_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }] }, 'LegalQuery', { "POST /query": { "protocol": "http", "operationId": "submitLegalQuery", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "required": ["question"], "properties": { "question": { "type": "string", "description": "The legal question or query", "example": "What are the requirements for filing a lawsuit in Taiwan?", "key$": "question" }, "category": { "type": "string", "description": "Category of legal question", "enum": ["civil", "criminal", "commercial", "labor", "family", "administrative", "other"], "example": "civil", "key$": "category" }, "language": { "type": "string", "description": "Response language preference", "enum": ["zh-TW", "en"], "default": "zh-TW", "example": "zh-TW", "key$": "language" } }, "index$": 1 } } } }, "responses": { "200": { "description": "Successful response with legal guidance", "content": { "application/json": { "schema": { "type": "object", "properties": { "queryId": { "type": "string", "description": "Unique identifier for the query", "example": "q-123456789", "key$": "queryId" }, "question": { "type": "string", "description": "The submitted question", "example": "What are the requirements for filing a lawsuit in Taiwan?", "key$": "question" }, "answer": { "type": "string", "description": "AI-generated legal guidance", "example": "根據台灣民事訴訟法...", "key$": "answer" }, "relevantLaws": { "type": "array", "description": "List of relevant legal statutes", "items": { "type": "object", "properties": { "lawName": { "type": "string", "example": "民事訴訟法" }, "article": { "type": "string", "example": "第244條" }, "content": { "type": "string", "example": "訴訟標的之價額..." } } }, "key$": "relevantLaws" }, "timestamp": { "type": "string", "format": "date-time", "description": "Timestamp of the response", "key$": "timestamp" } }, "index$": 0 } } } }, "400": { "description": "Bad request - Invalid input", "content": { "application/json": { "schema": { "type": "object", "properties": { "error": { "type": "string", "description": "Error code" }, "message": { "type": "string", "description": "Human-readable error message" }, "details": { "type": "string", "description": "Additional error details" }, "timestamp": { "type": "string", "format": "date-time" } }, "x-ref": "#/components/schemas/Error" } } } }, "429": { "description": "Too many requests - Rate limit exceeded", "content": { "application/json": { "schema": { "type": "object", "properties": { "error": { "type": "string", "description": "Error code" }, "message": { "type": "string", "description": "Human-readable error message" }, "details": { "type": "string", "description": "Additional error details" }, "timestamp": { "type": "string", "format": "date-time" } }, "x-ref": "#/components/schemas/Error" } } } }, "500": { "description": "Internal server error", "content": { "application/json": { "schema": { "type": "object", "properties": { "error": { "type": "string", "description": "Error code" }, "message": { "type": "string", "description": "Human-readable error message" }, "details": { "type": "string", "description": "Additional error details" }, "timestamp": { "type": "string", "format": "date-time" } }, "x-ref": "#/components/schemas/Error" } } } } }, "parameters": [], "security": [{ "ApiKeyAuth": [] }, { "BearerAuth": [] }], "securitySource": "definition", "securitySchemes": { "ApiKeyAuth": { "type": "apiKey", "in": "header", "name": "X-API-Key", "description": "API key for authentication" }, "BearerAuth": { "type": "http", "scheme": "bearer", "bearerFormat": "JWT", "description": "JWT token authentication" } } } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const legal_query_ref01_ent = client.LegalQuery();
        let legal_query_ref01_data = setup.data.new.legal_query['legal_query_ref01'];
        legal_query_ref01_data = (await legal_query_ref01_ent.create(legal_query_ref01_data)).data();
        (0, node_assert_1.default)(null != legal_query_ref01_data);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/legal_query/LegalQueryTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.TaiwanLegalAiSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['legal_query01', 'legal_query02', 'legal_query03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'TAIWAN_LEGAL_AI_TEST_LEGAL_QUERY_ENTID': idmap,
        'TAIWAN_LEGAL_AI_TEST_LIVE': 'FALSE',
        'TAIWAN_LEGAL_AI_TEST_EXPLAIN': 'FALSE',
        'TAIWAN_LEGAL_AI_APIKEY': '',
    });
    idmap = env['TAIWAN_LEGAL_AI_TEST_LEGAL_QUERY_ENTID'];
    const live = 'TRUE' === env.TAIWAN_LEGAL_AI_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['TAIWAN_LEGAL_AI_TEST_LEGAL_QUERY_ENTID'];
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
//# sourceMappingURL=LegalQueryEntity.test.js.map