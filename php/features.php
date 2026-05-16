<?php
declare(strict_types=1);

// TaiwanLegalAi SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class TaiwanLegalAiFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new TaiwanLegalAiBaseFeature();
            case "test":
                return new TaiwanLegalAiTestFeature();
            default:
                return new TaiwanLegalAiBaseFeature();
        }
    }
}
