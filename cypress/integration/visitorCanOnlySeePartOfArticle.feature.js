describe("Aricle view:", () => {
  beforeEach(() => {
    cy.server();
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
      method: "GET",
      url: "**/articles/1",
      response: "fixture:specific_article_1.json"
    });
    cy.visit("/");
  });

  it("Not logged will be able to read free articles but not premium articles", () => {
    cy.get("#article-2")
      .last()
      .within(() => {
        cy.get("button")
          .contains("Read More")
          .click();
      });
    cy.get(".article")
      .within(() => {
        cy.get(".spec-title").should("contain", "Free Article");
      })
    cy.get(".article")
      .should("not.contain", "...")
      .and("not.contain", 'This article require a premium membership.')

  })
})