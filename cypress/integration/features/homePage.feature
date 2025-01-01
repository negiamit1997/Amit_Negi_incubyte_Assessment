Feature: Verify Home Page 

    Scenario: User lands on the homepage and verifies the URL and page title
        Given I open website
        Then the url of the home page should be
        | Website URL |
        | https://magento.softwaretestingboard.com/ |
        And the title of the home page should be
        | Page Title |
        | Home Page |

    Scenario: User clicks on "Create an Account" and lands on the Create Account screen
        Given I open website
        When I click on the "Create an Account" button
        Then I should be redirected to the "Create New Customer Account" screen
        | Page Title |
        | Create New Customer Account |


    

    

