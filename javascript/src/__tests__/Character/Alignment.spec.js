import { should } from "should";
import { Character } from "../../Character";

describe("Character should", () => {
	let character;

	beforeEach(() => {
		character = new Character();
	});

	it("not have alignment different than Good, Bad, Neutral", () => {
		character.alignment = "Good";
		character.alignment = "Unknown";
		character.alignment.should.equal("Good");
    });
    
    it("change alignment to Good, Bad, Neutral", () => {
		character.hasAlignment = "Good";
		character.alignment = "Neutral";
		character.hasAlignment.should.equal("Neutral");
	});
});
