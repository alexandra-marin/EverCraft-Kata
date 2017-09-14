const Alignments = ["Good", "Bad", "Neutral"];

const Alignment = () => {
	let alignment = Alignments[0];

	const get = () => alignment;

	const set = value => {
		const alignmentExists = Alignments.includes(value);

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
