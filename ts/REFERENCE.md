# TaiwanLegalAi TypeScript SDK Reference

Complete API reference for the TaiwanLegalAi TypeScript SDK.


## TaiwanLegalAiSDK

### Constructor

```ts
new TaiwanLegalAiSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `TaiwanLegalAiSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = TaiwanLegalAiSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `TaiwanLegalAiSDK` instance in test mode.


### Instance Methods

#### `CaseAnalysi(data?: object)`

Create a new `CaseAnalysi` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CaseAnalysiEntity` instance.

#### `ContractService(data?: object)`

Create a new `ContractService` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ContractServiceEntity` instance.

#### `LegalQuery(data?: object)`

Create a new `LegalQuery` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LegalQueryEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `TaiwanLegalAiSDK.test()`.

**Returns:** `TaiwanLegalAiSDK` instance in test mode.


---

## CaseAnalysiEntity

```ts
const case_analysi = client.CaseAnalysi()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `analysis_id` | `string` | No |  |
| `applicable_law` | `any[]` | No |  |
| `case_detail` | `string` | Yes |  |
| `case_type` | `string` | No |  |
| `language` | `string` | No |  |
| `legal_issue` | `any[]` | No |  |
| `party` | `Record<string, any>` | No |  |
| `precedent` | `any[]` | No |  |
| `recommendation` | `string` | No |  |
| `summary` | `string` | No |  |
| `timestamp` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.CaseAnalysi().create({
  case_detail: /* string */,
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CaseAnalysiEntity` instance with the same client and
options.

#### `client()`

Return the parent `TaiwanLegalAiSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ContractServiceEntity

```ts
const contract_service = client.ContractService()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `claus` | `any[]` | No |  |
| `compliance_check` | `Record<string, any>` | No |  |
| `content` | `string` | No |  |
| `contract_text` | `string` | Yes |  |
| `contract_type` | `string` | No |  |
| `draft_id` | `string` | No |  |
| `focus_area` | `any[]` | No |  |
| `issue` | `any[]` | No |  |
| `language` | `string` | No |  |
| `missing_claus` | `any[]` | No |  |
| `note` | `string` | No |  |
| `overall_assessment` | `string` | No |  |
| `party` | `Record<string, any>` | No |  |
| `recommendation` | `any[]` | No |  |
| `requirement` | `string` | Yes |  |
| `review_id` | `string` | No |  |
| `risk_level` | `string` | No |  |
| `specific_claus` | `any[]` | No |  |
| `timestamp` | `string` | No |  |

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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ContractService().create({
  contract_text: /* string */,
  requirement: /* string */,
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ContractServiceEntity` instance with the same client and
options.

#### `client()`

Return the parent `TaiwanLegalAiSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LegalQueryEntity

```ts
const legal_query = client.LegalQuery()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `answer` | `string` | No |  |
| `category` | `string` | No |  |
| `language` | `string` | No |  |
| `query_id` | `string` | No |  |
| `question` | `string` | No |  |
| `relevant_law` | `any[]` | No |  |
| `timestamp` | `string` | No |  |

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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.LegalQuery().create({
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LegalQueryEntity` instance with the same client and
options.

#### `client()`

Return the parent `TaiwanLegalAiSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ts
const client = new TaiwanLegalAiSDK({
  feature: {
    test: { active: true },
  }
})
```

