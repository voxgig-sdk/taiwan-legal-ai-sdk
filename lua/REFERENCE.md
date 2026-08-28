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
| `analysisId` | `string` | No | Unique identifier for the analysis |
| `applicableLaws` | `table` | No | Laws applicable to this case |
| `caseDetails` | `string` | Yes | Detailed description of the case |
| `caseType` | `string` | No | Type of legal case |
| `language` | `string` | No |  |
| `legalIssues` | `table` | No | Identified legal issues |
| `parties` | `table` | No | Information about parties involved |
| `precedents` | `table` | No | Relevant legal precedents |
| `recommendations` | `string` | No | AI recommendations for case strategy |
| `summary` | `string` | No | Summary of the case analysis |
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
| `clauses` | `table` | No | List of contract clauses |
| `complianceCheck` | `table` | No | Compliance with Taiwan laws |
| `content` | `string` | No | The complete contract draft text |
| `contractText` | `string` | Yes | The complete contract text to be reviewed |
| `contractType` | `string` | No | Type of contract to draft |
| `draftId` | `string` | No | Unique identifier for the contract draft |
| `focusAreas` | `table` | No | Specific areas to focus the review on |
| `issues` | `table` | No | Identified issues and concerns |
| `language` | `string` | No |  |
| `missingClauses` | `table` | No | Important clauses that are missing |
| `notes` | `string` | No | Important notes and considerations |
| `overallAssessment` | `string` | No | Overall assessment of the contract |
| `parties` | `table` | No | Information about contracting parties |
| `recommendations` | `table` | No | Recommended changes and improvements |
| `requirements` | `string` | Yes | Specific requirements and terms for the contract |
| `reviewId` | `string` | No | Unique identifier for the review |
| `riskLevel` | `string` | No | Overall risk level assessment |
| `specificClauses` | `table` | No | Specific clauses to include |
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
| `answer` | `string` | No | AI-generated legal guidance |
| `category` | `string` | No | Category of legal question |
| `language` | `string` | No | Response language preference |
| `queryId` | `string` | No | Unique identifier for the query |
| `question` | `string` | No | The submitted question |
| `relevantLaws` | `table` | No | List of relevant legal statutes |
| `timestamp` | `string` | No | Timestamp of the response |

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

