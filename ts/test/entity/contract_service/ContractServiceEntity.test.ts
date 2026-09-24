

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


describe('ContractServiceEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TAIWAN_LEGAL_AI_TEST_LIVE=TRUE.
  afterEach(liveDelay('TAIWAN_LEGAL_AI_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TaiwanLegalAiSDK.test()
    const ent = testsdk.ContractService()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.TAIWAN_LEGAL_AI_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'contract_service.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"clauses":{"a":true,"h":"Clauses","n":"clauses","r":false,"sh":"List of contract clauses","t":"`$ARRAY`","key$":"clauses","index$":0},"complianceCheck":{"a":true,"h":"Compliance Check","n":"complianceCheck","r":false,"sh":"Compliance with Taiwan laws","t":"`$OBJECT`","key$":"complianceCheck","index$":1},"content":{"a":true,"h":"Content","n":"content","r":false,"sh":"The complete contract draft text","t":"`$STRING`","key$":"content","index$":2},"contractText":{"a":true,"h":"Contract Text","n":"contractText","r":true,"sh":"The complete contract text to be reviewed","t":"`$STRING`","key$":"contractText","index$":3},"contractType":{"a":true,"h":"Contract Type","n":"contractType","op":{"create":{"req":true,"type":"`$STRING`"}},"r":false,"sh":"Type of contract to draft","t":"`$STRING`","key$":"contractType","index$":4},"draftId":{"a":true,"h":"Draft Id","n":"draftId","r":false,"sh":"Unique identifier for the contract draft","t":"`$STRING`","key$":"draftId","index$":5},"focusAreas":{"a":true,"h":"Focus Areas","n":"focusAreas","r":false,"sh":"Specific areas to focus the review on","t":"`$ARRAY`","key$":"focusAreas","index$":6},"issues":{"a":true,"h":"Issues","n":"issues","r":false,"sh":"Identified issues and concerns","t":"`$ARRAY`","key$":"issues","index$":7},"language":{"a":true,"h":"Language","n":"language","r":false,"t":"`$STRING`","key$":"language","index$":8},"missingClauses":{"a":true,"h":"Missing Clauses","n":"missingClauses","r":false,"sh":"Important clauses that are missing","t":"`$ARRAY`","key$":"missingClauses","index$":9},"notes":{"a":true,"h":"Notes","n":"notes","r":false,"sh":"Important notes and considerations","t":"`$STRING`","key$":"notes","index$":10},"overallAssessment":{"a":true,"h":"Overall Assessment","n":"overallAssessment","r":false,"sh":"Overall assessment of the contract","t":"`$STRING`","key$":"overallAssessment","index$":11},"parties":{"a":true,"h":"Parties","n":"parties","r":false,"sh":"Information about contracting parties","t":"`$OBJECT`","key$":"parties","index$":12},"recommendations":{"a":true,"h":"Recommendations","n":"recommendations","r":false,"sh":"Recommended changes and improvements","t":"`$ARRAY`","key$":"recommendations","index$":13},"requirements":{"a":true,"h":"Requirements","n":"requirements","r":true,"sh":"Specific requirements and terms for the contract","t":"`$STRING`","key$":"requirements","index$":14},"reviewId":{"a":true,"h":"Review Id","n":"reviewId","r":false,"sh":"Unique identifier for the review","t":"`$STRING`","key$":"reviewId","index$":15},"riskLevel":{"a":true,"h":"Risk Level","n":"riskLevel","r":false,"sh":"Overall risk level assessment","t":"`$STRING`","key$":"riskLevel","index$":16},"specificClauses":{"a":true,"h":"Specific Clauses","n":"specificClauses","r":false,"sh":"Specific clauses to include","t":"`$ARRAY`","key$":"specificClauses","index$":17},"timestamp":{"a":true,"fo":"date-time","h":"Timestamp","n":"timestamp","r":false,"t":"`$STRING`","key$":"timestamp","index$":18}},"name":"contract_service","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /contract/draft","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/contract/draft","q":{},"r":{},"s":[{"lit":"contract"},{"lit":"draft"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /contract/review","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/contract/review","q":{},"r":{},"s":[{"lit":"contract"},{"lit":"review"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"contract_service","name__orig":"contract_service","Name":"ContractService","name_":"contract_service","name-":"contract-service","NAME":"CONTRACT_SERVICE","index$":1}, {"active":true,"entity":"contract_service","key$":"BasicContractServiceFlow","kind":"basic","name":"BasicContractServiceFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"contract_service_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'ContractService', {"POST /contract/draft":{"protocol":"http","operationId":"draftContract","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["contractType","requirements"],"properties":{"contractType":{"type":"string","description":"Type of contract to draft","enum":["employment","lease","sales","service","nda","partnership","other"],"example":"employment","key$":"contractType"},"requirements":{"type":"string","description":"Specific requirements and terms for the contract","example":"Full-time employment contract with 6-month probation period","key$":"requirements"},"parties":{"type":"object","description":"Information about contracting parties","properties":{"party1":{"type":"string","example":"ABC Corporation"},"party2":{"type":"string","example":"John Doe"}},"key$":"parties"},"specificClauses":{"type":"array","description":"Specific clauses to include","items":{"type":"string"},"example":["confidentiality","non-compete","termination"],"key$":"specificClauses"},"language":{"type":"string","enum":["zh-TW","en"],"default":"zh-TW","example":"zh-TW","key$":"language"}},"index$":1}}}},"responses":{"200":{"description":"Successfully generated contract draft","content":{"application/json":{"schema":{"type":"object","properties":{"draftId":{"type":"string","description":"Unique identifier for the contract draft","example":"cd-555666777","key$":"draftId"},"contractType":{"type":"string","example":"employment","key$":"contractType"},"content":{"type":"string","description":"The complete contract draft text","key$":"content"},"clauses":{"type":"array","description":"List of contract clauses","items":{"type":"object","properties":{"clauseNumber":{"type":"string"},"title":{"type":"string"},"content":{"type":"string"}}},"key$":"clauses"},"notes":{"type":"string","description":"Important notes and considerations","key$":"notes"},"timestamp":{"type":"string","format":"date-time","key$":"timestamp"}},"index$":0}}}},"400":{"description":"Bad request","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","description":"Error code"},"message":{"type":"string","description":"Human-readable error message"},"details":{"type":"string","description":"Additional error details"},"timestamp":{"type":"string","format":"date-time"}},"x-ref":"#/components/schemas/Error"}}}},"500":{"description":"Internal server error","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","description":"Error code"},"message":{"type":"string","description":"Human-readable error message"},"details":{"type":"string","description":"Additional error details"},"timestamp":{"type":"string","format":"date-time"}},"x-ref":"#/components/schemas/Error"}}}}},"parameters":[],"security":[{"ApiKeyAuth":[]},{"BearerAuth":[]}],"securitySource":"definition","securitySchemes":{"ApiKeyAuth":{"type":"apiKey","in":"header","name":"X-API-Key","description":"API key for authentication"},"BearerAuth":{"type":"http","scheme":"bearer","bearerFormat":"JWT","description":"JWT token authentication"}}},"POST /contract/review":{"protocol":"http","operationId":"reviewContract","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["contractText"],"properties":{"contractText":{"type":"string","description":"The complete contract text to be reviewed","key$":"contractText"},"contractType":{"type":"string","description":"Type of contract","enum":["employment","lease","sales","service","nda","partnership","other"],"example":"lease","key$":"contractType"},"focusAreas":{"type":"array","description":"Specific areas to focus the review on","items":{"type":"string","enum":["liability","termination","payment","confidentiality","compliance","all"]},"example":["liability","termination"],"key$":"focusAreas"},"language":{"type":"string","enum":["zh-TW","en"],"default":"zh-TW","example":"zh-TW","key$":"language"}},"index$":1}}}},"responses":{"200":{"description":"Successfully reviewed contract","content":{"application/json":{"schema":{"type":"object","properties":{"reviewId":{"type":"string","description":"Unique identifier for the review","example":"cr-111222333","key$":"reviewId"},"overallAssessment":{"type":"string","description":"Overall assessment of the contract","example":"This contract generally protects both parties' interests but requires attention to specific clauses.","key$":"overallAssessment"},"riskLevel":{"type":"string","enum":["low","medium","high"],"description":"Overall risk level assessment","example":"medium","key$":"riskLevel"},"issues":{"type":"array","description":"Identified issues and concerns","items":{"type":"object","properties":{"severity":{"type":"string","enum":["critical","high","medium","low"]},"clause":{"type":"string","description":"Clause reference"},"issue":{"type":"string","description":"Description of the issue"},"recommendation":{"type":"string","description":"Recommended action"}}},"key$":"issues"},"missingClauses":{"type":"array","description":"Important clauses that are missing","items":{"type":"string"},"key$":"missingClauses"},"complianceCheck":{"type":"object","description":"Compliance with Taiwan laws","properties":{"compliant":{"type":"boolean"},"issues":{"type":"array","items":{"type":"string"}}},"key$":"complianceCheck"},"recommendations":{"type":"array","description":"Recommended changes and improvements","items":{"type":"string"},"key$":"recommendations"},"timestamp":{"type":"string","format":"date-time","key$":"timestamp"}},"index$":0}}}},"400":{"description":"Bad request","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","description":"Error code"},"message":{"type":"string","description":"Human-readable error message"},"details":{"type":"string","description":"Additional error details"},"timestamp":{"type":"string","format":"date-time"}},"x-ref":"#/components/schemas/Error"}}}},"500":{"description":"Internal server error","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","description":"Error code"},"message":{"type":"string","description":"Human-readable error message"},"details":{"type":"string","description":"Additional error details"},"timestamp":{"type":"string","format":"date-time"}},"x-ref":"#/components/schemas/Error"}}}}},"parameters":[],"security":[{"ApiKeyAuth":[]},{"BearerAuth":[]}],"securitySource":"definition","securitySchemes":{"ApiKeyAuth":{"type":"apiKey","in":"header","name":"X-API-Key","description":"API key for authentication"},"BearerAuth":{"type":"http","scheme":"bearer","bearerFormat":"JWT","description":"JWT token authentication"}}}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const contract_service_ref01_ent = client.ContractService()
    let contract_service_ref01_data = setup.data.new.contract_service['contract_service_ref01']

    contract_service_ref01_data = (await contract_service_ref01_ent.create(contract_service_ref01_data)).data()
    assert(null != contract_service_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/contract_service/ContractServiceTestData.json')

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
    ['contract_service01','contract_service02','contract_service03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TAIWAN_LEGAL_AI_TEST_CONTRACT_SERVICE_ENTID': idmap,
    'TAIWAN_LEGAL_AI_TEST_LIVE': 'FALSE',
    'TAIWAN_LEGAL_AI_TEST_EXPLAIN': 'FALSE',
    'TAIWAN_LEGAL_AI_APIKEY': '',
  })

  idmap = env['TAIWAN_LEGAL_AI_TEST_CONTRACT_SERVICE_ENTID']

  const live = 'TRUE' === env.TAIWAN_LEGAL_AI_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TAIWAN_LEGAL_AI_TEST_CONTRACT_SERVICE_ENTID']
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
  
