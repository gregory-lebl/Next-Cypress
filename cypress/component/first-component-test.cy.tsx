import Button from "../../components/Button";

describe("Test du composant Button", () => {
	it("Le composant se monte correctement", () => {
		cy.mount(<Button text="coucou" />);
	});
	it("Le composant se monte correctement et le texte est 'coucou la loutre'", () => {
		cy.mount(<Button text="coucou la loutre" />);
		cy.get("button").should("contains.text", "coucou la loutre");
	});
});
