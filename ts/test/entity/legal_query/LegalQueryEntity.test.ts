

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"answer","req":false,"short":"AI-generated legal guidance","type":"`$STRING`","index$":0},{"active":true,"name":"category","req":false,"short":"Category of legal question","type":"`$STRING`","index$":1},{"active":true,"name":"language","req":false,"short":"Response language preference","type":"`$STRING`","index$":2},{"active":true,"name":"queryId","req":false,"short":"Unique identifier for the query","type":"`$STRING`","index$":3},{"active":true,"name":"question","op":{"create":{"req":true,"type":"`$STRING`"}},"req":false,"short":"The submitted question","type":"`$STRING`","index$":4},{"active":true,"name":"relevantLaws","req":false,"short":"List of relevant legal statutes","type":"`$ARRAY`","index$":5},{"active":true,"format":"date-time","name":"timestamp","req":false,"short":"Timestamp of the response","type":"`$STRING`","index$":6}],"name":"legal_query","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{},"contract":{"id":"POST /query","json":"{\"operationId\":\"submitLegalQuery\",\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"category\":{\"description\":\"Category of legal question\",\"enum\":[\"civil\",\"criminal\",\"commercial\",\"labor\",\"family\",\"administrative\",\"other\"],\"example\":\"civil\",\"type\":\"string\"},\"language\":{\"default\":\"zh-TW\",\"description\":\"Response language preference\",\"enum\":[\"zh-TW\",\"en\"],\"example\":\"zh-TW\",\"type\":\"string\"},\"question\":{\"description\":\"The legal question or query\",\"example\":\"What are the requirements for filing a lawsuit in Taiwan?\",\"type\":\"string\"}},\"required\":[\"question\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"answer\":{\"description\":\"AI-generated legal guidance\",\"example\":\"根據台灣民事訴訟法...\",\"type\":\"string\"},\"queryId\":{\"description\":\"Unique identifier for the query\",\"example\":\"q-123456789\",\"type\":\"string\"},\"question\":{\"description\":\"The submitted question\",\"example\":\"What are the requirements for filing a lawsuit in Taiwan?\",\"type\":\"string\"},\"relevantLaws\":{\"description\":\"List of relevant legal statutes\",\"items\":{\"properties\":{\"article\":{\"example\":\"第244條\",\"type\":\"string\"},\"content\":{\"example\":\"訴訟標的之價額...\",\"type\":\"string\"},\"lawName\":{\"example\":\"民事訴訟法\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"timestamp\":{\"description\":\"Timestamp of the response\",\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Successful response with legal guidance\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"details\":{\"description\":\"Additional error details\",\"type\":\"string\"},\"error\":{\"description\":\"Error code\",\"type\":\"string\"},\"message\":{\"description\":\"Human-readable error message\",\"type\":\"string\"},\"timestamp\":{\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Bad request - Invalid input\"},\"429\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"details\":{\"description\":\"Additional error details\",\"type\":\"string\"},\"error\":{\"description\":\"Error code\",\"type\":\"string\"},\"message\":{\"description\":\"Human-readable error message\",\"type\":\"string\"},\"timestamp\":{\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Too many requests - Rate limit exceeded\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"details\":{\"description\":\"Additional error details\",\"type\":\"string\"},\"error\":{\"description\":\"Error code\",\"type\":\"string\"},\"message\":{\"description\":\"Human-readable error message\",\"type\":\"string\"},\"timestamp\":{\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"security\":[{\"ApiKeyAuth\":[]},{\"BearerAuth\":[]}],\"securitySchemes\":{\"ApiKeyAuth\":{\"description\":\"API key for authentication\",\"in\":\"header\",\"name\":\"X-API-Key\",\"type\":\"apiKey\"},\"BearerAuth\":{\"bearerFormat\":\"JWT\",\"description\":\"JWT token authentication\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/query","segments":[{"lit":"query"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"legal_query","name__orig":"legal_query","Name":"LegalQuery","name_":"legal_query","name-":"legal-query","NAME":"LEGAL_QUERY","index$":2}, {"active":true,"entity":"legal_query","key$":"BasicLegalQueryFlow","kind":"basic","name":"BasicLegalQueryFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"legal_query_ref01"},"match":{},"op":"create","spec":[],"valid":[],"index$":0}]}, 'LegalQuery')
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
  
