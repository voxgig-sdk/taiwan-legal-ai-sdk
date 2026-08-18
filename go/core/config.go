package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "TaiwanLegalAi",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
			},
		},
		"options": map[string]any{
			"base": "https://twlawbot.com/api",
			"auth": map[string]any{
				"prefix": "",
			},
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"case_analysi": map[string]any{},
				"contract_service": map[string]any{},
				"legal_query": map[string]any{},
			},
		},
		"entity": map[string]any{
			"case_analysi": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "analysisId",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "applicableLaws",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "caseDetails",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "caseType",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "language",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "legalIssues",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "parties",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "precedents",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "recommendations",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "summary",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "timestamp",
						"type": "`$STRING`",
					},
				},
				"name": "case_analysi",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/case-analysis",
								"parts": []any{
									"case-analysis",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"contract_service": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "clauses",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "complianceCheck",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "content",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "contractText",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "contractType",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "draftId",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "focusAreas",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "issues",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "language",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "missingClauses",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "notes",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "overallAssessment",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "parties",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "recommendations",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "requirements",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "reviewId",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "riskLevel",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "specificClauses",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "timestamp",
						"type": "`$STRING`",
					},
				},
				"name": "contract_service",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/contract/draft",
								"parts": []any{
									"contract",
									"draft",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/contract/review",
								"parts": []any{
									"contract",
									"review",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"legal_query": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "answer",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "category",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "language",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "queryId",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "question",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "relevantLaws",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "timestamp",
						"type": "`$STRING`",
					},
				},
				"name": "legal_query",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/query",
								"parts": []any{
									"query",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
