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
                "slug" => "taiwan-legal-ai",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
          'transport' => 'base',
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
              'short' => 'Unique identifier for the analysis',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'applicableLaws',
              'short' => 'Laws applicable to this case',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'caseDetails',
              'req' => true,
              'short' => 'Detailed description of the case',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'caseType',
              'short' => 'Type of legal case',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'language',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'legalIssues',
              'short' => 'Identified legal issues',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'parties',
              'short' => 'Information about parties involved',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'precedents',
              'short' => 'Relevant legal precedents',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'recommendations',
              'short' => 'AI recommendations for case strategy',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'summary',
              'short' => 'Summary of the case analysis',
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
              'short' => 'List of contract clauses',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'complianceCheck',
              'short' => 'Compliance with Taiwan laws',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'content',
              'short' => 'The complete contract draft text',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'contractText',
              'req' => true,
              'short' => 'The complete contract text to be reviewed',
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
              'short' => 'Type of contract to draft',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'draftId',
              'short' => 'Unique identifier for the contract draft',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'focusAreas',
              'short' => 'Specific areas to focus the review on',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'issues',
              'short' => 'Identified issues and concerns',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'language',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'missingClauses',
              'short' => 'Important clauses that are missing',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'notes',
              'short' => 'Important notes and considerations',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'overallAssessment',
              'short' => 'Overall assessment of the contract',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'parties',
              'short' => 'Information about contracting parties',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'recommendations',
              'short' => 'Recommended changes and improvements',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'requirements',
              'req' => true,
              'short' => 'Specific requirements and terms for the contract',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'reviewId',
              'short' => 'Unique identifier for the review',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'riskLevel',
              'short' => 'Overall risk level assessment',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'specificClauses',
              'short' => 'Specific clauses to include',
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
              'short' => 'AI-generated legal guidance',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'category',
              'short' => 'Category of legal question',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'language',
              'short' => 'Response language preference',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'queryId',
              'short' => 'Unique identifier for the query',
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
              'short' => 'The submitted question',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'relevantLaws',
              'short' => 'List of relevant legal statutes',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'timestamp',
              'short' => 'Timestamp of the response',
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
