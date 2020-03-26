describe("User can login", () => {
  beforeEach(() => {
    cy.server()
    cy.visit("**/")
  })
  it("Sucessfully", () => {
    cy.route({
      method: "POST",
      url: "**/auth/sign_in",
      response: "fixture: visitor_login.json",
      headers: {
        uid: "user@mail.com"
      }
    })
    cy.get("#login").click()
    cy.get("#login-form").within(() => {
      cy.get("#email").type("user@mail.com")
      cy.get("#password").type("password")
      cy.get("#login-button").contains("Login").click()
    })
    cy.get("#message").should("contain", "Hi user@mail.com")
  })
  it("With invalid credentials", () => {
    cy.route({
      method: "POST",
      url: "**/auth/sign_in",
      status: "401",
      response: {
        errors: ["Username/password are incorrect"],
        success: false
      }
    })
    cy.get("#login").click()
    cy.get("#login-form").within(() => {
      cy.get("#email").type("user@mail.com")
      cy.get("#password").type("wrong")
      cy.get("#login-button").contains("Login").click()
    })
    cy.get("#message").should("contain", "Username/password are incorrect")
  })
})