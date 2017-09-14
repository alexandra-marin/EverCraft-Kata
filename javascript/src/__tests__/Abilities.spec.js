import { should } from "should";
import * as Abilities from "../Abilities";
import Modifier from "../Modifier";

describe("Abilities should", () => {
	let abilities;

	beforeEach(() => {
		abilities = Abilities.default();
	});

	it("be one of Strength, Dexterity, Constitution, Wisdom, Intelligence, Charisma", () => {
		abilities
			.getAllNames()
			.should.containDeep([
				"Strength",
				"Dexterity",
				"Constitution",
				"Wisdom",
				"Intelligence",
				"Charisma"
			]);
	});

	it("default to value 10", () => {
		abilities.get().should.containDeep({
			Strength: 10,
			Dexterity: 10,
			Constitution: 10,
			Wisdom: 10,
			Intelligence: 10,
			Charisma: 10
		});
	});

	it("be paired with a modifier", () => {
        let score = abilities.getValueFor("Charisma")
        let modifier = new Modifier();

        modifier.for(score).should.be.exactly(0);
	});
});
