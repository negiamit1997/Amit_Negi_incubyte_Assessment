import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import { Before, After} from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../pageObjects/HomePage"
import SigninPage from "../pageObjects/SigninPage"
import { generateRandomEmail } from "../utils/generateRandomEmail"
const homePage = new HomePage()
const signinPage = new SigninPage()

Before(() => {
    cy.fixture('testData').then(function(data){
        cy.wrap(data).as('data')
    })
});

Given('I am on the login page', () => {
    homePage.goToWebsite(Cypress.env('url'));
    homePage.clickOnSignin()
})

When('I enter valid credentials and click login', () => {
    cy.get('@data').then((data) => {
        signinPage.enterLoginCredentials(data.email, data.pass);
    })
    signinPage.clickSignin();
})

Then('I should see the welcom text', (dataTable) => {
    signinPage.getUserName().then((name) => {
        const spName = name.split(",");
        const welText = spName[0];
        expect(welText.trim()).to.equal(dataTable.rawTable[1][0]);
      })
})


When('I enter invalid credentials and click login', () => {
    cy.get('@data').then((data) => {
        signinPage.enterLoginCredentials(data.invalidEmail, data.invalidPass);
    })
    signinPage.clickSignin();
})


Then('I should see the login validation text', (dataTable) => {
    signinPage.SigninMessage().then((message) => {
        expect(message.trim()).to.equal(dataTable.rawTable[1][0]);
      })
})