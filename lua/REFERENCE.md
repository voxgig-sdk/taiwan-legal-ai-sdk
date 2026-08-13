# TaiwanLegalAi Lua SDK Reference

Complete API reference for the TaiwanLegalAi Lua SDK.


## TaiwanLegalAiSDK

### Constructor

```lua
local sdk = require("taiwan-legal-ai_sdk")
local client = sdk.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `table` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts?, sdkopts?)`

Create a test client with mock features active. Both arguments are optional.

```lua
local client = sdk.test()
```


### Instance Methods

#### `CaseAnalysi(data)`

Create a new `CaseAnalysi` entity instance. Pass `nil` for no initial data.

#### `ContractService(data)`

Create a new `ContractService` entity instance. Pass `nil` for no initial data.

#### `LegalQuery(data)`

Create a new `LegalQuery` entity instance. Pass `nil` for no initial data.

#### `options_map() -> table`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs) -> table, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs.params` | `table` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `table` | Query string parameters. |
| `fetchargs.headers` | `table` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (tables are JSON-serialized). |
| `fetchargs.ctrl` | `table` | Control options (e.g. `{ explain = true }`). |

**Returns:** `table, err`

#### `prepare(fetchargs) -> table, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `table, err`


---

## CaseAnalysiEntity

```lua
local case_analysi = client:CaseAnalysi(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `analysisId` | `string` | No |  |
| `applicableLaws` | `table` | No |  |
| `caseDetails` | `string` | Yes |  |
| `caseType` | `string` | No |  |
| `language` | `string` | No |  |
| `legalIssues` | `table` | No |  |
| `parties` | `table` | No |  |
| `precedents` | `table` | No |  |
| `recommendations` | `string` | No |  |
| `summary` | `string` | No |  |
| `timestamp` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:CaseAnalysi():create({
  caseDetails = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CaseAnalysiEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ContractServiceEntity

```lua
local contract_service = client:ContractService(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `clauses` | `table` | No |  |
| `complianceCheck` | `table` | No |  |
| `content` | `string` | No |  |
| `contractText` | `string` | Yes |  |
| `contractType` | `string` | No |  |
| `draftId` | `string` | No |  |
| `focusAreas` | `table` | No |  |
| `issues` | `table` | No |  |
| `language` | `string` | No |  |
| `missingClauses` | `table` | No |  |
| `notes` | `string` | No |  |
| `overallAssessment` | `string` | No |  |
| `parties` | `table` | No |  |
| `recommendations` | `table` | No |  |
| `requirements` | `string` | Yes |  |
| `reviewId` | `string` | No |  |
| `riskLevel` | `string` | No |  |
| `specificClauses` | `table` | No |  |
| `timestamp` | `string` | No |  |

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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ContractService():create({
  contractText = --[[ string ]],
  requirements = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ContractServiceEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## LegalQueryEntity

```lua
local legal_query = client:LegalQuery(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `answer` | `string` | No |  |
| `category` | `string` | No |  |
| `language` | `string` | No |  |
| `queryId` | `string` | No |  |
| `question` | `string` | No |  |
| `relevantLaws` | `table` | No |  |
| `timestamp` | `string` | No |  |

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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:LegalQuery():create({
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LegalQueryEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```lua
local client = sdk.new({
  feature = {
    test = { active = true },
  },
})
```

