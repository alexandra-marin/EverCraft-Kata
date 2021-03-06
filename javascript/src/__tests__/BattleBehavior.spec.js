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

    it('inflict damage if attack is greater than enemy defense', () => {
        const enemyArmor = 10;
        const characterAttackForce = 15;
        const characterDexterity = 1;

        const willDamage = attack.canDamage(characterAttackForce, enemyArmor, characterDexterity);
        
        willDamage.should.be.true();
    });

    it('inflict damage if attack is equal to enemy defense', () => {
        const enemyArmor = 15;
        const characterAttackForce = 15;
        const enemyDexterity = 10;
        
        const willDamage = attack.canDamage(characterAttackForce, enemyArmor, enemyDexterity);
        willDamage.should.be.true();
    });

    it('not inflict damage if attack is less than enemy defense', () => {
        const enemyArmor = 10;
        const characterAttackForce = 5;
        const enemyDexterity = 10;
        
        const willDamage = attack.canDamage(characterAttackForce, enemyArmor, enemyDexterity);
        willDamage.should.be.false();
    });

    it('not inflict damage if enemy has high dexterity', () => {
        const enemyArmor = 10;
        const characterAttackForce = 5;
        const enemyDexterity = 20;
        
        const willDamage = attack.canDamage(characterAttackForce, enemyArmor, enemyDexterity);
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
        const characterStrength = 10;

        const damage = attack.calculateDamage(enemyAttackForce, characterArmor, characterStrength);

        damage.should.be.exactly(2);
    });

    it('return double damage + double modifier for critical hit', () => {
        const enemyAttackForce = 20;
        const characterArmor = 2;
        const characterStrength = 1;

        const damage = attack.calculateDamage(enemyAttackForce, characterArmor, characterStrength);

        damage.should.be.exactly(1);
    });
});
