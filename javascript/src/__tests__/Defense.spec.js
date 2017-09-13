import { should } from "should";
import { Defenses } from "../Defenses";

describe("Defences should", () => {
	let defenses;

	beforeEach(() => {
		defenses = new Defenses();
    });
    
    it("return 1 damage when attack is greater than armor", () => {
		let enemyAttackForce = 15;
		let characterArmor = 2;

        let damage = defenses.calculateDamage(enemyAttackForce, characterArmor);

		damage.should.be.exactly(1);
	});

	it("return 1 damage when attack is equal to armor", () => {
		let enemyAttackForce = 2;
		let characterArmor = 2;

        let damage = defenses.calculateDamage(enemyAttackForce, characterArmor);

		damage.should.be.exactly(1);
	});

	it("return critical hit when enemy attack is 20", () => {
		let enemyAttackForce = 20;
		let characterArmor = 2;

        let damage = defenses.calculateDamage(enemyAttackForce, characterArmor);

		damage.should.be.exactly(2);
    }); 
});
