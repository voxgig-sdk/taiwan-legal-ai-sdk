# TaiwanLegalAi SDK configuration


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "TaiwanLegalAi",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://twlawbot.com/api",
            "auth": {
                "prefix": "",
            },
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "case_analysi": {},
                "contract_service": {},
                "legal_query": {},
            },
        },
        "entity": {
      "case_analysi": {
        "fields": [
          {
            "name": "analysisId",
            "type": "`$STRING`",
          },
          {
            "name": "applicableLaws",
            "type": "`$ARRAY`",
          },
          {
            "name": "caseDetails",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "caseType",
            "type": "`$STRING`",
          },
          {
            "name": "language",
            "type": "`$STRING`",
          },
          {
            "name": "legalIssues",
            "type": "`$ARRAY`",
          },
          {
            "name": "parties",
            "type": "`$OBJECT`",
          },
          {
            "name": "precedents",
            "type": "`$ARRAY`",
          },
          {
            "name": "recommendations",
            "type": "`$STRING`",
          },
          {
            "name": "summary",
            "type": "`$STRING`",
          },
          {
            "name": "timestamp",
            "type": "`$STRING`",
          },
        ],
        "name": "case_analysi",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/case-analysis",
                "parts": [
                  "case-analysis",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "contract_service": {
        "fields": [
          {
            "name": "clauses",
            "type": "`$ARRAY`",
          },
          {
            "name": "complianceCheck",
            "type": "`$OBJECT`",
          },
          {
            "name": "content",
            "type": "`$STRING`",
          },
          {
            "name": "contractText",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "contractType",
            "op": {
              "create": {
                "req": True,
                "type": "`$STRING`",
              },
            },
            "type": "`$STRING`",
          },
          {
            "name": "draftId",
            "type": "`$STRING`",
          },
          {
            "name": "focusAreas",
            "type": "`$ARRAY`",
          },
          {
            "name": "issues",
            "type": "`$ARRAY`",
          },
          {
            "name": "language",
            "type": "`$STRING`",
          },
          {
            "name": "missingClauses",
            "type": "`$ARRAY`",
          },
          {
            "name": "notes",
            "type": "`$STRING`",
          },
          {
            "name": "overallAssessment",
            "type": "`$STRING`",
          },
          {
            "name": "parties",
            "type": "`$OBJECT`",
          },
          {
            "name": "recommendations",
            "type": "`$ARRAY`",
          },
          {
            "name": "requirements",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "reviewId",
            "type": "`$STRING`",
          },
          {
            "name": "riskLevel",
            "type": "`$STRING`",
          },
          {
            "name": "specificClauses",
            "type": "`$ARRAY`",
          },
          {
            "name": "timestamp",
            "type": "`$STRING`",
          },
        ],
        "name": "contract_service",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/contract/draft",
                "parts": [
                  "contract",
                  "draft",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/contract/review",
                "parts": [
                  "contract",
                  "review",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "legal_query": {
        "fields": [
          {
            "name": "answer",
            "type": "`$STRING`",
          },
          {
            "name": "category",
            "type": "`$STRING`",
          },
          {
            "name": "language",
            "type": "`$STRING`",
          },
          {
            "name": "queryId",
            "type": "`$STRING`",
          },
          {
            "name": "question",
            "op": {
              "create": {
                "req": True,
                "type": "`$STRING`",
              },
            },
            "type": "`$STRING`",
          },
          {
            "name": "relevantLaws",
            "type": "`$ARRAY`",
          },
          {
            "name": "timestamp",
            "type": "`$STRING`",
          },
        ],
        "name": "legal_query",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/query",
                "parts": [
                  "query",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
