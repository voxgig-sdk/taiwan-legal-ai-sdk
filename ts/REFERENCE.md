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
| `analysisId` | `string` | No | Unique identifier for the analysis |
| `applicableLaws` | `any[]` | No | Laws applicable to this case |
| `caseDetails` | `string` | Yes | Detailed description of the case |
| `caseType` | `string` | No | Type of legal case |
| `language` | `string` | No |  |
| `legalIssues` | `any[]` | No | Identified legal issues |
| `parties` | `Record<string, any>` | No | Information about parties involved |
| `precedents` | `any[]` | No | Relevant legal precedents |
| `recommendations` | `string` | No | AI recommendations for case strategy |
| `summary` | `string` | No | Summary of the case analysis |
| `timestamp` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.CaseAnalysi().create({
  caseDetails: 'example_caseDetails',
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
| `clauses` | `any[]` | No | List of contract clauses |
| `complianceCheck` | `Record<string, any>` | No | Compliance with Taiwan laws |
| `content` | `string` | No | The complete contract draft text |
| `contractText` | `string` | Yes | The complete contract text to be reviewed |
| `contractType` | `string` | No | Type of contract to draft |
| `draftId` | `string` | No | Unique identifier for the contract draft |
| `focusAreas` | `any[]` | No | Specific areas to focus the review on |
| `issues` | `any[]` | No | Identified issues and concerns |
| `language` | `string` | No |  |
| `missingClauses` | `any[]` | No | Important clauses that are missing |
| `notes` | `string` | No | Important notes and considerations |
| `overallAssessment` | `string` | No | Overall assessment of the contract |
| `parties` | `Record<string, any>` | No | Information about contracting parties |
| `recommendations` | `any[]` | No | Recommended changes and improvements |
| `requirements` | `string` | Yes | Specific requirements and terms for the contract |
| `reviewId` | `string` | No | Unique identifier for the review |
| `riskLevel` | `string` | No | Overall risk level assessment |
| `specificClauses` | `any[]` | No | Specific clauses to include |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ContractService().create({
  contractText: 'example_contractText',
  requirements: 'example_requirements',
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
| `answer` | `string` | No | AI-generated legal guidance |
| `category` | `string` | No | Category of legal question |
| `language` | `string` | No | Response language preference |
| `queryId` | `string` | No | Unique identifier for the query |
| `question` | `string` | No | The submitted question |
| `relevantLaws` | `any[]` | No | List of relevant legal statutes |
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
| `ratelimit` | 0.0.1 | Client-side rate limiting via a token bucket |
| `retry` | 0.0.1 | Automatic retry of transient failures with exponential backoff |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |
| `timeout` | 0.0.1 | Per-request timeout with transport abort |


Features are activated via the `feature` option:

```ts
const client = new TaiwanLegalAiSDK({
  feature: {
    ratelimit: { active: true },
    retry: { active: true },
    test: { active: true },
    timeout: { active: true },
  }
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

