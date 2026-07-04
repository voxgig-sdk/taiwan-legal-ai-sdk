# TaiwanLegalAi Python SDK Reference

Complete API reference for the TaiwanLegalAi Python SDK.


## TaiwanLegalAiSDK

### Constructor

```python
from taiwan-legal-ai_sdk import TaiwanLegalAiSDK

client = TaiwanLegalAiSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["apikey"]` | `str` | API key for authentication. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `TaiwanLegalAiSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = TaiwanLegalAiSDK.test()
```


### Instance Methods

#### `CaseAnalysi(data=None)`

Create a new `CaseAnalysiEntity` instance. Pass `None` for no initial data.

#### `ContractService(data=None)`

Create a new `ContractServiceEntity` instance. Pass `None` for no initial data.

#### `LegalQuery(data=None)`

Create a new `LegalQueryEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## CaseAnalysiEntity

```python
case_analysi = client.case_analysi
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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.case_analysi.create({
    "case_detail": # `$STRING`,
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CaseAnalysiEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ContractServiceEntity

```python
contract_service = client.contract_service
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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.contract_service.create({
    "contract_text": # `$STRING`,
    "requirement": # `$STRING`,
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ContractServiceEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## LegalQueryEntity

```python
legal_query = client.legal_query
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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.legal_query.create({
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LegalQueryEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```python
client = TaiwanLegalAiSDK({
    "feature": {
        "test": {"active": True},
    },
})
```

