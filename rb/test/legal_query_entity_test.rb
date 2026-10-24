# LegalQuery entity test

require "minitest/autorun"
require "json"
require_relative "../TaiwanLegalAi_sdk"
require_relative "runner"

class LegalQueryEntityTest < Minitest::Test
  # main.kit.test.live.strict is true (the default is true): a live
  # request that fails, or a live test missing an input it needs,
  # fails the test.
  # An account with no record for a test to read skips it either way.
  LIVE_STRICT = true

  def test_create_instance
    testsdk = TaiwanLegalAiSDK.test(nil, nil)
    ent = testsdk.LegalQuery(nil)
    assert !ent.nil?
  end

  def test_validate
    cfg = TaiwanLegalAiConfig.shared_config
    unless cfg["feature"].is_a?(Hash) && cfg["feature"].key?("validate")
      skip("feature not present in this SDK: validate")
    end
    client = TaiwanLegalAiSDK.test(nil, { "feature" => { "validate" => { "active" => true } } })
    err = assert_raises(StandardError) do
      client.LegalQuery(nil).create({ "category" => 1, "question" => "x" }, nil)
    end
    assert_equal "validate_failed", err.code
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
    client = setup[:client]

    # CREATE
    legal_query_ref01_ent = client.LegalQuery(nil)
    legal_query_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.legal_query"), "legal_query_ref01"))

    legal_query_ref01_data_result = legal_query_ref01_ent.create(legal_query_ref01_data, nil)
    legal_query_ref01_data = Helpers.to_map(legal_query_ref01_data_result.respond_to?(:data_get) ? legal_query_ref01_data_result.data_get : legal_query_ref01_data_result)
    assert !legal_query_ref01_data.nil?

  end
end

def legal_query_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "legal_query", "LegalQueryTestData.json")
  entity_data_source = File.read(entity_data_file, encoding: "UTF-8")
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

  # Whether *_ENTID supplied the idmap, read before env_override consumes
  # it: without it, the ids a live flow binds are the fixture's synthetic ones.
  entid_env_raw = ENV["TAIWAN_LEGAL_AI_TEST_LEGAL_QUERY_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "TAIWAN_LEGAL_AI_TEST_LEGAL_QUERY_ENTID" => idmap,
    "TAIWAN_LEGAL_AI_TEST_LIVE" => "FALSE",
    "TAIWAN_LEGAL_AI_TEST_EXPLAIN" => "FALSE",
    "TAIWAN_LEGAL_AI_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["TAIWAN_LEGAL_AI_TEST_LEGAL_QUERY_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end

  if env["TAIWAN_LEGAL_AI_TEST_LIVE"] == "TRUE"
    merged_opts = Vs.merge([
      # FIRST, so the generated fields below win: sdk-test-control.json's
      # test.client.options adds to the live client, it does not redirect it.
      Runner.live_client_options,
      {
        "apikey" => env["TAIWAN_LEGAL_AI_APIKEY"],
      },
      extra || {},
    ])
    client = TaiwanLegalAiSDK.new(Helpers.to_map(merged_opts))
  end

  live = env["TAIWAN_LEGAL_AI_TEST_LIVE"] == "TRUE"
  {
    client: client,
    data: entity_data,
    idmap: idmap_resolved,
    env: env,
    explain: env["TAIWAN_LEGAL_AI_TEST_EXPLAIN"] == "TRUE",
    live: live,
    synthetic_only: live && !idmap_overridden,
    now: (Time.now.to_f * 1000).to_i,
  }
end
