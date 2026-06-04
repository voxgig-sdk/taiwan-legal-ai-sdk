# ContractService entity test

import json
import os
import time

import pytest

from utility.voxgig_struct import voxgig_struct as vs
from taiwanlegalai_sdk import TaiwanLegalAiSDK
from core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestContractServiceEntity:

    def test_should_create_instance(self):
        testsdk = TaiwanLegalAiSDK.test(None, None)
        ent = testsdk.ContractService(None)
        assert ent is not None

    def test_should_run_basic_flow(self):
        setup = _contract_service_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["create"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "contract_service." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set TAIWANLEGALAI_TEST_CONTRACT_SERVICE_ENTID JSON to run live")
        client = setup["client"]

        # CREATE
        contract_service_ref01_ent = client.ContractService(None)
        contract_service_ref01_data = helpers.to_map(vs.getprop(
            vs.getpath(setup["data"], "new.contract_service"), "contract_service_ref01"))

        contract_service_ref01_data_result, err = contract_service_ref01_ent.create(contract_service_ref01_data, None)
        assert err is None
        contract_service_ref01_data = helpers.to_map(contract_service_ref01_data_result)
        assert contract_service_ref01_data is not None



def _contract_service_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/contract_service/ContractServiceTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = TaiwanLegalAiSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["contract_service01", "contract_service02", "contract_service03"],
        {
            "`$PACK`": ["", {
                "`$KEY`": "`$COPY`",
                "`$VAL`": ["`$FORMAT`", "upper", "`$COPY`"],
            }],
        }
    )

    # Detect ENTID env override before envOverride consumes it. When live
    # mode is on without a real override, the basic test runs against synthetic
    # IDs from the fixture and 4xx's. We surface this so the test can skip.
    _entid_env_raw = os.environ.get(
        "TAIWANLEGALAI_TEST_CONTRACT_SERVICE_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "TAIWANLEGALAI_TEST_CONTRACT_SERVICE_ENTID": idmap,
        "TAIWANLEGALAI_TEST_LIVE": "FALSE",
        "TAIWANLEGALAI_TEST_EXPLAIN": "FALSE",
    })

    idmap_resolved = helpers.to_map(
        env.get("TAIWANLEGALAI_TEST_CONTRACT_SERVICE_ENTID"))
    if idmap_resolved is None:
        idmap_resolved = helpers.to_map(idmap)

    if env.get("TAIWANLEGALAI_TEST_LIVE") == "TRUE":
        merged_opts = vs.merge([
            {
            },
            extra or {},
        ])
        client = TaiwanLegalAiSDK(helpers.to_map(merged_opts))

    _live = env.get("TAIWANLEGALAI_TEST_LIVE") == "TRUE"
    return {
        "client": client,
        "data": entity_data,
        "idmap": idmap_resolved,
        "env": env,
        "explain": env.get("TAIWANLEGALAI_TEST_EXPLAIN") == "TRUE",
        "live": _live,
        "synthetic_only": _live and not _idmap_overridden,
        "now": int(time.time() * 1000),
    }
