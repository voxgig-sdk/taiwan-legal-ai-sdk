<?php
declare(strict_types=1);

// TaiwanLegalAi SDK exists test

require_once __DIR__ . '/../taiwanlegalai_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = TaiwanLegalAiSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
