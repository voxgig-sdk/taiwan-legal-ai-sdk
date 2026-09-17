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
			"slug": "taiwan-legal-ai",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
		},
		"options": map[string]any{
			"base": "https://twlawbot.com/api",
			"auth": map[string]any{
				"prefix": "",
				"name": "X-API-Key",
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
						"short": "Unique identifier for the analysis",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "applicableLaws",
						"short": "Laws applicable to this case",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "caseDetails",
						"req": true,
						"short": "Detailed description of the case",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "caseType",
						"short": "Type of legal case",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "language",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "legalIssues",
						"short": "Identified legal issues",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "parties",
						"short": "Information about parties involved",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "precedents",
						"short": "Relevant legal precedents",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "recommendations",
						"short": "AI recommendations for case strategy",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "summary",
						"short": "Summary of the case analysis",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
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
								"segments": []any{
									map[string]any{
										"lit": "case-analysis",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"case-analysis",
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
						"short": "List of contract clauses",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "complianceCheck",
						"short": "Compliance with Taiwan laws",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "content",
						"short": "The complete contract draft text",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "contractText",
						"req": true,
						"short": "The complete contract text to be reviewed",
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
						"short": "Type of contract to draft",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "draftId",
						"short": "Unique identifier for the contract draft",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "focusAreas",
						"short": "Specific areas to focus the review on",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "issues",
						"short": "Identified issues and concerns",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "language",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "missingClauses",
						"short": "Important clauses that are missing",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "notes",
						"short": "Important notes and considerations",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "overallAssessment",
						"short": "Overall assessment of the contract",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "parties",
						"short": "Information about contracting parties",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "recommendations",
						"short": "Recommended changes and improvements",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "requirements",
						"req": true,
						"short": "Specific requirements and terms for the contract",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "reviewId",
						"short": "Unique identifier for the review",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "riskLevel",
						"short": "Overall risk level assessment",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "specificClauses",
						"short": "Specific clauses to include",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"format": "date-time",
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
								"segments": []any{
									map[string]any{
										"lit": "contract",
									},
									map[string]any{
										"lit": "draft",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"contract",
									"draft",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/contract/review",
								"segments": []any{
									map[string]any{
										"lit": "contract",
									},
									map[string]any{
										"lit": "review",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"contract",
									"review",
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
						"short": "AI-generated legal guidance",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "category",
						"short": "Category of legal question",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "language",
						"short": "Response language preference",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "queryId",
						"short": "Unique identifier for the query",
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
						"short": "The submitted question",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "relevantLaws",
						"short": "List of relevant legal statutes",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"format": "date-time",
						"name": "timestamp",
						"short": "Timestamp of the response",
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
								"segments": []any{
									map[string]any{
										"lit": "query",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"query",
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

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
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
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
