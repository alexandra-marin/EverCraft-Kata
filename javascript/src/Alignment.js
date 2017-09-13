const Alignments = ["Good", "Bad", "Neutral"];

var alignment = (function() {
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
		get: get,
		set: set
	};
});

export default alignment ;

console.log("234ggggsdfsdfsdfsdfsdfdfds");
// console.log(alignment().get());