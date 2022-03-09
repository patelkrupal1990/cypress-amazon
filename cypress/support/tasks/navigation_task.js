export function goToProduct(product){
  cy.get(`span[title='${product}']`)
  .click();
}

export function goToCart(){
  cy.get("#nav-cart").click();
}
