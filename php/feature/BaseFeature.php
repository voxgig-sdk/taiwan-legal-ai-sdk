<?php
declare(strict_types=1);

// TaiwanLegalAi SDK base feature

class TaiwanLegalAiBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(TaiwanLegalAiContext $ctx, array $options): void {}
    public function PostConstruct(TaiwanLegalAiContext $ctx): void {}
    public function PostConstructEntity(TaiwanLegalAiContext $ctx): void {}
    public function SetData(TaiwanLegalAiContext $ctx): void {}
    public function GetData(TaiwanLegalAiContext $ctx): void {}
    public function GetMatch(TaiwanLegalAiContext $ctx): void {}
    public function SetMatch(TaiwanLegalAiContext $ctx): void {}
    public function PrePoint(TaiwanLegalAiContext $ctx): void {}
    public function PreSpec(TaiwanLegalAiContext $ctx): void {}
    public function PreRequest(TaiwanLegalAiContext $ctx): void {}
    public function PreResponse(TaiwanLegalAiContext $ctx): void {}
    public function PreResult(TaiwanLegalAiContext $ctx): void {}
    public function PreDone(TaiwanLegalAiContext $ctx): void {}
    public function PreUnexpected(TaiwanLegalAiContext $ctx): void {}
}
