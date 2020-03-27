describe("User can login", () => {
  beforeEach(() => {
    cy.server()
    cy.visit("**/")
  })
  it("Sucessfully", () => {
    cy.route({
      method: "POST",
      url: "**/auth/sign_in",
      response: "fixture:login.json",
      headers: {
        uid: "user@mail.com"
      },
      success: true
    })
    cy.get("#main-header").within(() => {
      cy.get("#login").click();
    });
    cy.get("#login-form").within(() => {
      cy.get("#email").type("user@mail.com")
      cy.get("#password").type("password")
      cy.get("#login-button").contains("Login").click()
    })
    cy.get("#message").should("contain", "Wassup user@mail.com")
  })
  it("With invalid credentials", () => {
    cy.route({
      method: "POST",
      url: "**/auth/sign_in",
      status: "401",
      response: {
        errors: ["Invalid login credentials. Please try again."],
        success: false
      }
    })
    cy.get("#login").click()
    cy.get("#login-form").within(() => {
      cy.get("#email").type("user@mail.com")
      cy.get("#password").type("wrong")
      cy.get("#login-button").contains("Login").click()
    })
    cy.get("#message").should("contain", "Invalid login credentials. Please try again.")
  })
})