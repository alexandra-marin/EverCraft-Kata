export class Character {
	constructor() {
		this.name = "Wizard";
		this.hasAlignment = Alignments.good;
		this.hitPoints = 5;
		this.armor = 10;
	}

	get alignment() {
		return this.hasAlignment;
    }
    
	set alignment(value) {
        var alignmentExists = Alignments[value];
        
        if (alignmentExists) {
			this.hasAlignment = value;
		}
	}
}

export const Alignments = {
	good: "Good",
	bad: "Bad",
	neutral: "Neutral"
};
