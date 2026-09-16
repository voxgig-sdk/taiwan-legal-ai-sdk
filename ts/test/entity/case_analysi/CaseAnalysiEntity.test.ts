

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { TaiwanLegalAiSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('CaseAnalysiEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TAIWAN_LEGAL_AI_TEST_LIVE=TRUE.
  afterEach(liveDelay('TAIWAN_LEGAL_AI_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TaiwanLegalAiSDK.test()
    const ent = testsdk.CaseAnalysi()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.TAIWAN_LEGAL_AI_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'case_analysi.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"analysisId","req":false,"short":"Unique identifier for the analysis","type":"`$STRING`","index$":0},{"active":true,"name":"applicableLaws","req":false,"short":"Laws applicable to this case","type":"`$ARRAY`","index$":1},{"active":true,"name":"caseDetails","req":true,"short":"Detailed description of the case","type":"`$STRING`","index$":2},{"active":true,"name":"caseType","req":false,"short":"Type of legal case","type":"`$STRING`","index$":3},{"active":true,"name":"language","req":false,"type":"`$STRING`","index$":4},{"active":true,"name":"legalIssues","req":false,"short":"Identified legal issues","type":"`$ARRAY`","index$":5},{"active":true,"name":"parties","req":false,"short":"Information about parties involved","type":"`$OBJECT`","index$":6},{"active":true,"name":"precedents","req":false,"short":"Relevant legal precedents","type":"`$ARRAY`","index$":7},{"active":true,"name":"recommendations","req":false,"short":"AI recommendations for case strategy","type":"`$STRING`","index$":8},{"active":true,"name":"summary","req":false,"short":"Summary of the case analysis","type":"`$STRING`","index$":9},{"active":true,"format":"date-time","name":"timestamp","req":false,"type":"`$STRING`","index$":10}],"name":"case_analysi","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{},"contract":{"id":"POST /case-analysis","json":"{\"operationId\":\"analyzeLegalCase\",\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"caseDetails\":{\"description\":\"Detailed description of the case\",\"example\":\"This case involves a contract dispute between...\",\"type\":\"string\"},\"caseType\":{\"description\":\"Type of legal case\",\"enum\":[\"civil\",\"criminal\",\"commercial\",\"labor\",\"family\",\"administrative\"],\"example\":\"commercial\",\"type\":\"string\"},\"language\":{\"default\":\"zh-TW\",\"enum\":[\"zh-TW\",\"en\"],\"example\":\"zh-TW\",\"type\":\"string\"},\"parties\":{\"description\":\"Information about parties involved\",\"properties\":{\"defendant\":{\"example\":\"Company B\",\"type\":\"string\"},\"plaintiff\":{\"example\":\"Company A\",\"type\":\"string\"}},\"type\":\"object\"}},\"required\":[\"caseDetails\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"analysisId\":{\"description\":\"Unique identifier for the analysis\",\"example\":\"ca-987654321\",\"type\":\"string\"},\"applicableLaws\":{\"description\":\"Laws applicable to this case\",\"items\":{\"properties\":{\"articles\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"lawName\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"legalIssues\":{\"description\":\"Identified legal issues\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"precedents\":{\"description\":\"Relevant legal precedents\",\"items\":{\"properties\":{\"caseNumber\":{\"type\":\"string\"},\"court\":{\"type\":\"string\"},\"summary\":{\"type\":\"string\"},\"year\":{\"type\":\"integer\"}},\"type\":\"object\"},\"type\":\"array\"},\"recommendations\":{\"description\":\"AI recommendations for case strategy\",\"type\":\"string\"},\"summary\":{\"description\":\"Summary of the case analysis\",\"type\":\"string\"},\"timestamp\":{\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Successful case analysis\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"details\":{\"description\":\"Additional error details\",\"type\":\"string\"},\"error\":{\"description\":\"Error code\",\"type\":\"string\"},\"message\":{\"description\":\"Human-readable error message\",\"type\":\"string\"},\"timestamp\":{\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Bad request\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"details\":{\"description\":\"Additional error details\",\"type\":\"string\"},\"error\":{\"description\":\"Error code\",\"type\":\"string\"},\"message\":{\"description\":\"Human-readable error message\",\"type\":\"string\"},\"timestamp\":{\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"security\":[{\"ApiKeyAuth\":[]},{\"BearerAuth\":[]}],\"securitySchemes\":{\"ApiKeyAuth\":{\"description\":\"API key for authentication\",\"in\":\"header\",\"name\":\"X-API-Key\",\"type\":\"apiKey\"},\"BearerAuth\":{\"bearerFormat\":\"JWT\",\"description\":\"JWT token authentication\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/case-analysis","segments":[{"lit":"case-analysis"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"case_analysi","name__orig":"case_analysi","Name":"CaseAnalysi","name_":"case_analysi","name-":"case-analysi","NAME":"CASE_ANALYSI","index$":0}, {"active":true,"entity":"case_analysi","key$":"BasicCaseAnalysiFlow","kind":"basic","name":"BasicCaseAnalysiFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"case_analysi_ref01"},"match":{},"op":"create","spec":[],"valid":[],"index$":0}]}, 'CaseAnalysi')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const case_analysi_ref01_ent = client.CaseAnalysi()
    let case_analysi_ref01_data = setup.data.new.case_analysi['case_analysi_ref01']

    case_analysi_ref01_data = (await case_analysi_ref01_ent.create(case_analysi_ref01_data)).data()
    assert(null != case_analysi_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/case_analysi/CaseAnalysiTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = TaiwanLegalAiSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['case_analysi01','case_analysi02','case_analysi03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TAIWAN_LEGAL_AI_TEST_CASE_ANALYSI_ENTID': idmap,
    'TAIWAN_LEGAL_AI_TEST_LIVE': 'FALSE',
    'TAIWAN_LEGAL_AI_TEST_EXPLAIN': 'FALSE',
    'TAIWAN_LEGAL_AI_APIKEY': '',
  })

  idmap = env['TAIWAN_LEGAL_AI_TEST_CASE_ANALYSI_ENTID']

  const live = 'TRUE' === env.TAIWAN_LEGAL_AI_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TAIWAN_LEGAL_AI_TEST_CASE_ANALYSI_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new TaiwanLegalAiSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
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
    ]))
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
  }

  return setup
}
  
