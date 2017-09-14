import { should } from "should";
import Modifier from "../Modifier";

describe("Modifier should", () => {
	let scoreModifier;
	let scoreList;
	let modifierList;

	beforeAll(() => {
		scoreList = (function* scoreGenerator() {
			let idx = 1;
			while (idx < 21) {
				yield idx++;
			}
		})();

		modifierList = (function* modifierGenerator() {
			let mod = -5;
			let skip = true;
			while (mod < 6) {
				yield skip ? mod++ : mod;
				skip = !skip;
			}
		})();
	});

	beforeEach(() => {
		scoreModifier = new Modifier();
	});

	it("depend on score", () => {
		var score = scoreList.next();
		var modifier = modifierList.next();

		while (!score.done) {
			scoreModifier.for(score.value).should.be.exactly(modifier.value);

			score = scoreList.next();
			modifier = modifierList.next();
		}
	});
});
