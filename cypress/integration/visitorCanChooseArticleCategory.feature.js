describe("Visitor can", () => {
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
  it("see successfully", () => {
    cy.get('#article-category').click()
    cy.get('#culture').click()
    cy.get('#article-by-category-list').should('contain', 'Thomas Got a New Car');
    cy.get('#article-by-category-list').should('contain', 'He bought it to comfort himself');
    cy.get("#article-by-category-list").within(() => {
      cy.get("#open-article-category-3").click();
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
