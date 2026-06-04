# ContractService entity test

require "minitest/autorun"
require "json"
require_relative "../TaiwanLegalAi_sdk"
require_relative "runner"

class ContractServiceEntityTest < Minitest::Test
  def test_create_instance
    testsdk = TaiwanLegalAiSDK.test(nil, nil)
    ent = testsdk.ContractService(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = contract_service_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "contract_service." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set TAIWANLEGALAI_TEST_CONTRACT_SERVICE_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    contract_service_ref01_ent = client.ContractService(nil)
    contract_service_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.contract_service"), "contract_service_ref01"))

    contract_service_ref01_data_result, err = contract_service_ref01_ent.create(contract_service_ref01_data, nil)
    assert_nil err
    contract_service_ref01_data = Helpers.to_map(contract_service_ref01_data_result)
    assert !contract_service_ref01_data.nil?

  end
end

def contract_service_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "contract_service", "ContractServiceTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = TaiwanLegalAiSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["contract_service01", "contract_service02", "contract_service03"],
    {
      "`$PACK`" => ["", {
        "`$KEY`" => "`$COPY`",
        "`$VAL`" => ["`$FORMAT`", "upper", "`$COPY`"],
      }],
    }
  )

  # Detect ENTID env override before envOverride consumes it. When live
  # mode is on without a real override, the basic test runs against synthetic
  # IDs from the fixture and 4xx's. Surface this so the test can skip.
  entid_env_raw = ENV["TAIWANLEGALAI_TEST_CONTRACT_SERVICE_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "TAIWANLEGALAI_TEST_CONTRACT_SERVICE_ENTID" => idmap,
    "TAIWANLEGALAI_TEST_LIVE" => "FALSE",
    "TAIWANLEGALAI_TEST_EXPLAIN" => "FALSE",
  })

  idmap_resolved = Helpers.to_map(
    env["TAIWANLEGALAI_TEST_CONTRACT_SERVICE_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end

  if env["TAIWANLEGALAI_TEST_LIVE"] == "TRUE"
    merged_opts = Vs.merge([
      {
      },
      extra || {},
    ])
    client = TaiwanLegalAiSDK.new(Helpers.to_map(merged_opts))
  end

  live = env["TAIWANLEGALAI_TEST_LIVE"] == "TRUE"
  {
    client: client,
    data: entity_data,
    idmap: idmap_resolved,
    env: env,
    explain: env["TAIWANLEGALAI_TEST_EXPLAIN"] == "TRUE",
    live: live,
    synthetic_only: live && !idmap_overridden,
    now: (Time.now.to_f * 1000).to_i,
  }
end
