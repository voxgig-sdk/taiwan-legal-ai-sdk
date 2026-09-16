# TaiwanLegalAi SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module TaiwanLegalAiFeatures
  def self.make_feature(name)
    case name
    when "base"
      TaiwanLegalAiBaseFeature.new
    when "ratelimit"
      TaiwanLegalAiRatelimitFeature.new
    when "retry"
      TaiwanLegalAiRetryFeature.new
    when "test"
      TaiwanLegalAiTestFeature.new
    when "timeout"
      TaiwanLegalAiTimeoutFeature.new
    else
      TaiwanLegalAiBaseFeature.new
    end
  end
end
