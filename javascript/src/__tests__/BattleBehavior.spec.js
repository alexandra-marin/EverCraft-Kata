import { should } from 'should';
import BattleBehavior from '../BattleBehavior';

describe('Battle behavior should', () => {
    let attack;

    beforeEach(() => {
        attack = new BattleBehavior();
    });

    it('roll a dice 20-sided dice', () => {
        const roll = attack.roll();
        console.log(`Dice roll: ${roll}`);

        roll.should.be.aboveOrEqual(1).and.belowOrEqual(20);
    });

    it('inflict damage if roll is greater than enemy armor', () => {
        const enemyArmor = 10;
        const characterAttackForce = 15;

        const willDamage = attack.canDamage(characterAttackForce, enemyArmor);
        
        willDamage.should.be.true();
    });

    it('inflict damage if roll is equal to enemy armor', () => {
        const enemyArmor = 15;
        const characterAttackForce = 15;

        const willDamage = attack.canDamage(characterAttackForce, enemyArmor);
        willDamage.should.be.true();
    });

    it('not inflict damage if roll is less than enemy armor', () => {
        const enemyArmor = 10;
        const characterAttackForce = 5;

        const willDamage = attack.canDamage(characterAttackForce, enemyArmor);
        willDamage.should.be.false();
    });

    it('return 1 damage when attack is greater than armor', () => {
        const enemyAttackForce = 15;
        const characterArmor = 2;

        const damage = attack.calculateDamage(enemyAttackForce, characterArmor);

        damage.should.be.exactly(1);
    });

    it('return 1 damage when attack is equal to armor', () => {
        const enemyAttackForce = 2;
        const characterArmor = 2;

        const damage = attack.calculateDamage(enemyAttackForce, characterArmor);

        damage.should.be.exactly(1);
    });

    it('return critical hit when enemy attack is 20', () => {
        const enemyAttackForce = 20;
        const characterArmor = 2;

        const damage = attack.calculateDamage(enemyAttackForce, characterArmor);

        damage.should.be.exactly(2);
    });
});
