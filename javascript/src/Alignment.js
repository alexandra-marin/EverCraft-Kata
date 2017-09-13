const Alignments = ["Good", "Bad", "Neutral"];

var alignment = () => {
	alignment = "Good";

	function get() {
		return alignment;
	}

	function set(value) {
		var alignmentExists = Alignments.includes(value);

		if (alignmentExists) {
			alignment = value;
		}
	}

	return {
		get,
		set
	};
};

export default alignment;
