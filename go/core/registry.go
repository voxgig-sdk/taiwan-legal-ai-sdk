package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewRatelimitFeatureFunc func() Feature

var NewRetryFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewTimeoutFeatureFunc func() Feature

var NewCaseAnalysiEntityFunc func(client *TaiwanLegalAiSDK, entopts map[string]any) TaiwanLegalAiEntity

var NewContractServiceEntityFunc func(client *TaiwanLegalAiSDK, entopts map[string]any) TaiwanLegalAiEntity

var NewLegalQueryEntityFunc func(client *TaiwanLegalAiSDK, entopts map[string]any) TaiwanLegalAiEntity

