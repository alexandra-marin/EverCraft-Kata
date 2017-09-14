import BattleBehavior from './BattleBehavior';
import * as Alignment from './Alignment';
import * as Abilities from './Abilities';

export default class Character {
    constructor() {
        this.name = 'Wizard';
        this.hitPoints = 5;
        this.armor = 10;
        this.attackForce = 0;
        this.alignment = Alignment.default();
        this.battleBehavior = new BattleBehavior();
        this.abilities = Abilities.default().get();
    }

 attack = () => {
     this.attackForce = this.battleBehavior.calculateAttack(this.abilities.Strength);
     return this.attackForce;
 };

 defend = (attack) => {
     const willBeDamaged = this.battleBehavior.canDamage(attack, this.armor);
     if (willBeDamaged) {
         this.hitPoints -= this.battleBehavior.calculateDamage(attack, this.armor, this.abilities.Strength);
     }
 };

 isDead = () => this.hitPoints <= 0;
}
