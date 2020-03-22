describe("Visitor can", () => {
  before(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/articles",
      response: "fixture:articles_list_response.json"
    });
    cy.visit("http://localhost:3001");
  });
  it("see successfully", () => {
    cy.get('#article-category').click()
    cy.get('#category-culture').click()
    cy.get('#article-by-category-list').should('contain', 'Thomas Got a New Car');
    cy.get('#article-by-category-list').should('contain', 'He bought it to comfort himself');
  });
});
