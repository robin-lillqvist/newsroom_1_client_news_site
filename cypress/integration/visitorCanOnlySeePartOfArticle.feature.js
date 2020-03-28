describe("Free Article view:", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "**/articles",
      response: "fixture:articles_list_response.json"
    });
    cy.route({
      method: "GET",
      url: "**/articles/3",
      response: "fixture:specific_article_3.json"
    });
    cy.route({
      method: "GET",
      url: "**/articles/2",
      response: "fixture:specific_article_2.json"
    });
    cy.visit("/");
  });

  it("User who is not looged in will be able to read free articles", () => {
    cy.get("#open-article-3").click();
    cy.get("#article-3").within(() => {
      cy.get("#article-title").should("contain", "Thomas Got a New Car");
      cy.get("#article-lead").should("contain", "He bought it to comfort himself");
      cy.get("#article-content").should("contain", "And now he wants a third car, that he found on Blocket.");
    });
    cy.get("#article-3")
      .should("not.contain", "...")
      .and("not.contain", "This article requires a premium membership.");
  });

  it("User who is not logged in will not be able to read premium articles", () => {
    cy.get("#open-article-2").click();
    cy.get("#article-2").within(() => {
      cy.get("#article-title").should("contain", "Coronavirus in Sweden");
      cy.get("#article-lead").should("contain", "We are all in quarentine");
      cy.get("#article-content").should("contain", "And now he wants a third car, that he found on Blocket.");
      cy.get("#article-content").should("contain", "...")
      cy.get("#premium_message").and("contain", "This article requires a premium membership.");
    });
   
  });
});
