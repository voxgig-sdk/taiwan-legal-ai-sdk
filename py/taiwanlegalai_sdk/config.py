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
            "slug": "taiwan-legal-ai",
            "version": "0.0.1",
            "target": "py",
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
            "short": "Unique identifier for the analysis",
            "type": "`$STRING`",
          },
          {
            "name": "applicableLaws",
            "short": "Laws applicable to this case",
            "type": "`$ARRAY`",
          },
          {
            "name": "caseDetails",
            "req": True,
            "short": "Detailed description of the case",
            "type": "`$STRING`",
          },
          {
            "name": "caseType",
            "short": "Type of legal case",
            "type": "`$STRING`",
          },
          {
            "name": "language",
            "type": "`$STRING`",
          },
          {
            "name": "legalIssues",
            "short": "Identified legal issues",
            "type": "`$ARRAY`",
          },
          {
            "name": "parties",
            "short": "Information about parties involved",
            "type": "`$OBJECT`",
          },
          {
            "name": "precedents",
            "short": "Relevant legal precedents",
            "type": "`$ARRAY`",
          },
          {
            "name": "recommendations",
            "short": "AI recommendations for case strategy",
            "type": "`$STRING`",
          },
          {
            "name": "summary",
            "short": "Summary of the case analysis",
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
            "short": "List of contract clauses",
            "type": "`$ARRAY`",
          },
          {
            "name": "complianceCheck",
            "short": "Compliance with Taiwan laws",
            "type": "`$OBJECT`",
          },
          {
            "name": "content",
            "short": "The complete contract draft text",
            "type": "`$STRING`",
          },
          {
            "name": "contractText",
            "req": True,
            "short": "The complete contract text to be reviewed",
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
            "short": "Type of contract to draft",
            "type": "`$STRING`",
          },
          {
            "name": "draftId",
            "short": "Unique identifier for the contract draft",
            "type": "`$STRING`",
          },
          {
            "name": "focusAreas",
            "short": "Specific areas to focus the review on",
            "type": "`$ARRAY`",
          },
          {
            "name": "issues",
            "short": "Identified issues and concerns",
            "type": "`$ARRAY`",
          },
          {
            "name": "language",
            "type": "`$STRING`",
          },
          {
            "name": "missingClauses",
            "short": "Important clauses that are missing",
            "type": "`$ARRAY`",
          },
          {
            "name": "notes",
            "short": "Important notes and considerations",
            "type": "`$STRING`",
          },
          {
            "name": "overallAssessment",
            "short": "Overall assessment of the contract",
            "type": "`$STRING`",
          },
          {
            "name": "parties",
            "short": "Information about contracting parties",
            "type": "`$OBJECT`",
          },
          {
            "name": "recommendations",
            "short": "Recommended changes and improvements",
            "type": "`$ARRAY`",
          },
          {
            "name": "requirements",
            "req": True,
            "short": "Specific requirements and terms for the contract",
            "type": "`$STRING`",
          },
          {
            "name": "reviewId",
            "short": "Unique identifier for the review",
            "type": "`$STRING`",
          },
          {
            "name": "riskLevel",
            "short": "Overall risk level assessment",
            "type": "`$STRING`",
          },
          {
            "name": "specificClauses",
            "short": "Specific clauses to include",
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
            "short": "AI-generated legal guidance",
            "type": "`$STRING`",
          },
          {
            "name": "category",
            "short": "Category of legal question",
            "type": "`$STRING`",
          },
          {
            "name": "language",
            "short": "Response language preference",
            "type": "`$STRING`",
          },
          {
            "name": "queryId",
            "short": "Unique identifier for the query",
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
            "short": "The submitted question",
            "type": "`$STRING`",
          },
          {
            "name": "relevantLaws",
            "short": "List of relevant legal statutes",
            "type": "`$ARRAY`",
          },
          {
            "name": "timestamp",
            "short": "Timestamp of the response",
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
