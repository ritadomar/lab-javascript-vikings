// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    super.receiveDamage(damage);
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return 'Odin Owns You All!';
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }

  receiveDamage(damage) {
    super.receiveDamage(damage);
    if (this.health > 0) {
      return `A ${this.constructor.name} has received ${damage} points of damage`;
    } else {
      return `A ${this.constructor.name} has died in combat`;
      //   return `A ${this.class} has died in combat`;
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {
    // Random Saxon -> select this array, generate random number, use number as index to select random saxon
    const randomSaxon =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

    // Random Viking -> select this array, generate random number, use number as index to select random viking
    const randomViking =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

    // Assumption -> this calls the method, and stores the value, which removes the strength from the health already. Later, I'm just returning that value, not calling the method again
    const attack = randomSaxon.receiveDamage(randomViking.strength);

    this.saxonArmy.forEach((saxon, index) => {
      if (saxon.health <= 0) {
        this.saxonArmy.splice(index, 1);
      }
    });

    return attack;
  }

  saxonAttack() {
    // Random Saxon -> select this array, generate random number, use number as index to select random saxon
    const randomSaxon =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

    // Random Viking -> select this array, generate random number, use number as index to select random viking
    const randomViking =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

    // Assumption -> this calls the method, and stores the value, which removes the strength from the health already. Later, I'm just returning that value, not calling the method again
    const attack = randomViking.receiveDamage(randomSaxon.strength);

    this.vikingArmy.forEach((viking, index) => {
      if (viking.health <= 0) {
        this.vikingArmy.splice(index, 1);
      }
    });

    return attack;
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return 'Vikings have won the war of the century!';
    } else if (this.vikingArmy.length === 0) {
      return 'Saxons have fought for their lives and survived another day...';
    } else if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0) {
      return 'Vikings and Saxons are still in the thick of battle.';
    }
  }
}
