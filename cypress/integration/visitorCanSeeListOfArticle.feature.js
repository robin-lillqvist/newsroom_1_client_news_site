describe('Visitor can',() => {
 beforeEach(()=> {
   cy.server();
   cy.visit('/');
   cy.route({ 
     method: 'GET',
     url: 'http://localhost:3000/api/articles',
     response: 'fixture:articles_list_response.json'
    });
 }) 
 it('see articles successfully',() => {
   cy.get('#article-list').should('contain', 'Thomas Got a New Car')
 })
})