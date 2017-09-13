import { should } from "should";
import * as Alignment from "../Alignment";

describe("Character should", () => {
	let alignment;

	beforeEach(() => {
		alignment = Alignment.default();
	});

	it("not have alignment different than Good, Bad, Neutral", () => {
		alignment.set("Unknown");
        alignment.get().should.equal("Good");
    });
    
    it("change alignment from Good to Neutral", () => {
		alignment.set("Neutral");
		alignment.get().should.equal("Neutral");
	});
});
