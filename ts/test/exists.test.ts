
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { TaiwanLegalAiSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await TaiwanLegalAiSDK.test()
    equal(null !== testsdk, true)
  })

})
