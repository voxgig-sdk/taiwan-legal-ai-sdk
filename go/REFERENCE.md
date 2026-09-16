# TaiwanLegalAi Golang SDK Reference

Complete API reference for the TaiwanLegalAi Golang SDK.


## TaiwanLegalAiSDK

### Constructor

```go
func NewTaiwanLegalAiSDK(options map[string]any) *TaiwanLegalAiSDK
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `map[string]any` | SDK configuration options. |
| `options["apikey"]` | `string` | API key for authentication. |
| `options["base"]` | `string` | Base URL for API requests. |
| `options["prefix"]` | `string` | URL prefix appended after base. |
| `options["suffix"]` | `string` | URL suffix appended after path. |
| `options["headers"]` | `map[string]any` | Custom headers for all requests. |
| `options["feature"]` | `map[string]any` | Feature configuration. |
| `options["system"]` | `map[string]any` | System overrides (e.g. custom fetch). |


### Static Methods

#### `Test() *TaiwanLegalAiSDK`

No-arg convenience constructor for the common no-options test case.

```go
client := sdk.Test()
```

#### `TestSDK(testopts, sdkopts map[string]any) *TaiwanLegalAiSDK`

Test client with options. Both arguments may be `nil`.

```go
client := sdk.TestSDK(testopts, sdkopts)
```


### Instance Methods

#### `CaseAnalysi(data map[string]any) TaiwanLegalAiEntity`

Create a new `CaseAnalysi` entity instance. Pass `nil` for no initial data.

#### `ContractService(data map[string]any) TaiwanLegalAiEntity`

Create a new `ContractService` entity instance. Pass `nil` for no initial data.

#### `LegalQuery(data map[string]any) TaiwanLegalAiEntity`

Create a new `LegalQuery` entity instance. Pass `nil` for no initial data.

#### `OptionsMap() map[string]any`

Return a deep copy of the current SDK options.

#### `GetUtility() *Utility`

Return a copy of the SDK utility object.

#### `Direct(fetchargs map[string]any) (map[string]any, error)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `map[string]any` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `map[string]any` | Query string parameters. |
| `fetchargs["headers"]` | `map[string]any` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (maps are JSON-serialized). |
| `fetchargs["ctrl"]` | `map[string]any` | Control options (e.g. `map[string]any{"explain": true}`). |

**Returns:** `(map[string]any, error)`

#### `Prepare(fetchargs map[string]any) (map[string]any, error)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `Direct()`.

**Returns:** `(map[string]any, error)`


---

## CaseAnalysiEntity

```go
caseAnalysi := client.CaseAnalysi(nil)
fmt.Println(caseAnalysi.GetName()) // "case_analysi"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `analysisId` | `string` | No | Unique identifier for the analysis |
| `applicableLaws` | `[]any` | No | Laws applicable to this case |
| `caseDetails` | `string` | Yes | Detailed description of the case |
| `caseType` | `string` | No | Type of legal case |
| `language` | `string` | No |  |
| `legalIssues` | `[]any` | No | Identified legal issues |
| `parties` | `map[string]any` | No | Information about parties involved |
| `precedents` | `[]any` | No | Relevant legal precedents |
| `recommendations` | `string` | No | AI recommendations for case strategy |
| `summary` | `string` | No | Summary of the case analysis |
| `timestamp` | `string` | No |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.CaseAnalysi(nil).Create(map[string]any{
    "caseDetails": "example_caseDetails",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CaseAnalysiEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ContractServiceEntity

```go
contractService := client.ContractService(nil)
fmt.Println(contractService.GetName()) // "contract_service"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `clauses` | `[]any` | No | List of contract clauses |
| `complianceCheck` | `map[string]any` | No | Compliance with Taiwan laws |
| `content` | `string` | No | The complete contract draft text |
| `contractText` | `string` | Yes | The complete contract text to be reviewed |
| `contractType` | `string` | No | Type of contract to draft |
| `draftId` | `string` | No | Unique identifier for the contract draft |
| `focusAreas` | `[]any` | No | Specific areas to focus the review on |
| `issues` | `[]any` | No | Identified issues and concerns |
| `language` | `string` | No |  |
| `missingClauses` | `[]any` | No | Important clauses that are missing |
| `notes` | `string` | No | Important notes and considerations |
| `overallAssessment` | `string` | No | Overall assessment of the contract |
| `parties` | `map[string]any` | No | Information about contracting parties |
| `recommendations` | `[]any` | No | Recommended changes and improvements |
| `requirements` | `string` | Yes | Specific requirements and terms for the contract |
| `reviewId` | `string` | No | Unique identifier for the review |
| `riskLevel` | `string` | No | Overall risk level assessment |
| `specificClauses` | `[]any` | No | Specific clauses to include |
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

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ContractService(nil).Create(map[string]any{
    "contractText": "example_contractText",
    "requirements": "example_requirements",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ContractServiceEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## LegalQueryEntity

```go
legalQuery := client.LegalQuery(nil)
fmt.Println(legalQuery.GetName()) // "legal_query"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `answer` | `string` | No | AI-generated legal guidance |
| `category` | `string` | No | Category of legal question |
| `language` | `string` | No | Response language preference |
| `queryId` | `string` | No | Unique identifier for the query |
| `question` | `string` | No | The submitted question |
| `relevantLaws` | `[]any` | No | List of relevant legal statutes |
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

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.LegalQuery(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `LegalQueryEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `ratelimit` | 0.0.1 | Client-side rate limiting via a token bucket |
| `retry` | 0.0.1 | Automatic retry of transient failures with exponential backoff |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |
| `timeout` | 0.0.1 | Per-request timeout with transport abort |


Features are activated via the `feature` option:

```go
client := sdk.NewTaiwanLegalAiSDK(map[string]any{
    "feature": map[string]any{
        "ratelimit": map[string]any{"active": true},
        "retry": map[string]any{"active": true},
        "test": map[string]any{"active": true},
        "timeout": map[string]any{"active": true},
    },
})
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### Ordering

`ratelimit`, `retry`, `timeout` wrap the transport. Each
wraps whatever is already installed, so **activation order is nesting order**:
a feature activated later sits OUTSIDE one activated earlier, and sees the call
first.

That decides behaviour, not just sequence: a feature that short-circuits the
call, such as a cache serving a hit, stops every feature nested inside it from
ever seeing that call.

`test` attach to pipeline hooks
rather than the transport, so their order does not affect what they observe.

#### `ratelimit`

Client-side rate limiting via a token bucket.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

| Option | Type |
|---|---|
| `now` | function |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.ratelimit.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `retry`

Automatic retry of transient failures with exponential backoff.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

| Option | Type |
|---|---|
| `jitter` | boolean |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.retry.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `test`

In-memory mock transport for testing without a live server.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `entity` | map |
| `net` | map |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

#### `timeout`

Per-request timeout with transport abort.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

| Option | Type |
|---|---|
| `clearTimer` | function |
| `setTimer` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.timeout.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

