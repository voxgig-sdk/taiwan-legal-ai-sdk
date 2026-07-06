# TaiwanLegalAi Ruby SDK Reference

Complete API reference for the TaiwanLegalAi Ruby SDK.


## TaiwanLegalAiSDK

### Constructor

```ruby
require_relative 'TaiwanLegalAi_sdk'

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

#### `direct(fetchargs = {}) -> Hash`

Make a direct HTTP request to any API endpoint. Returns a result hash
(`{ "ok" => ..., "status" => ..., "data" => ..., "err" => ... }`); it
does not raise — inspect `result["ok"]`.

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

**Returns:** `Hash`

#### `prepare(fetchargs = {}) -> Hash`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`. Raises on error.

**Returns:** `Hash` (the fetch definition; raises on error)


---

## CaseAnalysiEntity

```ruby
case_analysi = client.CaseAnalysi
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `analysis_id` | `String` | No |  |
| `applicable_law` | `Array` | No |  |
| `case_detail` | `String` | Yes |  |
| `case_type` | `String` | No |  |
| `language` | `String` | No |  |
| `legal_issue` | `Array` | No |  |
| `party` | `Hash` | No |  |
| `precedent` | `Array` | No |  |
| `recommendation` | `String` | No |  |
| `summary` | `String` | No |  |
| `timestamp` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.CaseAnalysi.create({
  "case_detail" => "example", # String
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
| `claus` | `Array` | No |  |
| `compliance_check` | `Hash` | No |  |
| `content` | `String` | No |  |
| `contract_text` | `String` | Yes |  |
| `contract_type` | `String` | No |  |
| `draft_id` | `String` | No |  |
| `focus_area` | `Array` | No |  |
| `issue` | `Array` | No |  |
| `language` | `String` | No |  |
| `missing_claus` | `Array` | No |  |
| `note` | `String` | No |  |
| `overall_assessment` | `String` | No |  |
| `party` | `Hash` | No |  |
| `recommendation` | `Array` | No |  |
| `requirement` | `String` | Yes |  |
| `review_id` | `String` | No |  |
| `risk_level` | `String` | No |  |
| `specific_claus` | `Array` | No |  |
| `timestamp` | `String` | No |  |

### Field Usage by Operation

| Field | create |
| --- | --- |
| `claus` | - |
| `compliance_check` | - |
| `content` | - |
| `contract_text` | - |
| `contract_type` | Yes |
| `draft_id` | - |
| `focus_area` | - |
| `issue` | - |
| `language` | - |
| `missing_claus` | - |
| `note` | - |
| `overall_assessment` | - |
| `party` | - |
| `recommendation` | - |
| `requirement` | - |
| `review_id` | - |
| `risk_level` | - |
| `specific_claus` | - |
| `timestamp` | - |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ContractService.create({
  "contract_text" => "example", # String
  "requirement" => "example", # String
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
| `answer` | `String` | No |  |
| `category` | `String` | No |  |
| `language` | `String` | No |  |
| `query_id` | `String` | No |  |
| `question` | `String` | No |  |
| `relevant_law` | `Array` | No |  |
| `timestamp` | `String` | No |  |

### Field Usage by Operation

| Field | create |
| --- | --- |
| `answer` | - |
| `category` | - |
| `language` | - |
| `query_id` | - |
| `question` | Yes |
| `relevant_law` | - |
| `timestamp` | - |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.LegalQuery.create({
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

