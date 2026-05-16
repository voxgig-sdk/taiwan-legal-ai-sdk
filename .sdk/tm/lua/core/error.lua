-- TaiwanLegalAi SDK error

local TaiwanLegalAiError = {}
TaiwanLegalAiError.__index = TaiwanLegalAiError


function TaiwanLegalAiError.new(code, msg, ctx)
  local self = setmetatable({}, TaiwanLegalAiError)
  self.is_sdk_error = true
  self.sdk = "TaiwanLegalAi"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function TaiwanLegalAiError:error()
  return self.msg
end


function TaiwanLegalAiError:__tostring()
  return self.msg
end


return TaiwanLegalAiError
