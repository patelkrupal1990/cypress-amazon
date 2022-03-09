import * as item from "../../support/tasks/amazon_task";
import * as nav from "../../support/tasks/navigation_task";
import * as amazonQue from "../../support/questions/amazon_questions";
import * as search from "../../support/tasks/search_task";

describe("Amazon Validate Cart", () => {
  it("Amazon validate cart values", () => {
    
    nav.goToCart();
    amazonQue.verifyEmptyBasket();
    cy.fixture('cart').then((cartD) => {
        search.searchContent(cartD.item);
    });
    item.clickItemByIndex(3);
    item.addToCart();
    amazonQue.verifyCartTotal(1);
    item.clickLink("Go to Cart");
    cy.log("**Assert the item added to cart is same or not**");
    amazonQue.verifyCartItemByName("boAt Rockerz 400 Wireless Bluetooth On Ear Headphones with Mic (Black/Blue)");
    item.deleteItem();

    cy.log("**Assert the item after deleting from cart**");
    amazonQue.verifyCartTotal(0);
  });
});