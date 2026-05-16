# TaiwanLegalAi Ruby SDK Reference

Complete API reference for the TaiwanLegalAi Ruby SDK.


## TaiwanLegalAiSDK

### Constructor

```ruby
require_relative 'taiwan-legal-ai_sdk'

client = TaiwanLegalAiSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["apikey"]` | `String` | API key for authentication. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `TaiwanLegalAiSDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = TaiwanLegalAiSDK.test
```


### Instance Methods

#### `CaseAnalysi(data = nil)`

Create a new `CaseAnalysi` entity instance. Pass `nil` for no initial data.

#### `ContractService(data = nil)`

Create a new `ContractService` entity instance. Pass `nil` for no initial data.

#### `LegalQuery(data = nil)`

Create a new `LegalQuery` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash, err`

#### `prepare(fetchargs = {}) -> Hash, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Hash, err`


---

## CaseAnalysiEntity

```ruby
case_analysi = client.CaseAnalysi
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `analysis_id` | ``$STRING`` | No |  |
| `applicable_law` | ``$ARRAY`` | No |  |
| `case_detail` | ``$STRING`` | Yes |  |
| `case_type` | ``$STRING`` | No |  |
| `language` | ``$STRING`` | No |  |
| `legal_issue` | ``$ARRAY`` | No |  |
| `party` | ``$OBJECT`` | No |  |
| `precedent` | ``$ARRAY`` | No |  |
| `recommendation` | ``$STRING`` | No |  |
| `summary` | ``$STRING`` | No |  |
| `timestamp` | ``$STRING`` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result, err`

Create a new entity with the given data.

```ruby
result, err = client.CaseAnalysi.create({
  "case_detail" => # `$STRING`,
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CaseAnalysiEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ContractServiceEntity

```ruby
contract_service = client.ContractService
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `claus` | ``$ARRAY`` | No |  |
| `compliance_check` | ``$OBJECT`` | No |  |
| `content` | ``$STRING`` | No |  |
| `contract_text` | ``$STRING`` | Yes |  |
| `contract_type` | ``$STRING`` | No |  |
| `draft_id` | ``$STRING`` | No |  |
| `focus_area` | ``$ARRAY`` | No |  |
| `issue` | ``$ARRAY`` | No |  |
| `language` | ``$STRING`` | No |  |
| `missing_claus` | ``$ARRAY`` | No |  |
| `note` | ``$STRING`` | No |  |
| `overall_assessment` | ``$STRING`` | No |  |
| `party` | ``$OBJECT`` | No |  |
| `recommendation` | ``$ARRAY`` | No |  |
| `requirement` | ``$STRING`` | Yes |  |
| `review_id` | ``$STRING`` | No |  |
| `risk_level` | ``$STRING`` | No |  |
| `specific_claus` | ``$ARRAY`` | No |  |
| `timestamp` | ``$STRING`` | No |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `claus` | - | - | - | - | - |
| `compliance_check` | - | - | - | - | - |
| `content` | - | - | - | - | - |
| `contract_text` | - | - | - | - | - |
| `contract_type` | - | - | Yes | - | - |
| `draft_id` | - | - | - | - | - |
| `focus_area` | - | - | - | - | - |
| `issue` | - | - | - | - | - |
| `language` | - | - | - | - | - |
| `missing_claus` | - | - | - | - | - |
| `note` | - | - | - | - | - |
| `overall_assessment` | - | - | - | - | - |
| `party` | - | - | - | - | - |
| `recommendation` | - | - | - | - | - |
| `requirement` | - | - | - | - | - |
| `review_id` | - | - | - | - | - |
| `risk_level` | - | - | - | - | - |
| `specific_claus` | - | - | - | - | - |
| `timestamp` | - | - | - | - | - |

### Operations

#### `create(reqdata, ctrl = nil) -> result, err`

Create a new entity with the given data.

```ruby
result, err = client.ContractService.create({
  "contract_text" => # `$STRING`,
  "requirement" => # `$STRING`,
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ContractServiceEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## LegalQueryEntity

```ruby
legal_query = client.LegalQuery
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `answer` | ``$STRING`` | No |  |
| `category` | ``$STRING`` | No |  |
| `language` | ``$STRING`` | No |  |
| `query_id` | ``$STRING`` | No |  |
| `question` | ``$STRING`` | No |  |
| `relevant_law` | ``$ARRAY`` | No |  |
| `timestamp` | ``$STRING`` | No |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `answer` | - | - | - | - | - |
| `category` | - | - | - | - | - |
| `language` | - | - | - | - | - |
| `query_id` | - | - | - | - | - |
| `question` | - | - | Yes | - | - |
| `relevant_law` | - | - | - | - | - |
| `timestamp` | - | - | - | - | - |

### Operations

#### `create(reqdata, ctrl = nil) -> result, err`

Create a new entity with the given data.

```ruby
result, err = client.LegalQuery.create({
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `LegalQueryEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ruby
client = TaiwanLegalAiSDK.new({
  "feature" => {
    "test" => { "active" => true },
  },
})
```

