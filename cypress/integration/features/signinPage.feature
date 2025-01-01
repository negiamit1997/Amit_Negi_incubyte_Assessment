Feature: Verify Signin feature

    Scenario: User logs in with valid credentials
        Given I am on the login page
        When I enter valid credentials and click login
        Then I should see the welcom text
        | Text |
        | Welcome |

    Scenario: User logs in with invalid credentials
        Given I am on the login page
        When I enter invalid credentials and click login
        Then I should see the login validation text
        | Text |
        | The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later. |

        