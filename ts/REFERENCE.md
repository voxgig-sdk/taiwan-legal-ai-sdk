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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.CaseAnalysi().create({
  case_detail: /* `$STRING` */,
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ContractService().create({
  contract_text: /* `$STRING` */,
  requirement: /* `$STRING` */,
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

