@mocked
Feature: Creating tests for new Prepack UI

    Scenario:  Given I use that new Prepack UI
        Given I go to "https://amatravel.test-wip.tstllc.net/prepack#/landing"
        And I search via the new prepack ui: from: Buffalo; to: Antigua
