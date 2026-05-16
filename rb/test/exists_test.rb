# TaiwanLegalAi SDK exists test

require "minitest/autorun"
require_relative "../TaiwanLegalAi_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = TaiwanLegalAiSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
