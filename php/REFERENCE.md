# TaiwanLegalAi PHP SDK Reference

Complete API reference for the TaiwanLegalAi PHP SDK.


## TaiwanLegalAiSDK

### Constructor

```php
require_once __DIR__ . '/taiwanlegalai_sdk.php';

$client = new TaiwanLegalAiSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["apikey"]` | `string` | API key for authentication. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `TaiwanLegalAiSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = TaiwanLegalAiSDK::test();
```


### Instance Methods

#### `CaseAnalysi($data = null)`

Create a new `CaseAnalysiEntity` instance. Pass `null` for no initial data.

#### `ContractService($data = null)`

Create a new `ContractServiceEntity` instance. Pass `null` for no initial data.

#### `LegalQuery($data = null)`

Create a new `LegalQueryEntity` instance. Pass `null` for no initial data.

#### `options_map(): array`

Return a deep copy of the current SDK options.

#### `get_utility(): TaiwanLegalAiUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## CaseAnalysiEntity

```php
$case_analysi = $client->CaseAnalysi();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `analysisId` | `string` | No | Unique identifier for the analysis |
| `applicableLaws` | `array` | No | Laws applicable to this case |
| `caseDetails` | `string` | Yes | Detailed description of the case |
| `caseType` | `string` | No | Type of legal case |
| `language` | `string` | No |  |
| `legalIssues` | `array` | No | Identified legal issues |
| `parties` | `array` | No | Information about parties involved |
| `precedents` | `array` | No | Relevant legal precedents |
| `recommendations` | `string` | No | AI recommendations for case strategy |
| `summary` | `string` | No | Summary of the case analysis |
| `timestamp` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->CaseAnalysi()->create([
  "caseDetails" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CaseAnalysiEntity`

Create a new `CaseAnalysiEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ContractServiceEntity

```php
$contract_service = $client->ContractService();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `clauses` | `array` | No | List of contract clauses |
| `complianceCheck` | `array` | No | Compliance with Taiwan laws |
| `content` | `string` | No | The complete contract draft text |
| `contractText` | `string` | Yes | The complete contract text to be reviewed |
| `contractType` | `string` | No | Type of contract to draft |
| `draftId` | `string` | No | Unique identifier for the contract draft |
| `focusAreas` | `array` | No | Specific areas to focus the review on |
| `issues` | `array` | No | Identified issues and concerns |
| `language` | `string` | No |  |
| `missingClauses` | `array` | No | Important clauses that are missing |
| `notes` | `string` | No | Important notes and considerations |
| `overallAssessment` | `string` | No | Overall assessment of the contract |
| `parties` | `array` | No | Information about contracting parties |
| `recommendations` | `array` | No | Recommended changes and improvements |
| `requirements` | `string` | Yes | Specific requirements and terms for the contract |
| `reviewId` | `string` | No | Unique identifier for the review |
| `riskLevel` | `string` | No | Overall risk level assessment |
| `specificClauses` | `array` | No | Specific clauses to include |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ContractService()->create([
  "contractText" => null, // string
  "requirements" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ContractServiceEntity`

Create a new `ContractServiceEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## LegalQueryEntity

```php
$legal_query = $client->LegalQuery();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `answer` | `string` | No | AI-generated legal guidance |
| `category` | `string` | No | Category of legal question |
| `language` | `string` | No | Response language preference |
| `queryId` | `string` | No | Unique identifier for the query |
| `question` | `string` | No | The submitted question |
| `relevantLaws` | `array` | No | List of relevant legal statutes |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->LegalQuery()->create([
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): LegalQueryEntity`

Create a new `LegalQueryEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```php
$client = new TaiwanLegalAiSDK([
  "feature" => [
    "test" => ["active" => true],
  ],
]);
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

