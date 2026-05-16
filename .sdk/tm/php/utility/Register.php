<?php
declare(strict_types=1);

// TaiwanLegalAi SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

TaiwanLegalAiUtility::setRegistrar(function (TaiwanLegalAiUtility $u): void {
    $u->clean = [TaiwanLegalAiClean::class, 'call'];
    $u->done = [TaiwanLegalAiDone::class, 'call'];
    $u->make_error = [TaiwanLegalAiMakeError::class, 'call'];
    $u->feature_add = [TaiwanLegalAiFeatureAdd::class, 'call'];
    $u->feature_hook = [TaiwanLegalAiFeatureHook::class, 'call'];
    $u->feature_init = [TaiwanLegalAiFeatureInit::class, 'call'];
    $u->fetcher = [TaiwanLegalAiFetcher::class, 'call'];
    $u->make_fetch_def = [TaiwanLegalAiMakeFetchDef::class, 'call'];
    $u->make_context = [TaiwanLegalAiMakeContext::class, 'call'];
    $u->make_options = [TaiwanLegalAiMakeOptions::class, 'call'];
    $u->make_request = [TaiwanLegalAiMakeRequest::class, 'call'];
    $u->make_response = [TaiwanLegalAiMakeResponse::class, 'call'];
    $u->make_result = [TaiwanLegalAiMakeResult::class, 'call'];
    $u->make_point = [TaiwanLegalAiMakePoint::class, 'call'];
    $u->make_spec = [TaiwanLegalAiMakeSpec::class, 'call'];
    $u->make_url = [TaiwanLegalAiMakeUrl::class, 'call'];
    $u->param = [TaiwanLegalAiParam::class, 'call'];
    $u->prepare_auth = [TaiwanLegalAiPrepareAuth::class, 'call'];
    $u->prepare_body = [TaiwanLegalAiPrepareBody::class, 'call'];
    $u->prepare_headers = [TaiwanLegalAiPrepareHeaders::class, 'call'];
    $u->prepare_method = [TaiwanLegalAiPrepareMethod::class, 'call'];
    $u->prepare_params = [TaiwanLegalAiPrepareParams::class, 'call'];
    $u->prepare_path = [TaiwanLegalAiPreparePath::class, 'call'];
    $u->prepare_query = [TaiwanLegalAiPrepareQuery::class, 'call'];
    $u->result_basic = [TaiwanLegalAiResultBasic::class, 'call'];
    $u->result_body = [TaiwanLegalAiResultBody::class, 'call'];
    $u->result_headers = [TaiwanLegalAiResultHeaders::class, 'call'];
    $u->transform_request = [TaiwanLegalAiTransformRequest::class, 'call'];
    $u->transform_response = [TaiwanLegalAiTransformResponse::class, 'call'];
});
