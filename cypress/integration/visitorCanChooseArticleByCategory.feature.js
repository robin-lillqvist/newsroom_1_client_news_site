describe("Visitor can choose article by category", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/articles",
      response: "fixture:articles_list_response.json"
    });
    cy.visit("http://localhost:3001");
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/articles/**",
      response: "fixture:article_details_response.json"
    });
  });
  it("successfully", () => {
    cy.get("#article-category").click();
    cy.get("#culture").click();
    cy.get("#article-list")
      .should("contain", "Thomas Got a New Car")
      .should("not.contain", "Coronavirus in Sweden")
      .should("not.contain", "Article Title");
    cy.get("#article-list").within(() => {
      cy.get("#open-article-3").click();
    });
    cy.get("#single-article").should("contain", "Thomas Got a New Car");
    cy.get("#single-article").should(
      "contain",
      "He bought it to comfort himself"
    );
    cy.get("#single-article").should(
      "contain",
      "And now he wants a third car, that he found on Blocket."
    );
  });
});
