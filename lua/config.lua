-- TaiwanLegalAi SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "TaiwanLegalAi",
      slug = "taiwan-legal-ai",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["ratelimit"] = {
        ["options"] = {
          ["active"] = false,
          ["burst"] = 5,
          ["rate"] = 5,
        },
        ["optspec"] = {
          ["now"] = "`$FUNCTION`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["retry"] = {
        ["options"] = {
          ["active"] = false,
          ["factor"] = 2,
          ["maxDelay"] = 2000,
          ["minDelay"] = 50,
          ["retries"] = 2,
          ["statuses"] = {
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          },
        },
        ["optspec"] = {
          ["jitter"] = "`$BOOLEAN`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["optspec"] = {
          ["entity"] = "`$MAP`",
          ["net"] = "`$MAP`",
        },
        ["strict"] = false,
        ["transport"] = "base",
      },
      ["timeout"] = {
        ["options"] = {
          ["active"] = false,
          ["ms"] = 30000,
        },
        ["optspec"] = {
          ["clearTimer"] = "`$FUNCTION`",
          ["setTimer"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
    },
    options = {
      base = "https://twlawbot.com/api",
      auth = {
        prefix = "",
      },
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["case_analysi"] = {},
        ["contract_service"] = {},
        ["legal_query"] = {},
      },
    },
    entity = {
      ["case_analysi"] = {
        ["fields"] = {
          {
            ["name"] = "analysisId",
            ["short"] = "Unique identifier for the analysis",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "applicableLaws",
            ["short"] = "Laws applicable to this case",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "caseDetails",
            ["req"] = true,
            ["short"] = "Detailed description of the case",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "caseType",
            ["short"] = "Type of legal case",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "language",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "legalIssues",
            ["short"] = "Identified legal issues",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "parties",
            ["short"] = "Information about parties involved",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "precedents",
            ["short"] = "Relevant legal precedents",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "recommendations",
            ["short"] = "AI recommendations for case strategy",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "summary",
            ["short"] = "Summary of the case analysis",
            ["type"] = "`$STRING`",
          },
          {
            ["format"] = "date-time",
            ["name"] = "timestamp",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "case_analysi",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/case-analysis",
                ["segments"] = {
                  {
                    ["lit"] = "case-analysis",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "case-analysis",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["contract_service"] = {
        ["fields"] = {
          {
            ["name"] = "clauses",
            ["short"] = "List of contract clauses",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "complianceCheck",
            ["short"] = "Compliance with Taiwan laws",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "content",
            ["short"] = "The complete contract draft text",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "contractText",
            ["req"] = true,
            ["short"] = "The complete contract text to be reviewed",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "contractType",
            ["op"] = {
              ["create"] = {
                ["req"] = true,
                ["type"] = "`$STRING`",
              },
            },
            ["short"] = "Type of contract to draft",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "draftId",
            ["short"] = "Unique identifier for the contract draft",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "focusAreas",
            ["short"] = "Specific areas to focus the review on",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "issues",
            ["short"] = "Identified issues and concerns",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "language",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "missingClauses",
            ["short"] = "Important clauses that are missing",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "notes",
            ["short"] = "Important notes and considerations",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "overallAssessment",
            ["short"] = "Overall assessment of the contract",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "parties",
            ["short"] = "Information about contracting parties",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "recommendations",
            ["short"] = "Recommended changes and improvements",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "requirements",
            ["req"] = true,
            ["short"] = "Specific requirements and terms for the contract",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "reviewId",
            ["short"] = "Unique identifier for the review",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "riskLevel",
            ["short"] = "Overall risk level assessment",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "specificClauses",
            ["short"] = "Specific clauses to include",
            ["type"] = "`$ARRAY`",
          },
          {
            ["format"] = "date-time",
            ["name"] = "timestamp",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "contract_service",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/contract/draft",
                ["segments"] = {
                  {
                    ["lit"] = "contract",
                  },
                  {
                    ["lit"] = "draft",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "contract",
                  "draft",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/contract/review",
                ["segments"] = {
                  {
                    ["lit"] = "contract",
                  },
                  {
                    ["lit"] = "review",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "contract",
                  "review",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["legal_query"] = {
        ["fields"] = {
          {
            ["name"] = "answer",
            ["short"] = "AI-generated legal guidance",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "category",
            ["short"] = "Category of legal question",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "language",
            ["short"] = "Response language preference",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "queryId",
            ["short"] = "Unique identifier for the query",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "question",
            ["op"] = {
              ["create"] = {
                ["req"] = true,
                ["type"] = "`$STRING`",
              },
            },
            ["short"] = "The submitted question",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "relevantLaws",
            ["short"] = "List of relevant legal statutes",
            ["type"] = "`$ARRAY`",
          },
          {
            ["format"] = "date-time",
            ["name"] = "timestamp",
            ["short"] = "Timestamp of the response",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "legal_query",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/query",
                ["segments"] = {
                  {
                    ["lit"] = "query",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "query",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
