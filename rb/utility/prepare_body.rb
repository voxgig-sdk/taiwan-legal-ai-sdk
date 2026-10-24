# TaiwanLegalAi SDK utility: prepare_body
require_relative 'media'
module TaiwanLegalAiUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return TaiwanLegalAiUtilities.raw_body(ctx.reqdata) if TaiwanLegalAiUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
