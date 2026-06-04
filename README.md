# TaiwanLegalAi SDK

Query Taiwan legal information, analyse cases, and work with contract data via TaiLexi's AI-backed API

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Taiwan Legal AI

[TaiLexi AI](https://twlawbot.com/) (法律AI) is a Taiwan-focused legal AI service. This SDK wraps its HTTP API at `https://twlawbot.com/api`, providing typed access to legal queries, case analysis, and contract-related operations from JavaScript and TypeScript.

What you can do with the API:

- Submit natural-language legal queries against Taiwan legal sources
- Run case analysis workflows over supplied case material
- Access contract-oriented services for drafting, review, or related tasks

The upstream service is operated by TaiLexi AI. Authentication, quotas, and pricing are controlled by the provider — check the homepage for current terms before integrating into production workflows.

## Try it

**TypeScript**
```bash
npm install taiwan-legal-ai
```

**Python**
```bash
pip install taiwan-legal-ai-sdk
```

**PHP**
```bash
composer require voxgig/taiwan-legal-ai-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/taiwan-legal-ai-sdk/go
```

**Ruby**
```bash
gem install taiwan-legal-ai-sdk
```

**Lua**
```bash
luarocks install taiwan-legal-ai-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { TaiwanLegalAiSDK } from 'taiwan-legal-ai'

const client = new TaiwanLegalAiSDK({})

```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o taiwan-legal-ai-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "taiwan-legal-ai": {
      "command": "/abs/path/to/taiwan-legal-ai-mcp"
    }
  }
}
```

## Entities

The API exposes 3 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **CaseAnalysi** | Case-analysis operations that process supplied case material and return AI-generated analysis. | `/case-analysis` |
| **ContractService** | Contract-oriented services covering contract-related AI tasks exposed by TaiLexi. | `/contract/draft` |
| **LegalQuery** | Legal-question lookups submitted to TaiLexi's Taiwan legal AI for natural-language answers grounded in Taiwan law. | `/query` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from taiwanlegalai_sdk import TaiwanLegalAiSDK

client = TaiwanLegalAiSDK({})

```

### PHP

```php
<?php
require_once 'taiwanlegalai_sdk.php';

$client = new TaiwanLegalAiSDK([]);

```

### Golang

```go
import sdk "github.com/voxgig-sdk/taiwan-legal-ai-sdk/go"

client := sdk.NewTaiwanLegalAiSDK(map[string]any{})

```

### Ruby

```ruby
require_relative "TaiwanLegalAi_sdk"

client = TaiwanLegalAiSDK.new({})

```

### Lua

```lua
local sdk = require("taiwan-legal-ai_sdk")

local client = sdk.new({})

```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = TaiwanLegalAiSDK.test()
const result = await client.CaseAnalysi().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = TaiwanLegalAiSDK.test(None, None)
result, err = client.CaseAnalysi(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = TaiwanLegalAiSDK::test(null, null);
[$result, $err] = $client->CaseAnalysi(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.CaseAnalysi(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = TaiwanLegalAiSDK.test(nil, nil)
result, err = client.CaseAnalysi(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:CaseAnalysi(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Taiwan Legal AI

- Upstream: [https://twlawbot.com/](https://twlawbot.com/)

---

Generated from the Taiwan Legal AI OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
