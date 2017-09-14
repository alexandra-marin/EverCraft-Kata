import { should } from 'should';
import { Character } from '../../Character';

describe('Character should', () => {
  let character;

  beforeEach(() => {
    character = new Character();
  });

  it('take 1 damage when attack is greater than own armor', () => {
    character.armor = 2;
    character.hitPoints = 5;

    character.defend(15);

    character.hitPoints.should.be.exactly(4);
  });

  it('take 1 damage when attack is equal to own armor', () => {
    character.armor = 2;
    character.hitPoints = 5;

    character.defend(2);

    character.hitPoints.should.be.exactly(4);
  });

  it('take no damage when attack is less than own armor', () => {
    character.armor = 20;
    character.hitPoints = 5;

    character.defend(15);

    character.hitPoints.should.be.exactly(5);
  });

  it('take critical hit when attack is 20', () => {
    character.armor = 20;
    character.hitPoints = 5;

    character.defend(20);

    character.hitPoints.should.be.exactly(3);
  });

  it('die if hit points is 0 or less', () => {
    character.hitPoints = 0;

    character.isDead().should.be.true();
  });
});
