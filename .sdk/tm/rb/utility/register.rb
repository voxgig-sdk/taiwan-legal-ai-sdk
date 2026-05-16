# TaiwanLegalAi SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

TaiwanLegalAiUtility.registrar = ->(u) {
  u.clean = TaiwanLegalAiUtilities::Clean
  u.done = TaiwanLegalAiUtilities::Done
  u.make_error = TaiwanLegalAiUtilities::MakeError
  u.feature_add = TaiwanLegalAiUtilities::FeatureAdd
  u.feature_hook = TaiwanLegalAiUtilities::FeatureHook
  u.feature_init = TaiwanLegalAiUtilities::FeatureInit
  u.fetcher = TaiwanLegalAiUtilities::Fetcher
  u.make_fetch_def = TaiwanLegalAiUtilities::MakeFetchDef
  u.make_context = TaiwanLegalAiUtilities::MakeContext
  u.make_options = TaiwanLegalAiUtilities::MakeOptions
  u.make_request = TaiwanLegalAiUtilities::MakeRequest
  u.make_response = TaiwanLegalAiUtilities::MakeResponse
  u.make_result = TaiwanLegalAiUtilities::MakeResult
  u.make_point = TaiwanLegalAiUtilities::MakePoint
  u.make_spec = TaiwanLegalAiUtilities::MakeSpec
  u.make_url = TaiwanLegalAiUtilities::MakeUrl
  u.param = TaiwanLegalAiUtilities::Param
  u.prepare_auth = TaiwanLegalAiUtilities::PrepareAuth
  u.prepare_body = TaiwanLegalAiUtilities::PrepareBody
  u.prepare_headers = TaiwanLegalAiUtilities::PrepareHeaders
  u.prepare_method = TaiwanLegalAiUtilities::PrepareMethod
  u.prepare_params = TaiwanLegalAiUtilities::PrepareParams
  u.prepare_path = TaiwanLegalAiUtilities::PreparePath
  u.prepare_query = TaiwanLegalAiUtilities::PrepareQuery
  u.result_basic = TaiwanLegalAiUtilities::ResultBasic
  u.result_body = TaiwanLegalAiUtilities::ResultBody
  u.result_headers = TaiwanLegalAiUtilities::ResultHeaders
  u.transform_request = TaiwanLegalAiUtilities::TransformRequest
  u.transform_response = TaiwanLegalAiUtilities::TransformResponse
}
