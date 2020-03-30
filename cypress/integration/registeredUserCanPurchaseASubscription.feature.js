describe("registered user can purchase a subscription", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "**/articles",
      response: "fixture:articles_list_response.json"
    });
    cy.route({
      method: "GET",
      url: "**/articles",
      response: "fixture:articles_list_response.json"
    });
    cy.route({
      method: "GET",
      url: "**/articles/2",
      response: "fixture:specific_article_2.json"
    });
    cy.route({
        method: 'POST', 
        url: "**/subscriptions",
        response: {status: 'paid' }
    })
    cy.visit("/");
    cy.get("#open-article-2").click();
  });

  it("by clicking buy subscription", () => {
    cy.get("button")
      .contains("Buy Subscription")
      .click();
    // cy.get('button').contains('Make Payment').click()
    cy.wait(1000);
    cy.get("form[id='payment-form']").should("be.visible");
    cy.get('iframe[name^="__privateStripeFrame5"]').then($iframe => {
      const $body = $iframe.contents().find("body");
      cy.wrap($body)
        .find('input[name="cardnumber"]')
        .type("4242424242424242", { delay: 10 });
    });
    cy.get('iframe[name^="__privateStripeFrame6"]').then($iframe => {
      const $body = $iframe.contents().find("body");
      cy.wrap($body)
        .find('input[name="exp-date"]')
        .type("0425", { delay: 10 });
    });
    cy.get('iframe[name^="__privateStripeFrame7"]').then($iframe => {
      const $body = $iframe.contents().find("body");
      cy.wrap($body)
        .find('input[name="cvc"]')
        .type("575", { delay: 10 });
    });
    cy.get("button")
      .contains("Submit Payment")
      .click();
    // cy.get("button").contains("Back to article").click();
  });
});
