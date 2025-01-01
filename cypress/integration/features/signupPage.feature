Feature: Verify Signup feature

    Scenario: User is able to see the signup form fields
        Given I am on the "Create New Customer Account" page
        Then I should see the form fields
        
    Scenario: Required field validation on empty input
        Given I am on the "Create New Customer Account" page
        When I leave a required field empty and try to sign up
        Then I should see the required field validation message
        | Validation Message |
        | This is a required field. |

    Scenario: User is able to create an account
        Given I am on the "Create New Customer Account" page
        When I fill in the first name, last name, email, password, and confirm password fields
        And I click the "Create Account" button
        Then I should see a signup success message
        | Success Message |
        | Thank you for registering with Main Website Store. |

    Scenario: User is unable to create duplicate account
        Given I am on the "Create New Customer Account" page
        When I fill in the existing user details
        And I click the "Create Account" button
        Then I should see account already exist message
        | Validation Message |
        | There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account. |