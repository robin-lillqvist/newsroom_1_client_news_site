describe("User can login", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "**/articles",
      response: "fixture:articles_list_response.json"
    });
    cy.route({
      method: "POST",
      url: "**/**",
      response: "fixture:login.json"
    });
    cy.route({
      method: "GET",
      url: "**/auth/**",
      response: "fixture:login.json"
    });
    cy.visit("http://localhost:3001");
  });

  it("Sucessfully", () => {
    cy.get("#main-header").within(() => {
      cy.get("#login").click();
    });
    cy.get("#login-form").within(() => {
      cy.get("#email").type("user@mail.com");
      cy.get("#password").type("password");
      cy.get("#login-button")
        .contains("Login")
        .click();
    });
    cy.get("#message").should("contain", "Welcome user@mail.com");
  });
});

describe("User can login", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "**/articles",
      response: "fixture:articles_list_response.json"
    });
    cy.route({
      method: "POST",
      url: "**/auth/sign_in",
      status: "401",
      response: {
        errors: ["Invalid login credentials. Please try again."],
        success: false
      }
    });
    cy.visit("http://localhost:3001");
  });

  it("With invalid credentials", () => {
    cy.get("#login").click();
    cy.get("#login-form").within(() => {
      cy.get("#email").type("user@mail.com");
      cy.get("#password").type("wrong");
      cy.get("#login-button")
        .contains("Login")
        .click();
    });
    cy.get("#message").should(
      "contain",
      "Invalid login credentials. Please try again."
    );
  });
});
