// Part 1: Humble Beginnings

const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat",
        companion: {
            name: "Frank",
            type: "Flea",
            belongings: ['small hat', 'sunglasses']
        }
    },

    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
        }
    }

// a loop that logs each item in Robin’s inventory

function logInventory(inventoryArr) {
    for (let i in inventoryArr) {
        console.log(inventoryArr[i]);
    }
    return true;
}

logInventory(adventurer.inventory);
adventurer.roll(0);
adventurer.roll(10);
adventurer.roll(100);

