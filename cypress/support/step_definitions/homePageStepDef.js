import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import { Before, After} from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../pageObjects/HomePage"
import SignupPage from "../pageObjects/SignupPage"
const homePage = new HomePage()
const signupPage = new SignupPage()

// Before(() => {
//     cy.visit(Cypress.env('url'));
//     cy.fixture('example').then(function(data){
//         this.data=data
//     })

//   });


Given('I open website', () => {
    homePage.goToWebsite(Cypress.env('url'));
})

Then('the url of the home page should be', (dataTable) => {
    expect(Cypress.env('url')).equal(dataTable.rawTable[1][0]);
})

Then('the title of the home page should be', (dataTable) => {
    homePage.getPageTitle().then((pageTitle) => {
        expect(pageTitle.trim()).to.equal(dataTable.rawTable[1][0]);
      });
})


Given('I am on the homepage of the e-commerce website', () => {
    homePage.clickOnLogo();
})

When('I click on the "Create an Account" button', () => {
    homePage.clickOnCreateAccount();
})

Then('I should be redirected to the "Create New Customer Account" screen', (dataTable) => {
    signupPage.getPageTitle().then((pageTitle) => {
        expect(pageTitle.trim()).to.equal(dataTable.rawTable[1][0]);
      });
})