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
| `analysisId` | `String` | No | Unique identifier for the analysis |
| `applicableLaws` | `Array` | No | Laws applicable to this case |
| `caseDetails` | `String` | Yes | Detailed description of the case |
| `caseType` | `String` | No | Type of legal case |
| `language` | `String` | No |  |
| `legalIssues` | `Array` | No | Identified legal issues |
| `parties` | `Hash` | No | Information about parties involved |
| `precedents` | `Array` | No | Relevant legal precedents |
| `recommendations` | `String` | No | AI recommendations for case strategy |
| `summary` | `String` | No | Summary of the case analysis |
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
| `clauses` | `Array` | No | List of contract clauses |
| `complianceCheck` | `Hash` | No | Compliance with Taiwan laws |
| `content` | `String` | No | The complete contract draft text |
| `contractText` | `String` | Yes | The complete contract text to be reviewed |
| `contractType` | `String` | No | Type of contract to draft |
| `draftId` | `String` | No | Unique identifier for the contract draft |
| `focusAreas` | `Array` | No | Specific areas to focus the review on |
| `issues` | `Array` | No | Identified issues and concerns |
| `language` | `String` | No |  |
| `missingClauses` | `Array` | No | Important clauses that are missing |
| `notes` | `String` | No | Important notes and considerations |
| `overallAssessment` | `String` | No | Overall assessment of the contract |
| `parties` | `Hash` | No | Information about contracting parties |
| `recommendations` | `Array` | No | Recommended changes and improvements |
| `requirements` | `String` | Yes | Specific requirements and terms for the contract |
| `reviewId` | `String` | No | Unique identifier for the review |
| `riskLevel` | `String` | No | Overall risk level assessment |
| `specificClauses` | `Array` | No | Specific clauses to include |
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
| `answer` | `String` | No | AI-generated legal guidance |
| `category` | `String` | No | Category of legal question |
| `language` | `String` | No | Response language preference |
| `queryId` | `String` | No | Unique identifier for the query |
| `question` | `String` | No | The submitted question |
| `relevantLaws` | `Array` | No | List of relevant legal statutes |
| `timestamp` | `String` | No | Timestamp of the response |

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


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### `test`

In-memory mock transport for testing without a live server.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

Options above are those the model carries a default for. A feature may
also accept callback options — a `sink` to receive each record, for
instance — which have no default and are covered in the full feature
reference.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

