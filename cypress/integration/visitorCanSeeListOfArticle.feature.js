describe("Visitor can", () => {
 before(() => {
   cy.server();
   cy.route({ 
     method: "GET",
     url: "http://localhost:3000/api/articles",
     response: "fixture:articles_list_response.json"
    });
    cy.visit("http://localhost:3001");
    
 }) 
 it("see articles successfully",() => {
   cy.get("#article-list").should("contain", "Article Title")
   cy.get("#article-list").should("contain", "Thomas Got a New Car")
 })
})