describe("First Test", () => {
	it("Visite la page Wikipedia sur les loutres", () => {
		cy.visit("https://fr.wikipedia.org/wiki/Loutre");

		cy.url().should("include", "Loutre");
	});
});
