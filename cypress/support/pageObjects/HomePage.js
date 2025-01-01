class HomePage
{

    elements= {
        pageTitle: ".page-title",
        logo: ".logo"
    }

goToWebsite(url){
    cy.visit(url)
}

getPageTitle() {
    return cy.get(this.elements.pageTitle).invoke('text')
}

clickOnLogo(){
    cy.get(this.elements.logo).click();
}

clickOnCreateAccount(){
    cy.contains('Create an Account').click();
}

clickOnCreateAccount(){
    cy.contains('Create an Account').click();
}

clickOnSignin(){
    cy.contains('Sign In').click();
}  

}
export default HomePage;