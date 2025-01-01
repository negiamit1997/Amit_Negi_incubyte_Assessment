import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import { Before, After} from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../pageObjects/HomePage"
import SignupPage from "../pageObjects/SignupPage"
import { generateRandomEmail } from "../utils/generateRandomEmail"
const homePage = new HomePage()
const signupPage = new SignupPage()


Before(() => {
    cy.fixture('testData').then(function(data){
        cy.wrap(data).as('data')
    })

  });


Given('I am on the "Create New Customer Account" page', () => {
    homePage.goToWebsite(Cypress.env('url'));
    homePage.clickOnCreateAccount();
})


Then('I should see the form fields', () => {
    signupPage.formFieldsDisplayed()
})


When('I leave a required field empty and try to sign up', () => {
    signupPage.clickOnCreateAccount();
})


Then('I should see the required field validation message', (dataTable) => {
    signupPage.getRequiredFieldValidationMessage().then((pageTitle) => {
        expect(pageTitle.trim()).to.equal(dataTable.rawTable[1][0]);
      })
})


When('I fill in the first name, last name, email, password, and confirm password fields', () => {
    cy.get('@data').then((data) => {
        signupPage.enterSignupDetails(data.firstName, data.lastName, generateRandomEmail(), data.pass, data.pass);
    })
})

When('I click the "Create Account" button', () => {
    signupPage.clickOnCreateAccount();
})

Then('I should see a signup success message', (dataTable) => {
    signupPage.SignupMessage().then((message) => {
        expect(message.trim()).to.equal(dataTable.rawTable[1][0]);
      })
})


When('I fill in the existing user details', () => {
    cy.get('@data').then((data) => {
        signupPage.enterSignupDetails(data.firstName, data.lastName, data.email, data.pass, data.pass);
    })
})

Then('I should see account already exist message', (dataTable) => {
    signupPage.SignupMessage().then((message) => {
        expect(message.trim()).to.equal(dataTable.rawTable[1][0]);
      })
})