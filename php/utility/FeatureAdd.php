<?php
declare(strict_types=1);

// TaiwanLegalAi SDK utility: feature_add

class TaiwanLegalAiFeatureAdd
{
    public static function call(TaiwanLegalAiContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
