describe ('registered user can purchase a subscription', () => {
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
        cy.visit("/");
        cy.get("#open-article-2").click();
    });

    it('by clicking buy subscription', () => {
        cy.get('button').contains('Buy Subscription').click()
        cy.get('button').contains('Make Payment').click()
        cy.get("form[id='subscription-form']").should('be.visible')
    })
})