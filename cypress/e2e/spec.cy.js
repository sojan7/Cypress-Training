describe("template spec", () => {
  it("passes", () => {
    const baseUrl = Cypress.config("baseUrl");
    cy.visit(baseUrl);

    // Alternatively, you can also directly visit using the baseUrl without explicitly retrieving it
    // cy.visit('/');
  });
});
