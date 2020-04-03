describe("Weather div displays", () => {
  beforeEach(() => {
    cy.server();
    cy.visit("/");
    cy.route({
        method: "GET",
        url: `https://api.openweathermap.org/data/2.5/weather**`,
        response: "fixture:weather.json"
      });
  });
  it("weather info", () => {
    cy.get("#main-header").within(() => {
      cy.get(".weather-main")
        .should("contain", 275)
        .and("contain", "Nordstaden");
    });
  });
});
