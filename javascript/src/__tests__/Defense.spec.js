import { should } from 'should';
import { Defenses } from '../Defenses';

describe('Defences should', () => {
  let defenses;

  beforeEach(() => {
    defenses = new Defenses();
  });

  it('return 1 damage when attack is greater than armor', () => {
    const enemyAttackForce = 15;
    const characterArmor = 2;

    const damage = defenses.calculateDamage(enemyAttackForce, characterArmor);

    damage.should.be.exactly(1);
  });

  it('return 1 damage when attack is equal to armor', () => {
    const enemyAttackForce = 2;
    const characterArmor = 2;

    const damage = defenses.calculateDamage(enemyAttackForce, characterArmor);

    damage.should.be.exactly(1);
  });

  it('return critical hit when enemy attack is 20', () => {
    const enemyAttackForce = 20;
    const characterArmor = 2;

    const damage = defenses.calculateDamage(enemyAttackForce, characterArmor);

    damage.should.be.exactly(2);
  });
});
