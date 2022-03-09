export function verifyEmptyBasket(){
  cy.contains("Your Amazon Basket is empty");
}

export function verifyCartTotal(item){
// This would won't work markFeatureRenderForImageBlock is not defined by amazon
cy.get("#nav-cart-count").should("have.text", `${item}`);
}

export function verifyCartItemByName(name){
cy.get("div[data-name='Active Cart']").within(() =>{
    cy.get("span").should("contain", `${name}`)
});
}

export function getItemValue(index){
 // Incerement the index by 1 as first index is of RESULT text in list. Items gets appear from 2nd index.
  //cel_widget_id="MAIN-SEARCH_RESULTS-4"
  const MAIN_SEARCH_RESULTS = index + 1;
  const cel_widget_id = `MAIN-SEARCH_RESULTS-${MAIN_SEARCH_RESULTS}`;
  cy.get(`div[cel_widget_id="${cel_widget_id}"]`).find("h2>a>span").then((value) =>{
     const item = value[0].textContent;
     cy.log(item);
     return item;
  })
}