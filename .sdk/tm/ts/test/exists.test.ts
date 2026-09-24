
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { TaiwanLegalAiSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = TaiwanLegalAiSDK.test()
    equal(testsdk instanceof TaiwanLegalAiSDK, true,
      'TaiwanLegalAiSDK.test() must return a client synchronously')
  })

})
