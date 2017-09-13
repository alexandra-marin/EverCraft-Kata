import { should } from "should";
import { Character } from "../../Character";

describe("Character should", () => {
	let character;

	beforeEach(() => {
        character = new Character();
	});

	it("have a name", () => {
		character.should.have.property("name");
	});

	it("have an alignment", () => {
		character.should.have.property("alignment");
        character.alignment.get().should.be.exactly("Good");
	});

	it("have 5 HP", () => {
		character.should.have.property("hitPoints");
        character.hitPoints.should.be.exactly(5);
	});

	it("have 10 armor", () => {
		character.should.have.property("armor");
		character.armor.should.be.exactly(10);
	});
});
