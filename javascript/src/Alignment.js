const Alignments = ["Good", "Bad", "Neutral"];

export class Alignment {
	constructor() {
        this.alignment = "Good";
	}

	get = () => this.alignment;

	set = value => {
		var alignmentExists = Alignments.includes(value);

		if (alignmentExists) {
			this.alignment = value;
		}
	};
}