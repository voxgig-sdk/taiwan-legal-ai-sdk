# TaiwanLegalAi SDK utility: make_context
require_relative '../core/context'
module TaiwanLegalAiUtilities
  MakeContext = ->(ctxmap, basectx) {
    TaiwanLegalAiContext.new(ctxmap, basectx)
  }
end
