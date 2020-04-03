describe("Weather div displays", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
        method: "GET",
        url: `https://api.openweathermap.org/data/2.5/weather**`,
        response: "fixture:weather.json"
      });
  });
  it("weather info", () => {
    cy.visit("/")
    cy.get("#main-header").within(() => {
      cy.get(".weather-main")
        .should("contain", "1.9")
        .and("contain", "Nordstaden");
    });
  });
});
