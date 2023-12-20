// Part 1: Humble Beginnings

// const adventurer = {
//     name: "Robin",
//     health: 10,
//     inventory: ["sword", "potion", "artifact"],
//     companion: {
//         name: "Leo",
//         type: "Cat",
//         companion: {
//             name: "Frank",
//             type: "Flea",
//             belongings: ['small hat', 'sunglasses']
//         }
//     },

//     roll (mod = 0) {
//         const result = Math.floor(Math.random() * 20) + 1 + mod;
//         console.log(`${this.name} rolled a ${result}.`)
//         }
//     }

// // a loop that logs each item in Robin’s inventory

// function logInventory(inventoryArr) {
//     for (let i in inventoryArr) {
//         console.log(inventoryArr[i]);
//     }
//     return true;
// }

// logInventory(adventurer.inventory);
// adventurer.roll(0);
// adventurer.roll(10);
// adventurer.roll(100);


/////////////////////////////////////////////////////////////
// Part 2: Class Fantasy

class Character {
    constructor (name) {
        this.name = name;
        this.health = 100;
        this.inventory = [];
    }

    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
        }
}

// const robin = new Character("Robin");
// robin.inventory = ["sword", "potion", "artifact"];
// robin.companion = new Character("Leo");
// robin.companion.type = "Cat";
// robin.companion.companion = new Character("Frank");
// robin.companion.companion.type = "Flea";
// robin.companion.companion.inventory = ["small hat", "sunglasses"];

// robin.roll();
// robin.roll(10);
// robin.roll(100);

// robin.companion.roll();
// robin.companion.companion.roll();



////////////////////////////////
// Part 3: Class Features

class Adventurer extends Character {
    constructor(name, role) {
        super(name);
        this.role = role;
        this.inventory.push('bedroll', '50 gold coins');
    }
    scout() {
        console.log(`${this.name} is scouting ahead...`);
        super.roll();
    }
}

class Companion extends Character {
    constructor(name, type) {
        super(name);
        this.type = type;
        this.inventory.push("small hat", "sunglasses");
    }
    scout() {
        console.log(`${this.name} is scouting ahead...`);
        super.roll();
    }
}

const robin = new Adventurer('Robin','Fighter');
robin.inventory.push("sword", "potion", "artifact");

const leo = new Companion('Leo', 'Cat');
robin.companion = leo;

const frank = new Companion('Frank', 'Flea');
leo.companion = frank;

console.log(robin);
console.log(robin.companion);