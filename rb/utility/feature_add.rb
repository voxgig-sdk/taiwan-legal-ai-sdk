# TaiwanLegalAi SDK utility: feature_add
module TaiwanLegalAiUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
