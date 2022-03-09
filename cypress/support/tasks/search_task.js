export function searchContent(text){
  cy.get('#twotabsearchtextbox')
    .clear()
    .type(text)
    .should('have.value',text);
  cy.get("#nav-search-submit-button").click();    
}
