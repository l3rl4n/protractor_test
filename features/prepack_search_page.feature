@mocked
Feature: Creating tests for new Prepack UI

    Scenario:  Given I use that new Prepack UI
        Given I go to "https://amatravel.test-wip.tstllc.net/prepack#/landing"
  #    Given I goto 'amatravel.stack211.automation.tstllc.net/prepack#/landing'
        And I search via the new prepack ui: from: Buffalo; to: Antigua
#        And I choose the first prepack option
#        And I choose the first prepack room
#        And I choose the first prepack flight
#        Then I validate package contents on the Traveler Profile page
#        And I input passenger info for 'adult_1 and adult_2'
#        Then I validate the trip contents on the Review and Purchase pages
#        When I complete payment information and book my trip
#        Then I confirm the prepackaged trip was successfully booked
