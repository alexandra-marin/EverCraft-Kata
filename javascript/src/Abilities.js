import { withValue } from "./Utils";

const PossibleAbilities = [
	"Strength",
	"Dexterity",
	"Constitution",
	"Wisdom",
	"Intelligence",
	"Charisma"
];

const DefaultAbilityValue = 10;

const Abilities = () => {
	var abilities = {};

	PossibleAbilities.forEach(prop => {
		Object.defineProperty(abilities, prop, withValue(DefaultAbilityValue));
	});

	let get = () => abilities;
	let getAllNames = () => Object.keys(abilities);
	let getValueFor = ability => abilities[ability];

	return {
		get,
		getAllNames,
		getValueFor
	};
};

export default Abilities;