const Alignments = ["Good", "Bad", "Neutral"];

const Alignment = () => {
	let alignment = Alignments[0];

	let get = () => alignment;

	let set = (value) => {
		var alignmentExists = Alignments.includes(value);

		if (alignmentExists) {
			alignment = value;
		}
	};

	return {
		get,
		set
	};
};

export default Alignment;
