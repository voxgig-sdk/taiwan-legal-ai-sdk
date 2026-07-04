# TaiwanLegalAi PHP SDK Reference

Complete API reference for the TaiwanLegalAi PHP SDK.


## TaiwanLegalAiSDK

### Constructor

```php
require_once __DIR__ . '/taiwan-legal-ai_sdk.php';

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

#### `optionsMap(): array`

Return a deep copy of the current SDK options.

#### `getUtility(): ProjectNameUtility`

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
$case_analysi = $client->case_analysi();
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->case_analysi()->create([
  "case_detail" => /* `$STRING` */,
]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): CaseAnalysiEntity`

Create a new `CaseAnalysiEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## ContractServiceEntity

```php
$contract_service = $client->contract_service();
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->contract_service()->create([
  "contract_text" => /* `$STRING` */,
  "requirement" => /* `$STRING` */,
]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): ContractServiceEntity`

Create a new `ContractServiceEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## LegalQueryEntity

```php
$legal_query = $client->legal_query();
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->legal_query()->create([
]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): LegalQueryEntity`

Create a new `LegalQueryEntity` instance with the same client and
options.

#### `getName(): string`

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

