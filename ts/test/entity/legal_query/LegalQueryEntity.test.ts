

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


describe('LegalQueryEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TAIWAN_LEGAL_AI_TEST_LIVE=TRUE.
  afterEach(liveDelay('TAIWAN_LEGAL_AI_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TaiwanLegalAiSDK.test()
    const ent = testsdk.LegalQuery()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.TAIWAN_LEGAL_AI_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'legal_query.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"answer":{"a":true,"h":"Answer","n":"answer","r":false,"sh":"AI-generated legal guidance","t":"`$STRING`","key$":"answer","index$":0},"category":{"a":true,"h":"Category","n":"category","r":false,"sh":"Category of legal question","t":"`$STRING`","key$":"category","index$":1},"language":{"a":true,"h":"Language","n":"language","r":false,"sh":"Response language preference","t":"`$STRING`","key$":"language","index$":2},"queryId":{"a":true,"h":"Query Id","n":"queryId","r":false,"sh":"Unique identifier for the query","t":"`$STRING`","key$":"queryId","index$":3},"question":{"a":true,"h":"Question","n":"question","op":{"create":{"req":true,"type":"`$STRING`"}},"r":false,"sh":"The submitted question","t":"`$STRING`","key$":"question","index$":4},"relevantLaws":{"a":true,"h":"Relevant Laws","n":"relevantLaws","r":false,"sh":"List of relevant legal statutes","t":"`$ARRAY`","key$":"relevantLaws","index$":5},"timestamp":{"a":true,"fo":"date-time","h":"Timestamp","n":"timestamp","r":false,"sh":"Timestamp of the response","t":"`$STRING`","key$":"timestamp","index$":6}},"name":"legal_query","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /query","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/query","q":{},"r":{},"s":[{"lit":"query"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"legal_query","name__orig":"legal_query","Name":"LegalQuery","name_":"legal_query","name-":"legal-query","NAME":"LEGAL_QUERY","index$":2}, {"active":true,"entity":"legal_query","key$":"BasicLegalQueryFlow","kind":"basic","name":"BasicLegalQueryFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"legal_query_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'LegalQuery', {"POST /query":{"protocol":"http","operationId":"submitLegalQuery","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["question"],"properties":{"question":{"type":"string","description":"The legal question or query","example":"What are the requirements for filing a lawsuit in Taiwan?","key$":"question"},"category":{"type":"string","description":"Category of legal question","enum":["civil","criminal","commercial","labor","family","administrative","other"],"example":"civil","key$":"category"},"language":{"type":"string","description":"Response language preference","enum":["zh-TW","en"],"default":"zh-TW","example":"zh-TW","key$":"language"}},"index$":1}}}},"responses":{"200":{"description":"Successful response with legal guidance","content":{"application/json":{"schema":{"type":"object","properties":{"queryId":{"type":"string","description":"Unique identifier for the query","example":"q-123456789","key$":"queryId"},"question":{"type":"string","description":"The submitted question","example":"What are the requirements for filing a lawsuit in Taiwan?","key$":"question"},"answer":{"type":"string","description":"AI-generated legal guidance","example":"根據台灣民事訴訟法...","key$":"answer"},"relevantLaws":{"type":"array","description":"List of relevant legal statutes","items":{"type":"object","properties":{"lawName":{"type":"string","example":"民事訴訟法"},"article":{"type":"string","example":"第244條"},"content":{"type":"string","example":"訴訟標的之價額..."}}},"key$":"relevantLaws"},"timestamp":{"type":"string","format":"date-time","description":"Timestamp of the response","key$":"timestamp"}},"index$":0}}}},"400":{"description":"Bad request - Invalid input","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","description":"Error code"},"message":{"type":"string","description":"Human-readable error message"},"details":{"type":"string","description":"Additional error details"},"timestamp":{"type":"string","format":"date-time"}},"x-ref":"#/components/schemas/Error"}}}},"429":{"description":"Too many requests - Rate limit exceeded","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","description":"Error code"},"message":{"type":"string","description":"Human-readable error message"},"details":{"type":"string","description":"Additional error details"},"timestamp":{"type":"string","format":"date-time"}},"x-ref":"#/components/schemas/Error"}}}},"500":{"description":"Internal server error","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","description":"Error code"},"message":{"type":"string","description":"Human-readable error message"},"details":{"type":"string","description":"Additional error details"},"timestamp":{"type":"string","format":"date-time"}},"x-ref":"#/components/schemas/Error"}}}}},"parameters":[],"security":[{"ApiKeyAuth":[]},{"BearerAuth":[]}],"securitySource":"definition","securitySchemes":{"ApiKeyAuth":{"type":"apiKey","in":"header","name":"X-API-Key","description":"API key for authentication"},"BearerAuth":{"type":"http","scheme":"bearer","bearerFormat":"JWT","description":"JWT token authentication"}}}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const legal_query_ref01_ent = client.LegalQuery()
    let legal_query_ref01_data = setup.data.new.legal_query['legal_query_ref01']

    legal_query_ref01_data = (await legal_query_ref01_ent.create(legal_query_ref01_data)).data()
    assert(null != legal_query_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/legal_query/LegalQueryTestData.json')

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
    ['legal_query01','legal_query02','legal_query03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TAIWAN_LEGAL_AI_TEST_LEGAL_QUERY_ENTID': idmap,
    'TAIWAN_LEGAL_AI_TEST_LIVE': 'FALSE',
    'TAIWAN_LEGAL_AI_TEST_EXPLAIN': 'FALSE',
    'TAIWAN_LEGAL_AI_APIKEY': '',
  })

  idmap = env['TAIWAN_LEGAL_AI_TEST_LEGAL_QUERY_ENTID']

  const live = 'TRUE' === env.TAIWAN_LEGAL_AI_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TAIWAN_LEGAL_AI_TEST_LEGAL_QUERY_ENTID']
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
  
