package core

type TaiwanLegalAiError struct {
	IsTaiwanLegalAiError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewTaiwanLegalAiError(code string, msg string, ctx *Context) *TaiwanLegalAiError {
	return &TaiwanLegalAiError{
		IsTaiwanLegalAiError: true,
		Sdk:              "TaiwanLegalAi",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *TaiwanLegalAiError) Error() string {
	return e.Msg
}
