import { should } from 'should';
import { Attack } from '../Attack';

describe('Attack should', () => {
  let attack;

  beforeEach(() => {
    attack = new Attack();
  });

  it('roll a dice 20-sided dice', () => {
    const roll = attack.roll();
    console.log(`Dice roll: ${roll}`);

    roll.should.be.aboveOrEqual(1).and.belowOrEqual(20);
  });

  it('inflict damage if roll is greater than enemy armor', () => {
    const enemyArmor = 10;
    const characterAttackForce = 15;

    const willDamage = attack.canDamage(enemyArmor, characterAttackForce);

    willDamage.should.be.true();
  });

  it('inflict damage if roll is equal to enemy armor', () => {
    const enemyArmor = 15;
    const characterAttackForce = 15;

    const willDamage = attack.canDamage(enemyArmor, characterAttackForce);
    willDamage.should.be.true();
  });

  it('not inflict damage if roll is less than enemy armor', () => {
    const enemyArmor = 10;
    const characterAttackForce = 5;

    const willDamage = attack.canDamage(enemyArmor, characterAttackForce);
    willDamage.should.be.false();
  });
});
