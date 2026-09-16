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
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('ContractServiceEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when TAIWAN_LEGAL_AI_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('TAIWAN_LEGAL_AI_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.TaiwanLegalAiSDK.test();
        const ent = testsdk.ContractService();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.TAIWAN_LEGAL_AI_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'contract_service.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "clauses", "req": false, "short": "List of contract clauses", "type": "`$ARRAY`", "index$": 0 }, { "active": true, "name": "complianceCheck", "req": false, "short": "Compliance with Taiwan laws", "type": "`$OBJECT`", "index$": 1 }, { "active": true, "name": "content", "req": false, "short": "The complete contract draft text", "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "contractText", "req": true, "short": "The complete contract text to be reviewed", "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "contractType", "op": { "create": { "req": true, "type": "`$STRING`" } }, "req": false, "short": "Type of contract to draft", "type": "`$STRING`", "index$": 4 }, { "active": true, "name": "draftId", "req": false, "short": "Unique identifier for the contract draft", "type": "`$STRING`", "index$": 5 }, { "active": true, "name": "focusAreas", "req": false, "short": "Specific areas to focus the review on", "type": "`$ARRAY`", "index$": 6 }, { "active": true, "name": "issues", "req": false, "short": "Identified issues and concerns", "type": "`$ARRAY`", "index$": 7 }, { "active": true, "name": "language", "req": false, "type": "`$STRING`", "index$": 8 }, { "active": true, "name": "missingClauses", "req": false, "short": "Important clauses that are missing", "type": "`$ARRAY`", "index$": 9 }, { "active": true, "name": "notes", "req": false, "short": "Important notes and considerations", "type": "`$STRING`", "index$": 10 }, { "active": true, "name": "overallAssessment", "req": false, "short": "Overall assessment of the contract", "type": "`$STRING`", "index$": 11 }, { "active": true, "name": "parties", "req": false, "short": "Information about contracting parties", "type": "`$OBJECT`", "index$": 12 }, { "active": true, "name": "recommendations", "req": false, "short": "Recommended changes and improvements", "type": "`$ARRAY`", "index$": 13 }, { "active": true, "name": "requirements", "req": true, "short": "Specific requirements and terms for the contract", "type": "`$STRING`", "index$": 14 }, { "active": true, "name": "reviewId", "req": false, "short": "Unique identifier for the review", "type": "`$STRING`", "index$": 15 }, { "active": true, "name": "riskLevel", "req": false, "short": "Overall risk level assessment", "type": "`$STRING`", "index$": 16 }, { "active": true, "name": "specificClauses", "req": false, "short": "Specific clauses to include", "type": "`$ARRAY`", "index$": 17 }, { "active": true, "format": "date-time", "name": "timestamp", "req": false, "type": "`$STRING`", "index$": 18 }], "name": "contract_service", "op": { "create": { "input": "data", "name": "create", "points": [{ "active": true, "args": {}, "contract": { "id": "POST /contract/draft", "json": "{\"operationId\":\"draftContract\",\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"contractType\":{\"description\":\"Type of contract to draft\",\"enum\":[\"employment\",\"lease\",\"sales\",\"service\",\"nda\",\"partnership\",\"other\"],\"example\":\"employment\",\"type\":\"string\"},\"language\":{\"default\":\"zh-TW\",\"enum\":[\"zh-TW\",\"en\"],\"example\":\"zh-TW\",\"type\":\"string\"},\"parties\":{\"description\":\"Information about contracting parties\",\"properties\":{\"party1\":{\"example\":\"ABC Corporation\",\"type\":\"string\"},\"party2\":{\"example\":\"John Doe\",\"type\":\"string\"}},\"type\":\"object\"},\"requirements\":{\"description\":\"Specific requirements and terms for the contract\",\"example\":\"Full-time employment contract with 6-month probation period\",\"type\":\"string\"},\"specificClauses\":{\"description\":\"Specific clauses to include\",\"example\":[\"confidentiality\",\"non-compete\",\"termination\"],\"items\":{\"type\":\"string\"},\"type\":\"array\"}},\"required\":[\"contractType\",\"requirements\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"clauses\":{\"description\":\"List of contract clauses\",\"items\":{\"properties\":{\"clauseNumber\":{\"type\":\"string\"},\"content\":{\"type\":\"string\"},\"title\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"content\":{\"description\":\"The complete contract draft text\",\"type\":\"string\"},\"contractType\":{\"example\":\"employment\",\"type\":\"string\"},\"draftId\":{\"description\":\"Unique identifier for the contract draft\",\"example\":\"cd-555666777\",\"type\":\"string\"},\"notes\":{\"description\":\"Important notes and considerations\",\"type\":\"string\"},\"timestamp\":{\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Successfully generated contract draft\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"details\":{\"description\":\"Additional error details\",\"type\":\"string\"},\"error\":{\"description\":\"Error code\",\"type\":\"string\"},\"message\":{\"description\":\"Human-readable error message\",\"type\":\"string\"},\"timestamp\":{\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Bad request\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"details\":{\"description\":\"Additional error details\",\"type\":\"string\"},\"error\":{\"description\":\"Error code\",\"type\":\"string\"},\"message\":{\"description\":\"Human-readable error message\",\"type\":\"string\"},\"timestamp\":{\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"security\":[{\"ApiKeyAuth\":[]},{\"BearerAuth\":[]}],\"securitySchemes\":{\"ApiKeyAuth\":{\"description\":\"API key for authentication\",\"in\":\"header\",\"name\":\"X-API-Key\",\"type\":\"apiKey\"},\"BearerAuth\":{\"bearerFormat\":\"JWT\",\"description\":\"JWT token authentication\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "POST", "orig": "/contract/draft", "segments": [{ "lit": "contract" }, { "lit": "draft" }], "select": {}, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "active": true, "args": {}, "contract": { "id": "POST /contract/review", "json": "{\"operationId\":\"reviewContract\",\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"contractText\":{\"description\":\"The complete contract text to be reviewed\",\"type\":\"string\"},\"contractType\":{\"description\":\"Type of contract\",\"enum\":[\"employment\",\"lease\",\"sales\",\"service\",\"nda\",\"partnership\",\"other\"],\"example\":\"lease\",\"type\":\"string\"},\"focusAreas\":{\"description\":\"Specific areas to focus the review on\",\"example\":[\"liability\",\"termination\"],\"items\":{\"enum\":[\"liability\",\"termination\",\"payment\",\"confidentiality\",\"compliance\",\"all\"],\"type\":\"string\"},\"type\":\"array\"},\"language\":{\"default\":\"zh-TW\",\"enum\":[\"zh-TW\",\"en\"],\"example\":\"zh-TW\",\"type\":\"string\"}},\"required\":[\"contractText\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"complianceCheck\":{\"description\":\"Compliance with Taiwan laws\",\"properties\":{\"compliant\":{\"type\":\"boolean\"},\"issues\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"}},\"type\":\"object\"},\"issues\":{\"description\":\"Identified issues and concerns\",\"items\":{\"properties\":{\"clause\":{\"description\":\"Clause reference\",\"type\":\"string\"},\"issue\":{\"description\":\"Description of the issue\",\"type\":\"string\"},\"recommendation\":{\"description\":\"Recommended action\",\"type\":\"string\"},\"severity\":{\"enum\":[\"critical\",\"high\",\"medium\",\"low\"],\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"missingClauses\":{\"description\":\"Important clauses that are missing\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"overallAssessment\":{\"description\":\"Overall assessment of the contract\",\"example\":\"This contract generally protects both parties' interests but requires attention to specific clauses.\",\"type\":\"string\"},\"recommendations\":{\"description\":\"Recommended changes and improvements\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"reviewId\":{\"description\":\"Unique identifier for the review\",\"example\":\"cr-111222333\",\"type\":\"string\"},\"riskLevel\":{\"description\":\"Overall risk level assessment\",\"enum\":[\"low\",\"medium\",\"high\"],\"example\":\"medium\",\"type\":\"string\"},\"timestamp\":{\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Successfully reviewed contract\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"details\":{\"description\":\"Additional error details\",\"type\":\"string\"},\"error\":{\"description\":\"Error code\",\"type\":\"string\"},\"message\":{\"description\":\"Human-readable error message\",\"type\":\"string\"},\"timestamp\":{\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Bad request\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"details\":{\"description\":\"Additional error details\",\"type\":\"string\"},\"error\":{\"description\":\"Error code\",\"type\":\"string\"},\"message\":{\"description\":\"Human-readable error message\",\"type\":\"string\"},\"timestamp\":{\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"security\":[{\"ApiKeyAuth\":[]},{\"BearerAuth\":[]}],\"securitySchemes\":{\"ApiKeyAuth\":{\"description\":\"API key for authentication\",\"in\":\"header\",\"name\":\"X-API-Key\",\"type\":\"apiKey\"},\"BearerAuth\":{\"bearerFormat\":\"JWT\",\"description\":\"JWT token authentication\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "POST", "orig": "/contract/review", "segments": [{ "lit": "contract" }, { "lit": "review" }], "select": {}, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "create" } }, "relations": { "ancestors": [] }, "key$": "contract_service", "name__orig": "contract_service", "Name": "ContractService", "name_": "contract_service", "name-": "contract-service", "NAME": "CONTRACT_SERVICE", "index$": 1 }, { "active": true, "entity": "contract_service", "key$": "BasicContractServiceFlow", "kind": "basic", "name": "BasicContractServiceFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "contract_service_ref01" }, "match": {}, "op": "create", "spec": [], "valid": [], "index$": 0 }] }, 'ContractService');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const contract_service_ref01_ent = client.ContractService();
        let contract_service_ref01_data = setup.data.new.contract_service['contract_service_ref01'];
        contract_service_ref01_data = (await contract_service_ref01_ent.create(contract_service_ref01_data)).data();
        (0, node_assert_1.default)(null != contract_service_ref01_data);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/contract_service/ContractServiceTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.TaiwanLegalAiSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['contract_service01', 'contract_service02', 'contract_service03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'TAIWAN_LEGAL_AI_TEST_CONTRACT_SERVICE_ENTID': idmap,
        'TAIWAN_LEGAL_AI_TEST_LIVE': 'FALSE',
        'TAIWAN_LEGAL_AI_TEST_EXPLAIN': 'FALSE',
        'TAIWAN_LEGAL_AI_APIKEY': '',
    });
    idmap = env['TAIWAN_LEGAL_AI_TEST_CONTRACT_SERVICE_ENTID'];
    const live = 'TRUE' === env.TAIWAN_LEGAL_AI_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['TAIWAN_LEGAL_AI_TEST_CONTRACT_SERVICE_ENTID'];
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
//# sourceMappingURL=ContractServiceEntity.test.js.map