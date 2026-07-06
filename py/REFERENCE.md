# TaiwanLegalAi Python SDK Reference

Complete API reference for the TaiwanLegalAi Python SDK.


## TaiwanLegalAiSDK

### Constructor

```python
from taiwanlegalai_sdk import TaiwanLegalAiSDK

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
case_analysi = client.CaseAnalysi()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `analysis_id` | `str` | No |  |
| `applicable_law` | `list` | No |  |
| `case_detail` | `str` | Yes |  |
| `case_type` | `str` | No |  |
| `language` | `str` | No |  |
| `legal_issue` | `list` | No |  |
| `party` | `dict` | No |  |
| `precedent` | `list` | No |  |
| `recommendation` | `str` | No |  |
| `summary` | `str` | No |  |
| `timestamp` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.CaseAnalysi().create({
    "case_detail": "example",  # str
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
contract_service = client.ContractService()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `claus` | `list` | No |  |
| `compliance_check` | `dict` | No |  |
| `content` | `str` | No |  |
| `contract_text` | `str` | Yes |  |
| `contract_type` | `str` | No |  |
| `draft_id` | `str` | No |  |
| `focus_area` | `list` | No |  |
| `issue` | `list` | No |  |
| `language` | `str` | No |  |
| `missing_claus` | `list` | No |  |
| `note` | `str` | No |  |
| `overall_assessment` | `str` | No |  |
| `party` | `dict` | No |  |
| `recommendation` | `list` | No |  |
| `requirement` | `str` | Yes |  |
| `review_id` | `str` | No |  |
| `risk_level` | `str` | No |  |
| `specific_claus` | `list` | No |  |
| `timestamp` | `str` | No |  |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ContractService().create({
    "contract_text": "example",  # str
    "requirement": "example",  # str
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
legal_query = client.LegalQuery()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `answer` | `str` | No |  |
| `category` | `str` | No |  |
| `language` | `str` | No |  |
| `query_id` | `str` | No |  |
| `question` | `str` | No |  |
| `relevant_law` | `list` | No |  |
| `timestamp` | `str` | No |  |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.LegalQuery().create({
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

