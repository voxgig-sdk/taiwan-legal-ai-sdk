<?php
declare(strict_types=1);

// TaiwanLegalAi SDK configuration

class TaiwanLegalAiConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "TaiwanLegalAi",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://twlawbot.com/api",
                "auth" => [
                    "prefix" => "",
                ],
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "case_analysi" => [],
                    "contract_service" => [],
                    "legal_query" => [],
                ],
            ],
            "entity" => [
        'case_analysi' => [
          'fields' => [
            [
              'name' => 'analysisId',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'applicableLaws',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'caseDetails',
              'req' => true,
              'type' => '`$STRING`',
            ],
            [
              'name' => 'caseType',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'language',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'legalIssues',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'parties',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'precedents',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'recommendations',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'summary',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'timestamp',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'case_analysi',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/case-analysis',
                  'parts' => [
                    'case-analysis',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'contract_service' => [
          'fields' => [
            [
              'name' => 'clauses',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'complianceCheck',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'content',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'contractText',
              'req' => true,
              'type' => '`$STRING`',
            ],
            [
              'name' => 'contractType',
              'op' => [
                'create' => [
                  'req' => true,
                  'type' => '`$STRING`',
                ],
              ],
              'type' => '`$STRING`',
            ],
            [
              'name' => 'draftId',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'focusAreas',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'issues',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'language',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'missingClauses',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'notes',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'overallAssessment',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'parties',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'recommendations',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'requirements',
              'req' => true,
              'type' => '`$STRING`',
            ],
            [
              'name' => 'reviewId',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'riskLevel',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'specificClauses',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'timestamp',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'contract_service',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/contract/draft',
                  'parts' => [
                    'contract',
                    'draft',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/contract/review',
                  'parts' => [
                    'contract',
                    'review',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'legal_query' => [
          'fields' => [
            [
              'name' => 'answer',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'category',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'language',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'queryId',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'question',
              'op' => [
                'create' => [
                  'req' => true,
                  'type' => '`$STRING`',
                ],
              ],
              'type' => '`$STRING`',
            ],
            [
              'name' => 'relevantLaws',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'timestamp',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'legal_query',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/query',
                  'parts' => [
                    'query',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return TaiwanLegalAiFeatures::make_feature($name);
    }
}
