# TaiwanLegalAi Ruby SDK



The Ruby SDK for the TaiwanLegalAi API — an entity-oriented client using idiomatic Ruby conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `client.CaseAnalysi` — with named operations (`create`) instead of raw URL paths and query strings. Working with resources and verbs keeps call sites self-describing and reduces cognitive load.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to RubyGems. Install it from the
GitHub release tag (`rb/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/taiwan-legal-ai-sdk/releases](https://github.com/voxgig-sdk/taiwan-legal-ai-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ruby
require_relative "TaiwanLegalAi_sdk"

client = TaiwanLegalAiSDK.new({
  "apikey" => ENV["TAIWAN_LEGAL_AI_APIKEY"],
})
```

### 4. Create, update, and remove

```ruby
# create returns the ENTITY — call data_get for the created CaseAnalysi record.
created = client.CaseAnalysi.create({ "caseDetails" => "example_caseDetails" })

```


## Error handling

Entity operations raise on failure, so rescue them:

```ruby
begin
  caseanalysi = client.CaseAnalysi.create({ "caseDetails" => "example" })
rescue => err
  warn "create failed: #{err}"
end
```

`direct` does **not** raise — it returns the result hash. Branch on
`ok`; on failure `status` holds the HTTP status (for error responses) and
`err` holds a transport error, so read both defensively:

```ruby
result = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example_id" },
})

warn "request failed: #{result["err"] || "HTTP #{result["status"]}"}" unless result["ok"]
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ruby
result = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})

if result["ok"]
  puts result["status"]  # 200
  puts result["data"]    # response body
else
  # On an HTTP error status there is no err (only a transport failure sets
  # it), so fall back to the status code.
  warn(result["err"] || "HTTP #{result["status"]}")
end
```

### Prepare a request without sending it

```ruby
begin
  fetchdef = client.prepare({
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => { "id" => "example" },
  })
  puts fetchdef["url"]
  puts fetchdef["method"]
  puts fetchdef["headers"]
rescue => err
  warn "prepare failed: #{err}"
end
```

### Use test mode

Create a mock client for unit testing — no server required:

```ruby
client = TaiwanLegalAiSDK.test

# Entity ops return the ENTITY (raises on error);
# call data_get for the mock record.
caseanalysi = client.CaseAnalysi.create({ "caseDetails" => "example" })
puts caseanalysi
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```ruby
mock_fetch = ->(url, init) {
  return {
    "status" => 200,
    "statusText" => "OK",
    "headers" => {},
    "json" => ->() { { "id" => "mock01" } },
  }, nil
}

client = TaiwanLegalAiSDK.new({
  "base" => "http://localhost:8080",
  "system" => {
    "fetch" => mock_fetch,
  },
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
cd rb && ruby -Itest -e "Dir['test/*_test.rb'].each { |f| require_relative f }"
```


## Reference

### TaiwanLegalAiSDK

```ruby
require_relative "TaiwanLegalAi_sdk"
client = TaiwanLegalAiSDK.new(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `String` | API key for authentication. |
| `base` | `String` | Base URL of the API server. |
| `prefix` | `String` | URL path prefix prepended to all requests. |
| `suffix` | `String` | URL path suffix appended to all requests. |
| `feature` | `Hash` | Feature activation flags. |
| `extend` | `Hash` | Additional Feature instances to load. |
| `system` | `Hash` | System overrides (e.g. custom `fetch` lambda). |

### test

```ruby
client = TaiwanLegalAiSDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### TaiwanLegalAiSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> Hash` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> Hash` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> Hash` | Build and send an HTTP request. Returns a result hash (`result["ok"]`); does not raise. |
| `CaseAnalysi` | `(data) -> CaseAnalysiEntity` | Create a CaseAnalysi entity instance. |
| `ContractService` | `(data) -> ContractServiceEntity` | Create a ContractService entity instance. |
| `LegalQuery` | `(data) -> LegalQueryEntity` | Create a LegalQuery entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `create` | `(reqdata, ctrl) -> any` | Create a new entity. Raises on error. |
| `data_get` | `() -> Hash` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> Hash` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> String` | Return the entity name. |

### Result shape

Entity operations return the result data directly. On failure they
raise a `TaiwanLegalAiError` (a `StandardError` subclass), so wrap
calls in `begin`/`rescue` where you need to handle errors.

The `direct` escape hatch is the exception: it never raises and instead
returns a result `Hash` with these keys:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `Boolean` | `true` if the HTTP status is 2xx. |
| `status` | `Integer` | HTTP status code. |
| `headers` | `Hash` | Response headers. |
| `data` | `any` | Parsed JSON response body. |
| `err` | `Error` | Present when `ok` is `false`. |

### Entities

#### CaseAnalysi

| Field | Description |
| --- | --- |
| `analysisId` | Unique identifier for the analysis |
| `applicableLaws` | Laws applicable to this case |
| `caseDetails` | Detailed description of the case |
| `caseType` | Type of legal case |
| `language` |  |
| `legalIssues` | Identified legal issues |
| `parties` | Information about parties involved |
| `precedents` | Relevant legal precedents |
| `recommendations` | AI recommendations for case strategy |
| `summary` | Summary of the case analysis |
| `timestamp` |  |

Operations: Create.

API path: `/case-analysis`

#### ContractService

| Field | Description |
| --- | --- |
| `clauses` | List of contract clauses |
| `complianceCheck` | Compliance with Taiwan laws |
| `content` | The complete contract draft text |
| `contractText` | The complete contract text to be reviewed |
| `contractType` | Type of contract to draft |
| `draftId` | Unique identifier for the contract draft |
| `focusAreas` | Specific areas to focus the review on |
| `issues` | Identified issues and concerns |
| `language` |  |
| `missingClauses` | Important clauses that are missing |
| `notes` | Important notes and considerations |
| `overallAssessment` | Overall assessment of the contract |
| `parties` | Information about contracting parties |
| `recommendations` | Recommended changes and improvements |
| `requirements` | Specific requirements and terms for the contract |
| `reviewId` | Unique identifier for the review |
| `riskLevel` | Overall risk level assessment |
| `specificClauses` | Specific clauses to include |
| `timestamp` |  |

Operations: Create.

API path: `/contract/draft`

#### LegalQuery

| Field | Description |
| --- | --- |
| `answer` | AI-generated legal guidance |
| `category` | Category of legal question |
| `language` | Response language preference |
| `queryId` | Unique identifier for the query |
| `question` | The submitted question |
| `relevantLaws` | List of relevant legal statutes |
| `timestamp` | Timestamp of the response |

Operations: Create.

API path: `/query`



## Entities


### CaseAnalysi

Create an instance: `case_analysi = client.CaseAnalysi`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `analysisId` | `String` | Unique identifier for the analysis |
| `applicableLaws` | `Array` | Laws applicable to this case |
| `caseDetails` | `String` | Detailed description of the case |
| `caseType` | `String` | Type of legal case |
| `language` | `String` |  |
| `legalIssues` | `Array` | Identified legal issues |
| `parties` | `Hash` | Information about parties involved |
| `precedents` | `Array` | Relevant legal precedents |
| `recommendations` | `String` | AI recommendations for case strategy |
| `summary` | `String` | Summary of the case analysis |
| `timestamp` | `String` |  |

#### Example: Create

```ruby
case_analysi = client.CaseAnalysi.create({
  "caseDetails" => "example_caseDetails", # String
})
```


### ContractService

Create an instance: `contract_service = client.ContractService`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `clauses` | `Array` | List of contract clauses |
| `complianceCheck` | `Hash` | Compliance with Taiwan laws |
| `content` | `String` | The complete contract draft text |
| `contractText` | `String` | The complete contract text to be reviewed |
| `contractType` | `String` | Type of contract to draft |
| `draftId` | `String` | Unique identifier for the contract draft |
| `focusAreas` | `Array` | Specific areas to focus the review on |
| `issues` | `Array` | Identified issues and concerns |
| `language` | `String` |  |
| `missingClauses` | `Array` | Important clauses that are missing |
| `notes` | `String` | Important notes and considerations |
| `overallAssessment` | `String` | Overall assessment of the contract |
| `parties` | `Hash` | Information about contracting parties |
| `recommendations` | `Array` | Recommended changes and improvements |
| `requirements` | `String` | Specific requirements and terms for the contract |
| `reviewId` | `String` | Unique identifier for the review |
| `riskLevel` | `String` | Overall risk level assessment |
| `specificClauses` | `Array` | Specific clauses to include |
| `timestamp` | `String` |  |

#### Example: Create

```ruby
contract_service = client.ContractService.create({
  "contractText" => "example_contractText", # String
  "requirements" => "example_requirements", # String
})
```


### LegalQuery

Create an instance: `legal_query = client.LegalQuery`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `answer` | `String` | AI-generated legal guidance |
| `category` | `String` | Category of legal question |
| `language` | `String` | Response language preference |
| `queryId` | `String` | Unique identifier for the query |
| `question` | `String` | The submitted question |
| `relevantLaws` | `Array` | List of relevant legal statutes |
| `timestamp` | `String` | Timestamp of the response |

#### Example: Create

```ruby
legal_query = client.LegalQuery.create({
})
```

## Features

This SDK ships 4 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`ratelimit`](#ratelimit) | Client-side rate limiting via a token bucket |
| [`retry`](#retry) | Automatic retry of transient failures with exponential backoff |
| [`test`](#test) | In-memory mock transport for testing without a live server |
| [`timeout`](#timeout) | Per-request timeout with transport abort |

> **Order matters for `ratelimit`, `retry`, `timeout`.** These wrap the
> transport, so each one wraps whatever is already installed: the order you
> activate them in IS the nesting order. Activating them as an ordered list
> rather than a map is what fixes that order.

### ratelimit

Client-side rate limiting via a token bucket.

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

Set `feature.ratelimit.active` to enable it, then override any of the options above.

`ratelimit` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### retry

Automatic retry of transient failures with exponential backoff.

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

Set `feature.retry.active` to enable it, then override any of the options above.

`retry` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### test

In-memory mock transport for testing without a live server.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.

### timeout

Per-request timeout with transport abort.

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

Set `feature.timeout.active` to enable it, then override any of the options above.

`timeout` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.


## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

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

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature is a Ruby class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **RatelimitFeature**: Client-side rate limiting via a token bucket
- **RetryFeature**: Automatic retry of transient failures with exponential backoff
- **TestFeature**: In-memory mock transport for testing without a live server
- **TimeoutFeature**: Per-request timeout with transport abort

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as hashes

The Ruby SDK uses plain Ruby hashes throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers.to_map()` to safely validate that a value is a hash.

### Module structure

```
rb/
├── TaiwanLegalAi_sdk.rb       -- Main SDK module
├── config.rb                  -- Configuration
├── schema.rb                  -- Generated option + entity specs
├── features.rb                -- Feature factory
├── core/                      -- Core types and context
├── entity/                    -- Entity implementations
├── feature/                   -- Built-in features (Base, Test, Log)
├── utility/                   -- Utility functions and struct library
└── test/                      -- Test suites
```

The main module (`TaiwanLegalAi_sdk`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `create`, the entity
stores the returned data and match criteria internally.

```ruby
caseanalysi = client.CaseAnalysi
caseanalysi.create({ "caseDetails" => "example" })

# caseanalysi.data_get now returns the caseanalysi data from the last create
# caseanalysi.match_get returns the last match criteria
```

Call `make` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
