class SignupPage
{

    elements= {
        pageTitle: ".page-title",
        logo: ".logo",
        firstName: "#firstname",
        lastName: "#lastname",
        email: "#email_address",
        password: "#password",
        confirmPassword: "#password-confirmation",
        btnCreateAccount: "button[title='Create an Account']",
        requiredFieldValidationMessage: "#firstname-error",
        signupMessage: "div[data-bind='html: $parent.prepareMessageForHtml(message.text)']"
    }


getPageTitle() {
    return cy.get(this.elements.pageTitle).invoke('text')
}

formFieldsDisplayed(){
    cy.get(this.elements.firstName).should("be.visible")
    cy.get(this.elements.lastName).should("be.visible")
    cy.get(this.elements.email).should("be.visible")
    cy.get(this.elements.password).should("be.visible")
    cy.get(this.elements.confirmPassword).should("be.visible")
    cy.get(this.elements.btnCreateAccount).should("be.visible")
}

clickOnCreateAccount(){
    cy.get(this.elements.btnCreateAccount).click();
}

getRequiredFieldValidationMessage(){
    return cy.get(this.elements.requiredFieldValidationMessage).invoke('text')
}

enterSignupDetails(firstName, lastName, email, password, confirmPassword){
    cy.get(this.elements.firstName).type(firstName);
    cy.get(this.elements.lastName).type(lastName);
    cy.get(this.elements.email).type(email);
    cy.get(this.elements.password).type(password);
    cy.get(this.elements.confirmPassword).type(confirmPassword);
}

SignupMessage(){
    return cy.get(this.elements.signupMessage).invoke('text')
}


}
export default SignupPage;