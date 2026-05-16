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

#### `TestSDK(testopts, sdkopts map[string]any) *TaiwanLegalAiSDK`

Create a test client with mock features active. Both arguments may be `nil`.

```go
client := sdk.TestSDK(nil, nil)
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
case_analysi := client.CaseAnalysi(nil)
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

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.CaseAnalysi(nil).Create(map[string]any{
    "case_detail": /* `$STRING` */,
}, nil)
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
contract_service := client.ContractService(nil)
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

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ContractService(nil).Create(map[string]any{
    "contract_text": /* `$STRING` */,
    "requirement": /* `$STRING` */,
}, nil)
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
legal_query := client.LegalQuery(nil)
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

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.LegalQuery(nil).Create(map[string]any{
}, nil)
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
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```go
client := sdk.NewTaiwanLegalAiSDK(map[string]any{
    "feature": map[string]any{
        "test": map[string]any{"active": true},
    },
})
```

