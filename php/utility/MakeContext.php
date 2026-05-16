<?php
declare(strict_types=1);

// TaiwanLegalAi SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class TaiwanLegalAiMakeContext
{
    public static function call(array $ctxmap, ?TaiwanLegalAiContext $basectx): TaiwanLegalAiContext
    {
        return new TaiwanLegalAiContext($ctxmap, $basectx);
    }
}
