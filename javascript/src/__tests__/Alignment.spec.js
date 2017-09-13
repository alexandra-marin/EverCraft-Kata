import { should } from "should";
import { Alignment } from "../Alignment";

describe("Character should", () => {
	let alignment;

	beforeEach(() => {
		alignment = new Alignment();
	});

	it("not have alignment different than Good, Bad, Neutral", () => {
		alignment.alignment = "Good";
		alignment.set("Unknown");
		alignment.alignment.should.equal("Good");
    });
    
    it("change alignment from Good to Neutral", () => {
		alignment.alignment = "Good";
		alignment.set("Neutral");
		alignment.alignment.should.equal("Neutral");
	});
});
