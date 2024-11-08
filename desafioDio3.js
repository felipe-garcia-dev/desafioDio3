class hero {
    constructor(type1, attack1) {
        this.type1 = type1;
        this.attack1 = attack1;
    }

    attack() {
        console.log(`${this.type1} attacked using ${this.attack1}.`);
    }
}

let warrior = new hero("warrior", "sword");
let wizard = new hero("magician", "magic");
let monk = new hero("monk", "martial arts");
let ninja = new hero("ninja", "shuriken")

warrior.attack();
wizard.attack();
monk.attack();
ninja.attack();