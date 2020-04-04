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
      method: "POST",
      url: "**/subscriptions",
      response: { status: "paid" }
    });
    cy.route({
      method: "POST",
      url: "**/**",
      response: "fixture:login.json"
    });
    cy.route({
      method: "GET",
      url: "**/auth/**",
      response: "fixture:login.json"
    });
    cy.visit("/");
  });

  it("by clicking buy subscription", () => {
    cy.get("#main-header").within(() => {
      cy.get("#login").click();
    });
    cy.get("#login-form").within(() => {
      cy.get("#email").type("user@mail.com");
      cy.get("#password").type("password");
      cy.get("#login-button")
        .contains("Login")
        .click();
    });
    cy.get("#close-button").click();
    cy.get("#open-article-2").click();
    cy.get("button")
      .contains("Buy Subscription")
      .click();
    cy.wait(1000);
    cy.get("form[id='payment-form']").should("be.visible");
    cy.typeInStripeElement("cardnumber", "4242424242424242");
    cy.typeInStripeElement("exp-date", "0425");
    cy.typeInStripeElement("cvc", "575");
    cy.get("button")
      .contains("Submit Payment")
      .click();
    cy.get("#subscription-message").should(
      "contain",
      "You are now a Premium Platinum member!"
    );
  });
});
