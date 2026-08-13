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
| `analysisId` | `String` | No |  |
| `applicableLaws` | `Array` | No |  |
| `caseDetails` | `String` | Yes |  |
| `caseType` | `String` | No |  |
| `language` | `String` | No |  |
| `legalIssues` | `Array` | No |  |
| `parties` | `Hash` | No |  |
| `precedents` | `Array` | No |  |
| `recommendations` | `String` | No |  |
| `summary` | `String` | No |  |
| `timestamp` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.CaseAnalysi.create({
  "caseDetails" => "example_caseDetails", # String
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
| `clauses` | `Array` | No |  |
| `complianceCheck` | `Hash` | No |  |
| `content` | `String` | No |  |
| `contractText` | `String` | Yes |  |
| `contractType` | `String` | No |  |
| `draftId` | `String` | No |  |
| `focusAreas` | `Array` | No |  |
| `issues` | `Array` | No |  |
| `language` | `String` | No |  |
| `missingClauses` | `Array` | No |  |
| `notes` | `String` | No |  |
| `overallAssessment` | `String` | No |  |
| `parties` | `Hash` | No |  |
| `recommendations` | `Array` | No |  |
| `requirements` | `String` | Yes |  |
| `reviewId` | `String` | No |  |
| `riskLevel` | `String` | No |  |
| `specificClauses` | `Array` | No |  |
| `timestamp` | `String` | No |  |

### Field Usage by Operation

| Field | create |
| --- | --- |
| `clauses` | - |
| `complianceCheck` | - |
| `content` | - |
| `contractText` | - |
| `contractType` | Yes |
| `draftId` | - |
| `focusAreas` | - |
| `issues` | - |
| `language` | - |
| `missingClauses` | - |
| `notes` | - |
| `overallAssessment` | - |
| `parties` | - |
| `recommendations` | - |
| `requirements` | - |
| `reviewId` | - |
| `riskLevel` | - |
| `specificClauses` | - |
| `timestamp` | - |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ContractService.create({
  "contractText" => "example_contractText", # String
  "requirements" => "example_requirements", # String
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
| `queryId` | `String` | No |  |
| `question` | `String` | No |  |
| `relevantLaws` | `Array` | No |  |
| `timestamp` | `String` | No |  |

### Field Usage by Operation

| Field | create |
| --- | --- |
| `answer` | - |
| `category` | - |
| `language` | - |
| `queryId` | - |
| `question` | Yes |
| `relevantLaws` | - |
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

