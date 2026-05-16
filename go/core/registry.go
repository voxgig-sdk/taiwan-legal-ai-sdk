package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewCaseAnalysiEntityFunc func(client *TaiwanLegalAiSDK, entopts map[string]any) TaiwanLegalAiEntity

var NewContractServiceEntityFunc func(client *TaiwanLegalAiSDK, entopts map[string]any) TaiwanLegalAiEntity

var NewLegalQueryEntityFunc func(client *TaiwanLegalAiSDK, entopts map[string]any) TaiwanLegalAiEntity

