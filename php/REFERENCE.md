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
| `analysis_id` | `string` | No |  |
| `applicable_law` | `array` | No |  |
| `case_detail` | `string` | Yes |  |
| `case_type` | `string` | No |  |
| `language` | `string` | No |  |
| `legal_issue` | `array` | No |  |
| `party` | `array` | No |  |
| `precedent` | `array` | No |  |
| `recommendation` | `string` | No |  |
| `summary` | `string` | No |  |
| `timestamp` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->CaseAnalysi()->create([
  "case_detail" => null, // string
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
| `claus` | `array` | No |  |
| `compliance_check` | `array` | No |  |
| `content` | `string` | No |  |
| `contract_text` | `string` | Yes |  |
| `contract_type` | `string` | No |  |
| `draft_id` | `string` | No |  |
| `focus_area` | `array` | No |  |
| `issue` | `array` | No |  |
| `language` | `string` | No |  |
| `missing_claus` | `array` | No |  |
| `note` | `string` | No |  |
| `overall_assessment` | `string` | No |  |
| `party` | `array` | No |  |
| `recommendation` | `array` | No |  |
| `requirement` | `string` | Yes |  |
| `review_id` | `string` | No |  |
| `risk_level` | `string` | No |  |
| `specific_claus` | `array` | No |  |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ContractService()->create([
  "contract_text" => null, // string
  "requirement" => null, // string
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
| `answer` | `string` | No |  |
| `category` | `string` | No |  |
| `language` | `string` | No |  |
| `query_id` | `string` | No |  |
| `question` | `string` | No |  |
| `relevant_law` | `array` | No |  |
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

