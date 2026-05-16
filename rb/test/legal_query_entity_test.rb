# LegalQuery entity test

require "minitest/autorun"
require "json"
require_relative "../TaiwanLegalAi_sdk"
require_relative "runner"

class LegalQueryEntityTest < Minitest::Test
  def test_create_instance
    testsdk = TaiwanLegalAiSDK.test(nil, nil)
    ent = testsdk.LegalQuery(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = legal_query_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "legal_query." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set TAIWANLEGALAI_TEST_LEGAL_QUERY_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    legal_query_ref01_ent = client.LegalQuery(nil)
    legal_query_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.legal_query"), "legal_query_ref01"))

    legal_query_ref01_data_result, err = legal_query_ref01_ent.create(legal_query_ref01_data, nil)
    assert_nil err
    legal_query_ref01_data = Helpers.to_map(legal_query_ref01_data_result)
    assert !legal_query_ref01_data.nil?

  end
end

def legal_query_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "legal_query", "LegalQueryTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = TaiwanLegalAiSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["legal_query01", "legal_query02", "legal_query03"],
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
  entid_env_raw = ENV["TAIWANLEGALAI_TEST_LEGAL_QUERY_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "TAIWANLEGALAI_TEST_LEGAL_QUERY_ENTID" => idmap,
    "TAIWANLEGALAI_TEST_LIVE" => "FALSE",
    "TAIWANLEGALAI_TEST_EXPLAIN" => "FALSE",
    "TAIWANLEGALAI_APIKEY" => "NONE",
  })

  idmap_resolved = Helpers.to_map(
    env["TAIWANLEGALAI_TEST_LEGAL_QUERY_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end

  if env["TAIWANLEGALAI_TEST_LIVE"] == "TRUE"
    merged_opts = Vs.merge([
      {
        "apikey" => env["TAIWANLEGALAI_APIKEY"],
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
