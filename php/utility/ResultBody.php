<?php
declare(strict_types=1);

// TaiwanLegalAi SDK utility: result_body

class TaiwanLegalAiResultBody
{
    public static function call(TaiwanLegalAiContext $ctx): ?TaiwanLegalAiResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
