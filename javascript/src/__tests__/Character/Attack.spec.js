import { should } from 'should';
import Character from '../../Character';

describe('Character should', () => {
    let character;

    beforeEach(() => {
        character = new Character();
    });

    it('be able to attack', () => {
        character.attack();
        console.log(`Dice roll: ${character.attackForce}`);
        character.attackForce.should.be.aboveOrEqual(1);
    });
});
