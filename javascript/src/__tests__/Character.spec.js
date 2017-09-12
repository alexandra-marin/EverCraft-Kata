import { should } from "should";
import { Character, Alignments } from "../Character";

describe("Character should", function() {
	let character;

	beforeEach(() => {
		character = new Character();
	});

	it("have a name", function() {
		character.should.have.property("name");
	});

	it("have an alignment", function() {
		character.should.have.property("alignment");
	});

	it("not have alignment different than Good, Bad, Neutral", function() {
		character.alignment = Alignments.good;
		character.alignment = "Unknown";
		character.alignment.should.equal(Alignments.good);
	});

	it("have 5 HP", function() {
		character.should.have.property("hitPoints");
		character.hitPoints.should.be.exactly(5);
	});

	it("have 10 armor", function() {
		character.should.have.property("armor");
		character.armor.should.be.exactly(10);
	});

	it("attack by rolling a dice 20-sided dice", function() {
		var attack = character.rollDice();
		console.log("Dice roll: " + character.attackForce);
		character.attackForce.should.be.aboveOrEqual(1).and.belowOrEqual(20);
	});

	it("inflict damage if roll is equal or greater than enemy armor", function() {
        const enemy = new Character();
        enemy.armor = 10;

        character.attackForce = 15;
        const willDamage = character.canDamage(enemy.armor);

        willDamage.should.be.true();
	});

	it("not inflict damage if roll is less than enemy armor", function() {
		const enemy = new Character();
        enemy.armor = 10;

        character.attackForce = 5;
        const willDamage = character.canDamage(enemy.armor);

        willDamage.should.be.false();
    });
    
    it("take 1 damage when attack is greater or equal to armor", function() {
		const enemy = new Character();
        enemy.attackForce = 15;

        character.armor = 2;
        character.hitPoints = 5;
        character.takeDamage(enemy.attackForce);

        character.hitPoints.should.be.exactly(4);
    });
    
    it("take no damage when attack is less than armor", function() {
		const enemy = new Character();
        enemy.attackForce = 15;

        character.armor = 20;
        character.hitPoints = 5;
        character.takeDamage(enemy.attackForce);

        character.hitPoints.should.be.exactly(5);
    });
    
    it("take double damage when attack 20", function() {
		const enemy = new Character();
        enemy.attackForce = 20;

        character.armor = 20;
        character.hitPoints = 5;
        character.takeDamage(enemy.attackForce);

        character.hitPoints.should.be.exactly(3);
    });
    
    it("die if hit points is 0 or less", function() {
        character.hitPoints = 0;
        var willDie = character.willDie();

        willDie.should.be.true();
	});
});
