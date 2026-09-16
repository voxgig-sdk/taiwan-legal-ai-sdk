# TaiwanLegalAi SDK feature factory

from taiwanlegalai_sdk.feature.base_feature import TaiwanLegalAiBaseFeature
from taiwanlegalai_sdk.feature.ratelimit_feature import TaiwanLegalAiRatelimitFeature
from taiwanlegalai_sdk.feature.retry_feature import TaiwanLegalAiRetryFeature
from taiwanlegalai_sdk.feature.test_feature import TaiwanLegalAiTestFeature
from taiwanlegalai_sdk.feature.timeout_feature import TaiwanLegalAiTimeoutFeature


_FEATURES = {
    "base": lambda: TaiwanLegalAiBaseFeature(),
    "ratelimit": lambda: TaiwanLegalAiRatelimitFeature(),
    "retry": lambda: TaiwanLegalAiRetryFeature(),
    "test": lambda: TaiwanLegalAiTestFeature(),
    "timeout": lambda: TaiwanLegalAiTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
