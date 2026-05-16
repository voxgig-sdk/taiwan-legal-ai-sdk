# ProjectName SDK exists test

import pytest
from taiwanlegalai_sdk import TaiwanLegalAiSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = TaiwanLegalAiSDK.test(None, None)
        assert testsdk is not None
