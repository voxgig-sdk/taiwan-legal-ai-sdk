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
| `analysisId` | `str` | No | Unique identifier for the analysis |
| `applicableLaws` | `list` | No | Laws applicable to this case |
| `caseDetails` | `str` | Yes | Detailed description of the case |
| `caseType` | `str` | No | Type of legal case |
| `language` | `str` | No |  |
| `legalIssues` | `list` | No | Identified legal issues |
| `parties` | `dict` | No | Information about parties involved |
| `precedents` | `list` | No | Relevant legal precedents |
| `recommendations` | `str` | No | AI recommendations for case strategy |
| `summary` | `str` | No | Summary of the case analysis |
| `timestamp` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.CaseAnalysi().create({
    "caseDetails": "example_caseDetails",  # str
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
| `clauses` | `list` | No | List of contract clauses |
| `complianceCheck` | `dict` | No | Compliance with Taiwan laws |
| `content` | `str` | No | The complete contract draft text |
| `contractText` | `str` | Yes | The complete contract text to be reviewed |
| `contractType` | `str` | No | Type of contract to draft |
| `draftId` | `str` | No | Unique identifier for the contract draft |
| `focusAreas` | `list` | No | Specific areas to focus the review on |
| `issues` | `list` | No | Identified issues and concerns |
| `language` | `str` | No |  |
| `missingClauses` | `list` | No | Important clauses that are missing |
| `notes` | `str` | No | Important notes and considerations |
| `overallAssessment` | `str` | No | Overall assessment of the contract |
| `parties` | `dict` | No | Information about contracting parties |
| `recommendations` | `list` | No | Recommended changes and improvements |
| `requirements` | `str` | Yes | Specific requirements and terms for the contract |
| `reviewId` | `str` | No | Unique identifier for the review |
| `riskLevel` | `str` | No | Overall risk level assessment |
| `specificClauses` | `list` | No | Specific clauses to include |
| `timestamp` | `str` | No |  |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ContractService().create({
    "contractText": "example_contractText",  # str
    "requirements": "example_requirements",  # str
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
| `answer` | `str` | No | AI-generated legal guidance |
| `category` | `str` | No | Category of legal question |
| `language` | `str` | No | Response language preference |
| `queryId` | `str` | No | Unique identifier for the query |
| `question` | `str` | No | The submitted question |
| `relevantLaws` | `list` | No | List of relevant legal statutes |
| `timestamp` | `str` | No | Timestamp of the response |

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
| `ratelimit` | 0.0.1 | Client-side rate limiting via a token bucket |
| `retry` | 0.0.1 | Automatic retry of transient failures with exponential backoff |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |
| `timeout` | 0.0.1 | Per-request timeout with transport abort |


Features are activated via the `feature` option:

```python
client = TaiwanLegalAiSDK({
    "feature": {
        "ratelimit": {"active": True},
        "retry": {"active": True},
        "test": {"active": True},
        "timeout": {"active": True},
    },
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

