import { should } from "should";
import { Character, Alignments } from "./src/Character";

describe("Character should", function() {
    let character;

    beforeEach(() => {
		character = new Character();
    })

	it("have a name", function() {
		character.should.have.property("name");
    });

    it("have an alignment", function() {
		character.should.have.property("alignment");
    });

    it("not have alignment different than Good, Bad, Neutral", function() {
        character.alignment = Alignments.good;
        character.alignment = 'Unknown';
		character.alignment.should.equal(Alignments.good);
    });

    it("have 5 HP", function() {
		character.should.have.property("hitPoints");
		character.hitPoints.should.be.exactly(5);
    });

    it("have 10 armor", function() {
		character.should.have.property("armor");
		character.armor.should.be.exactly(10);
    });
});