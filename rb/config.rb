# TaiwanLegalAi SDK configuration

module TaiwanLegalAiConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "TaiwanLegalAi",
        "slug" => "taiwan-legal-ai",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "ratelimit" => {
          "options" => {
            "active" => false,
            "burst" => 5,
            "rate" => 5,
          },
          "optspec" => {
            "now" => "`$FUNCTION`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "retry" => {
          "options" => {
            "active" => false,
            "factor" => 2,
            "maxDelay" => 2000,
            "minDelay" => 50,
            "retries" => 2,
            "statuses" => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          },
          "optspec" => {
            "jitter" => "`$BOOLEAN`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "test" => {
          "options" => {
            "active" => false,
          },
          "optspec" => {
            "entity" => "`$MAP`",
            "net" => "`$MAP`",
          },
          "strict" => false,
          "transport" => "base",
        },
        "timeout" => {
          "options" => {
            "active" => false,
            "ms" => 30000,
          },
          "optspec" => {
            "clearTimer" => "`$FUNCTION`",
            "setTimer" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
      },
      "options" => {
        "base" => "https://twlawbot.com/api",
        "auth" => {
          "prefix" => "",
          "name" => "X-API-Key",
        },
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "case_analysi" => {},
          "contract_service" => {},
          "legal_query" => {},
        },
      },
      "entity" => {
        "case_analysi" => {
          "fields" => [
            {
              "name" => "analysisId",
              "title" => "Analysis Id",
              "type" => "`$STRING`",
              "short" => "Unique identifier for the analysis",
            },
            {
              "name" => "applicableLaws",
              "title" => "Applicable Laws",
              "type" => "`$ARRAY`",
              "short" => "Laws applicable to this case",
            },
            {
              "name" => "caseDetails",
              "title" => "Case Details",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "Detailed description of the case",
            },
            {
              "name" => "caseType",
              "title" => "Case Type",
              "type" => "`$STRING`",
              "short" => "Type of legal case",
            },
            {
              "name" => "language",
              "title" => "Language",
              "type" => "`$STRING`",
            },
            {
              "name" => "legalIssues",
              "title" => "Legal Issues",
              "type" => "`$ARRAY`",
              "short" => "Identified legal issues",
            },
            {
              "name" => "parties",
              "title" => "Parties",
              "type" => "`$OBJECT`",
              "short" => "Information about parties involved",
            },
            {
              "name" => "precedents",
              "title" => "Precedents",
              "type" => "`$ARRAY`",
              "short" => "Relevant legal precedents",
            },
            {
              "name" => "recommendations",
              "title" => "Recommendations",
              "type" => "`$STRING`",
              "short" => "AI recommendations for case strategy",
            },
            {
              "name" => "summary",
              "title" => "Summary",
              "type" => "`$STRING`",
              "short" => "Summary of the case analysis",
            },
            {
              "name" => "timestamp",
              "title" => "Timestamp",
              "type" => "`$STRING`",
              "format" => "date-time",
            },
          ],
          "name" => "case_analysi",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/case-analysis",
                  "segments" => [
                    {
                      "lit" => "case-analysis",
                    },
                  ],
                  "parts" => [
                    "case-analysis",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "contract_service" => {
          "fields" => [
            {
              "name" => "clauses",
              "title" => "Clauses",
              "type" => "`$ARRAY`",
              "short" => "List of contract clauses",
            },
            {
              "name" => "complianceCheck",
              "title" => "Compliance Check",
              "type" => "`$OBJECT`",
              "short" => "Compliance with Taiwan laws",
            },
            {
              "name" => "content",
              "title" => "Content",
              "type" => "`$STRING`",
              "short" => "The complete contract draft text",
            },
            {
              "name" => "contractText",
              "title" => "Contract Text",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "The complete contract text to be reviewed",
            },
            {
              "name" => "contractType",
              "title" => "Contract Type",
              "type" => "`$STRING`",
              "op" => {
                "create" => {
                  "req" => true,
                  "type" => "`$STRING`",
                },
              },
              "short" => "Type of contract to draft",
            },
            {
              "name" => "draftId",
              "title" => "Draft Id",
              "type" => "`$STRING`",
              "short" => "Unique identifier for the contract draft",
            },
            {
              "name" => "focusAreas",
              "title" => "Focus Areas",
              "type" => "`$ARRAY`",
              "short" => "Specific areas to focus the review on",
            },
            {
              "name" => "issues",
              "title" => "Issues",
              "type" => "`$ARRAY`",
              "short" => "Identified issues and concerns",
            },
            {
              "name" => "language",
              "title" => "Language",
              "type" => "`$STRING`",
            },
            {
              "name" => "missingClauses",
              "title" => "Missing Clauses",
              "type" => "`$ARRAY`",
              "short" => "Important clauses that are missing",
            },
            {
              "name" => "notes",
              "title" => "Notes",
              "type" => "`$STRING`",
              "short" => "Important notes and considerations",
            },
            {
              "name" => "overallAssessment",
              "title" => "Overall Assessment",
              "type" => "`$STRING`",
              "short" => "Overall assessment of the contract",
            },
            {
              "name" => "parties",
              "title" => "Parties",
              "type" => "`$OBJECT`",
              "short" => "Information about contracting parties",
            },
            {
              "name" => "recommendations",
              "title" => "Recommendations",
              "type" => "`$ARRAY`",
              "short" => "Recommended changes and improvements",
            },
            {
              "name" => "requirements",
              "title" => "Requirements",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "Specific requirements and terms for the contract",
            },
            {
              "name" => "reviewId",
              "title" => "Review Id",
              "type" => "`$STRING`",
              "short" => "Unique identifier for the review",
            },
            {
              "name" => "riskLevel",
              "title" => "Risk Level",
              "type" => "`$STRING`",
              "short" => "Overall risk level assessment",
            },
            {
              "name" => "specificClauses",
              "title" => "Specific Clauses",
              "type" => "`$ARRAY`",
              "short" => "Specific clauses to include",
            },
            {
              "name" => "timestamp",
              "title" => "Timestamp",
              "type" => "`$STRING`",
              "format" => "date-time",
            },
          ],
          "name" => "contract_service",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/contract/draft",
                  "segments" => [
                    {
                      "lit" => "contract",
                    },
                    {
                      "lit" => "draft",
                    },
                  ],
                  "parts" => [
                    "contract",
                    "draft",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/contract/review",
                  "segments" => [
                    {
                      "lit" => "contract",
                    },
                    {
                      "lit" => "review",
                    },
                  ],
                  "parts" => [
                    "contract",
                    "review",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "legal_query" => {
          "fields" => [
            {
              "name" => "answer",
              "title" => "Answer",
              "type" => "`$STRING`",
              "short" => "AI-generated legal guidance",
            },
            {
              "name" => "category",
              "title" => "Category",
              "type" => "`$STRING`",
              "short" => "Category of legal question",
            },
            {
              "name" => "language",
              "title" => "Language",
              "type" => "`$STRING`",
              "short" => "Response language preference",
            },
            {
              "name" => "queryId",
              "title" => "Query Id",
              "type" => "`$STRING`",
              "short" => "Unique identifier for the query",
            },
            {
              "name" => "question",
              "title" => "Question",
              "type" => "`$STRING`",
              "op" => {
                "create" => {
                  "req" => true,
                  "type" => "`$STRING`",
                },
              },
              "short" => "The submitted question",
            },
            {
              "name" => "relevantLaws",
              "title" => "Relevant Laws",
              "type" => "`$ARRAY`",
              "short" => "List of relevant legal statutes",
            },
            {
              "name" => "timestamp",
              "title" => "Timestamp",
              "type" => "`$STRING`",
              "short" => "Timestamp of the response",
              "format" => "date-time",
            },
          ],
          "name" => "legal_query",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/query",
                  "segments" => [
                    {
                      "lit" => "query",
                    },
                  ],
                  "parts" => [
                    "query",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    TaiwanLegalAiFeatures.make_feature(name)
  end
end
