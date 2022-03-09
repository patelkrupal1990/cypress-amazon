export function login(username,password){
  clickLinkById("link-to-login","Login");
  panelName('Login as Existing Customer')
  cy.get('#existing-customer').within(() => {
    if(username){
      cy.get('#spree_user_email')
      .focus()
      .clear()
      .type(username, { delay: 10 }).should('have.value',username);
    }
    if(password){
      cy.get('#spree_user_password')
      .clear()
      .type(password);
    }
  })
  clickButton("Login")
}

export function createNewUser(username,password,confirm_password){
  clickLinkById("link-to-login","Login");
  clickLink("Create a new account");
  panelName('New Customer')
  cy.get('#new-customer').within(() => {
    if(username){
      cy.get('#spree_user_email')
      .focus()
      .clear()
      .type(username, { delay: 10 }).should('have.value',username);
    }
    if(password){
      cy.get('#spree_user_password')
      .clear()
      .type(password);
    }
    if(confirm_password){
      cy.get('#spree_user_password_confirmation')
      .clear()
      .type(confirm_password);
    }
  })
  clickButton("Create")
}

export function clickLinkById(id,name){
  cy.get(`#${id}`).find("a").contains(name)
    .click();
}

export function clickLink(name){
  cy.get("a").contains(name)
    .click({force: true});
}

export function clickButton(name){
  cy.get("body").then($body => {
    if($body.find(`input[value='${name}']`).length > 0) {   
      cy.get(`input[value='${name}']`)
      .click();
    }
    else{
      cy.get('button').contains(name)
        .click();
    }
  });
}

export function shouldSeeAlert(message){
  cy.get(".alert").contains(message);
}

export function panelName(name){
  cy.get('.panel-title')
    .contains(name)
    .should("be.visible");
}

export function clickItemByIndex(index){
 // Incerement the index by 1 as first index is of RESULT text in list. Items gets appear from 2nd index.
  //cel_widget_id="MAIN-SEARCH_RESULTS-4"
  const MAIN_SEARCH_RESULTS = index + 1;
  const cel_widget_id = `MAIN-SEARCH_RESULTS-${MAIN_SEARCH_RESULTS}`;
  cy.get(`div[cel_widget_id="${cel_widget_id}"]`).find("h2>a").invoke('removeAttr', 'target')
  .click();
}

export function addToCart(){
  cy.get("#add-to-cart-button").click();
  cy.get("#attach-warranty").within(() => {
    cy.get("#attachSiNoCoverage").find("input").click();
  });
  cy.contains("Added to Cart");
}

export function deleteItem(){
  cy.get("input[value='Delete']").click();
  cy.contains("removed from Shopping Cart.");
}