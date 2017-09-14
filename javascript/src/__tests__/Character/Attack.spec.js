import { should } from 'should';
import Character from '../../Character';

describe('Character attack should', () => {
    let character;

    beforeEach(() => {
        character = new Character();
    });

    it('be the sum of roll and modifier', () => {
        character.attack();
        console.log(`Attack force: ${character.attackForce}`);
        
        character.attackForce
            .should.be.aboveOrEqual(1)
            .and.belowOrEqual(20 + 5);
    });

    it('be at least 1', () => {
        character.abilities.Strength = 1;
        
        character.attack();
        console.log(`Attack force: ${character.attackForce}`);
        
        character.attackForce.should.be.exactly(1);
    });
});
