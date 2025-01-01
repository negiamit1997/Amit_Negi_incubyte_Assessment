class SigninPage
{

    elements= {
        pageTitle: ".page-title",
        email: "#email",
        password: "#pass",
        signinBtn: "#send2",
        userName: "div[class='panel header'] span[class='logged-in']",
        signinMessage: "div[data-bind='html: $parent.prepareMessageForHtml(message.text)']"
    }


getPageTitle() {
    return cy.get(this.elements.pageTitle).invoke('text')
}

enterLoginCredentials(email, password){
    cy.get(this.elements.email).type(email);
    cy.get(this.elements.password).type(password);
}


clickSignin(){
    cy.get(this.elements.signinBtn).click();
}

getUserName(){
    return cy.get(this.elements.userName).invoke('text')
}

SigninMessage(){
    return cy.get(this.elements.signinMessage).invoke('text')
}

}
export default SigninPage;