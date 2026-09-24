

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"analysisId":{"a":true,"h":"Analysis Id","n":"analysisId","r":false,"sh":"Unique identifier for the analysis","t":"`$STRING`","key$":"analysisId","index$":0},"applicableLaws":{"a":true,"h":"Applicable Laws","n":"applicableLaws","r":false,"sh":"Laws applicable to this case","t":"`$ARRAY`","key$":"applicableLaws","index$":1},"caseDetails":{"a":true,"h":"Case Details","n":"caseDetails","r":true,"sh":"Detailed description of the case","t":"`$STRING`","key$":"caseDetails","index$":2},"caseType":{"a":true,"h":"Case Type","n":"caseType","r":false,"sh":"Type of legal case","t":"`$STRING`","key$":"caseType","index$":3},"language":{"a":true,"h":"Language","n":"language","r":false,"t":"`$STRING`","key$":"language","index$":4},"legalIssues":{"a":true,"h":"Legal Issues","n":"legalIssues","r":false,"sh":"Identified legal issues","t":"`$ARRAY`","key$":"legalIssues","index$":5},"parties":{"a":true,"h":"Parties","n":"parties","r":false,"sh":"Information about parties involved","t":"`$OBJECT`","key$":"parties","index$":6},"precedents":{"a":true,"h":"Precedents","n":"precedents","r":false,"sh":"Relevant legal precedents","t":"`$ARRAY`","key$":"precedents","index$":7},"recommendations":{"a":true,"h":"Recommendations","n":"recommendations","r":false,"sh":"AI recommendations for case strategy","t":"`$STRING`","key$":"recommendations","index$":8},"summary":{"a":true,"h":"Summary","n":"summary","r":false,"sh":"Summary of the case analysis","t":"`$STRING`","key$":"summary","index$":9},"timestamp":{"a":true,"fo":"date-time","h":"Timestamp","n":"timestamp","r":false,"t":"`$STRING`","key$":"timestamp","index$":10}},"name":"case_analysi","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /case-analysis","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/case-analysis","q":{},"r":{},"s":[{"lit":"case-analysis"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"case_analysi","name__orig":"case_analysi","Name":"CaseAnalysi","name_":"case_analysi","name-":"case-analysi","NAME":"CASE_ANALYSI","index$":0}, {"active":true,"entity":"case_analysi","key$":"BasicCaseAnalysiFlow","kind":"basic","name":"BasicCaseAnalysiFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"case_analysi_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'CaseAnalysi', {"POST /case-analysis":{"protocol":"http","operationId":"analyzeLegalCase","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["caseDetails"],"properties":{"caseDetails":{"type":"string","description":"Detailed description of the case","example":"This case involves a contract dispute between...","key$":"caseDetails"},"caseType":{"type":"string","description":"Type of legal case","enum":["civil","criminal","commercial","labor","family","administrative"],"example":"commercial","key$":"caseType"},"parties":{"type":"object","description":"Information about parties involved","properties":{"plaintiff":{"type":"string","example":"Company A"},"defendant":{"type":"string","example":"Company B"}},"key$":"parties"},"language":{"type":"string","enum":["zh-TW","en"],"default":"zh-TW","example":"zh-TW","key$":"language"}},"index$":1}}}},"responses":{"200":{"description":"Successful case analysis","content":{"application/json":{"schema":{"type":"object","properties":{"analysisId":{"type":"string","description":"Unique identifier for the analysis","example":"ca-987654321","key$":"analysisId"},"summary":{"type":"string","description":"Summary of the case analysis","key$":"summary"},"legalIssues":{"type":"array","description":"Identified legal issues","items":{"type":"string"},"key$":"legalIssues"},"applicableLaws":{"type":"array","description":"Laws applicable to this case","items":{"type":"object","properties":{"lawName":{"type":"string"},"articles":{"type":"array","items":{"type":"string"}}}},"key$":"applicableLaws"},"precedents":{"type":"array","description":"Relevant legal precedents","items":{"type":"object","properties":{"caseNumber":{"type":"string"},"court":{"type":"string"},"year":{"type":"integer"},"summary":{"type":"string"}}},"key$":"precedents"},"recommendations":{"type":"string","description":"AI recommendations for case strategy","key$":"recommendations"},"timestamp":{"type":"string","format":"date-time","key$":"timestamp"}},"index$":0}}}},"400":{"description":"Bad request","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","description":"Error code"},"message":{"type":"string","description":"Human-readable error message"},"details":{"type":"string","description":"Additional error details"},"timestamp":{"type":"string","format":"date-time"}},"x-ref":"#/components/schemas/Error"}}}},"500":{"description":"Internal server error","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","description":"Error code"},"message":{"type":"string","description":"Human-readable error message"},"details":{"type":"string","description":"Additional error details"},"timestamp":{"type":"string","format":"date-time"}},"x-ref":"#/components/schemas/Error"}}}}},"parameters":[],"security":[{"ApiKeyAuth":[]},{"BearerAuth":[]}],"securitySource":"definition","securitySchemes":{"ApiKeyAuth":{"type":"apiKey","in":"header","name":"X-API-Key","description":"API key for authentication"},"BearerAuth":{"type":"http","scheme":"bearer","bearerFormat":"JWT","description":"JWT token authentication"}}}})
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
  
