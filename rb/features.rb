# TaiwanLegalAi SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module TaiwanLegalAiFeatures
  def self.make_feature(name)
    case name
    when "base"
      TaiwanLegalAiBaseFeature.new
    when "test"
      TaiwanLegalAiTestFeature.new
    else
      TaiwanLegalAiBaseFeature.new
    end
  end
end
