# TaiwanLegalAi TypeScript SDK



The TypeScript SDK for the TaiwanLegalAi API — a type-safe, entity-oriented client with full async/await support.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to npm. Install it from the GitHub
release tag (`ts/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/taiwan-legal-ai-sdk/releases](https://github.com/voxgig-sdk/taiwan-legal-ai-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ts
import { TaiwanLegalAiSDK } from '@voxgig-sdk/taiwan-legal-ai'

const client = new TaiwanLegalAiSDK({
  apikey: process.env.TAIWAN_LEGAL_AI_APIKEY,
})
```

### 4. Create, update, and remove

```ts
// Create
const created = await client.caseanalysi.create({
  name: 'Example',
})

```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})

if (result.ok) {
  console.log(result.status)  // 200
  console.log(result.data)    // response body
}
```

### Prepare a request without sending it

```ts
const fetchdef = await client.prepare({
  path: '/api/resource/{id}',
  method: 'DELETE',
  params: { id: 'example' },
})

// Inspect before sending
console.log(fetchdef.url)
console.log(fetchdef.method)
console.log(fetchdef.headers)
```

### Use test mode

Create a mock client for unit testing — no server required:

```ts
const client = TaiwanLegalAiSDK.test()

const result = await client.caseanalysi.load({ id: 'test01' })
// result.ok === true
// result.data contains mock response data
```

You can also use the instance method:

```ts
const client = new TaiwanLegalAiSDK({ apikey: '...' })
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```ts
const entity = client.caseanalysi

// First call sets internal match
await entity.load({ id: 'example' })

// Subsequent calls reuse the stored match
const data = entity.data()
console.log(data.id) // 'example'
```

### Add custom middleware

Pass features via the `extend` option:

```ts
const logger = {
  hooks: {
    PreRequest: (ctx: any) => {
      console.log('Requesting:', ctx.spec.method, ctx.spec.path)
    },
    PreResponse: (ctx: any) => {
      console.log('Status:', ctx.out.request?.status)
    },
  },
}

const client = new TaiwanLegalAiSDK({
  apikey: '...',
  extend: [logger],
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
TAIWAN_LEGAL_AI_TEST_LIVE=TRUE
TAIWAN_LEGAL_AI_APIKEY=<your-key>
```

Then run:

```bash
cd ts && npm test
```


## Reference

### TaiwanLegalAiSDK

#### Constructor

```ts
new TaiwanLegalAiSDK(options?: {
  apikey?: string
  base?: string
  prefix?: string
  suffix?: string
  feature?: Record<string, { active: boolean }>
  extend?: Feature[]
})
```

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `object` | Feature activation flags (e.g. `{ test: { active: true } }`). |
| `extend` | `Feature[]` | Additional feature instances to load. |

#### Methods

| Method | Returns | Description |
| --- | --- | --- |
| `options()` | `object` | Deep copy of current SDK options. |
| `utility()` | `Utility` | Deep copy of the SDK utility object. |
| `prepare(fetchargs?)` | `Promise<FetchDef>` | Build an HTTP request definition without sending it. |
| `direct(fetchargs?)` | `Promise<DirectResult>` | Build and send an HTTP request. |
| `CaseAnalysi(data?)` | `CaseAnalysiEntity` | Create a CaseAnalysi entity instance. |
| `ContractService(data?)` | `ContractServiceEntity` | Create a ContractService entity instance. |
| `LegalQuery(data?)` | `LegalQueryEntity` | Create a LegalQuery entity instance. |
| `tester(testopts?, sdkopts?)` | `TaiwanLegalAiSDK` | Create a test-mode client instance. |

#### Static methods

| Method | Returns | Description |
| --- | --- | --- |
| `TaiwanLegalAiSDK.test(testopts?, sdkopts?)` | `TaiwanLegalAiSDK` | Create a test-mode client. |

### Entity interface

All entities share the same interface.

#### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `load(reqmatch?, ctrl?): Promise<Result>` | Load a single entity by match criteria. |
| `list` | `list(reqmatch?, ctrl?): Promise<Result>` | List entities matching the criteria. |
| `create` | `create(reqdata?, ctrl?): Promise<Result>` | Create a new entity. |
| `update` | `update(reqdata?, ctrl?): Promise<Result>` | Update an existing entity. |
| `remove` | `remove(reqmatch?, ctrl?): Promise<Result>` | Remove an entity. |
| `data` | `data(data?): any` | Get or set entity data. |
| `match` | `match(match?): any` | Get or set entity match criteria. |
| `make` | `make(): Entity` | Create a new instance with the same options. |
| `client` | `client(): TaiwanLegalAiSDK` | Return the parent SDK client. |
| `entopts` | `entopts(): object` | Return a copy of the entity options. |

#### Result shape

All entity operations return a Result object:

```ts
{
  ok: boolean      // true if the HTTP status is 2xx
  status: number   // HTTP status code
  headers: object  // response headers
  data: any        // parsed JSON response body
}
```

### DirectResult shape

The `direct()` method returns:

```ts
{
  ok: boolean
  status: number
  headers: object
  data: any
}
```

On error, `ok` is `false` and an `err` property contains the error.

### FetchDef shape

The `prepare()` method returns:

```ts
{
  url: string
  method: string
  headers: Record<string, string>
  body?: any
}
```

### Entities

#### CaseAnalysi

| Field | Description |
| --- | --- |
| `analysis_id` |  |
| `applicable_law` |  |
| `case_detail` |  |
| `case_type` |  |
| `language` |  |
| `legal_issue` |  |
| `party` |  |
| `precedent` |  |
| `recommendation` |  |
| `summary` |  |
| `timestamp` |  |

Operations: create.

API path: `/case-analysis`

#### ContractService

| Field | Description |
| --- | --- |
| `claus` |  |
| `compliance_check` |  |
| `content` |  |
| `contract_text` |  |
| `contract_type` |  |
| `draft_id` |  |
| `focus_area` |  |
| `issue` |  |
| `language` |  |
| `missing_claus` |  |
| `note` |  |
| `overall_assessment` |  |
| `party` |  |
| `recommendation` |  |
| `requirement` |  |
| `review_id` |  |
| `risk_level` |  |
| `specific_claus` |  |
| `timestamp` |  |

Operations: create.

API path: `/contract/draft`

#### LegalQuery

| Field | Description |
| --- | --- |
| `answer` |  |
| `category` |  |
| `language` |  |
| `query_id` |  |
| `question` |  |
| `relevant_law` |  |
| `timestamp` |  |

Operations: create.

API path: `/query`



## Entities


### CaseAnalysi

Create an instance: `const case_analysi = client.case_analysi`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `analysis_id` | ``$STRING`` |  |
| `applicable_law` | ``$ARRAY`` |  |
| `case_detail` | ``$STRING`` |  |
| `case_type` | ``$STRING`` |  |
| `language` | ``$STRING`` |  |
| `legal_issue` | ``$ARRAY`` |  |
| `party` | ``$OBJECT`` |  |
| `precedent` | ``$ARRAY`` |  |
| `recommendation` | ``$STRING`` |  |
| `summary` | ``$STRING`` |  |
| `timestamp` | ``$STRING`` |  |

#### Example: Create

```ts
const case_analysi = await client.case_analysi.create({
  case_detail: /* `$STRING` */,
})
```


### ContractService

Create an instance: `const contract_service = client.contract_service`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `claus` | ``$ARRAY`` |  |
| `compliance_check` | ``$OBJECT`` |  |
| `content` | ``$STRING`` |  |
| `contract_text` | ``$STRING`` |  |
| `contract_type` | ``$STRING`` |  |
| `draft_id` | ``$STRING`` |  |
| `focus_area` | ``$ARRAY`` |  |
| `issue` | ``$ARRAY`` |  |
| `language` | ``$STRING`` |  |
| `missing_claus` | ``$ARRAY`` |  |
| `note` | ``$STRING`` |  |
| `overall_assessment` | ``$STRING`` |  |
| `party` | ``$OBJECT`` |  |
| `recommendation` | ``$ARRAY`` |  |
| `requirement` | ``$STRING`` |  |
| `review_id` | ``$STRING`` |  |
| `risk_level` | ``$STRING`` |  |
| `specific_claus` | ``$ARRAY`` |  |
| `timestamp` | ``$STRING`` |  |

#### Example: Create

```ts
const contract_service = await client.contract_service.create({
  contract_text: /* `$STRING` */,
  requirement: /* `$STRING` */,
})
```


### LegalQuery

Create an instance: `const legal_query = client.legal_query`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `answer` | ``$STRING`` |  |
| `category` | ``$STRING`` |  |
| `language` | ``$STRING`` |  |
| `query_id` | ``$STRING`` |  |
| `question` | ``$STRING`` |  |
| `relevant_law` | ``$ARRAY`` |  |
| `timestamp` | ``$STRING`` |  |

#### Example: Create

```ts
const legal_query = await client.legal_query.create({
})
```


## Explanation

### The operation pipeline

Every entity operation (load, list, create, update, remove) follows a
six-stage pipeline. Each stage fires a feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage returns an error, the pipeline short-circuits and the
error is returned to the caller.

An unexpected exception triggers the `PreUnexpected` hook before
propagating.

### Features and hooks

Features are the extension mechanism. A feature is an object with a
`hooks` map. Each hook key is a pipeline stage name, and the value is
a function that receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Module structure

```
taiwan-legal-ai/
├── src/
│   ├── TaiwanLegalAiSDK.ts        # Main SDK class
│   ├── entity/             # Entity implementations
│   ├── feature/            # Built-in features (Base, Test, Log)
│   └── utility/            # Utility functions
├── test/                   # Test suites
└── dist/                   # Compiled output
```

Import the SDK from the package root:

```ts
import { TaiwanLegalAiSDK } from '@voxgig-sdk/taiwan-legal-ai'
```

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const caseanalysi = client.caseanalysi
await caseanalysi.load({ id: "example_id" })

// caseanalysi.data() now returns the loaded caseanalysi data
// caseanalysi.match() returns { id: "example_id" }
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

The `direct` method gives full control over the HTTP request. Use it
for non-standard endpoints, bulk operations, or any path not modelled
as an entity. The `prepare` method is useful for debugging — it
shows exactly what `direct` would send.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
