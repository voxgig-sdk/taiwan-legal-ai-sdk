<?php
declare(strict_types=1);

// TaiwanLegalAi SDK utility: prepare_body

class TaiwanLegalAiPrepareBody
{
    public static function call(TaiwanLegalAiContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
