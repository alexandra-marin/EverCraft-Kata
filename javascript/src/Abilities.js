import { withValue } from './Utils';

const PossibleAbilities = [
  'Strength',
  'Dexterity',
  'Constitution',
  'Wisdom',
  'Intelligence',
  'Charisma',
];

const DefaultAbilityValue = 10;

const Abilities = () => {
  const abilities = {};

  PossibleAbilities.forEach((prop) => {
    Object.defineProperty(abilities, prop, withValue(DefaultAbilityValue));
  });

  const get = () => abilities;
  const getAllNames = () => Object.keys(abilities);
  const getValueFor = ability => abilities[ability];

  return {
    get,
    getAllNames,
    getValueFor,
  };
};

export default Abilities;
