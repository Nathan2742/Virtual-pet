import inquirer from 'inquirer';

const pets = ["Dragon", "Imp", "Pixi", "Goblin"]

let petName = "";
let action = "feed";
let gender = "";

if(Math.round(Math.random()) == 0) {
    gender = "male";
} else {
    gender = "female";
}

class Pet {
    constructor() {
        this.health = 200;
        this.hunger = 50;
        this.thirst = 130;
        this.happiness = 150;
    }

    potion() {
        this.health += 50;
        return this;
    }

    eat() {
        this.hunger += 50;
        return this;
    }

    water() {
        this.thirst += 50;
        return this;
    }

    scratch() {
        this.happiness += 50;
        return this;
    }

    reduceStats() {
        this.health -= 10;
        this.hunger -= 10;
        this.thirst -= 10;
        this.happiness -= 10;
        return this;
    }
}

let myPet = new Pet()

const petChoices = await inquirer.prompt([
    {
        name: "petChoice",
        type: "rawlist",
        message: "Which pet would you like to choose?",
        default: pets[0],
        choices: pets
    },
    {
        name: "petName",
        type: "input",
        message: `What would you like call your ${gender} pet?`
    }
])

let petChoice = petChoices.petChoice
petName = petChoices.petName
const optionsList = [`Heal`, `Feed`, `Water`, `Scratch belly`, ""]

console.log(`You have a ${gender} ${petChoice} called ${petName}.`)

setTimeout(function() {
    const statChange = setInterval(function () {
        myPet.reduceStats();

        process.stdout.clearLine(0);
        process.stdout.cursorTo(0);
        process.stdout.write(`${petName}:- Health: ${myPet.health}, Hunger: ${myPet.hunger}, Thirst: ${myPet.thirst}, Happiness: ${myPet.happiness}. Answer: `);

        if(myPet.health <= 0) {
            console.clear()
            console.log(`${petName} is dead. GG.`)
            clearInterval(statChange);
        } else if(myPet.hunger <=0) {
            console.clear()
            console.log(`${petName} belly rumbles and DIES !`)
            clearInterval(statChange);
        } else if(myPet.thirst <=0) {
            console.clear()
            console.log(`${petName} dies of thirst`)
            clearInterval(statChange);
        } else if(myPet.happiness <=0) {
            console.clear()
            console.log(`${petName} looks at you dissapointed and leaves you forever!`)
            clearInterval(statChange);
        }
    }, 2000);
    userOptions();

    async function userOptions() {
        const options = await inquirer.prompt([
            {
                name: "option",
                type: "list",
                message: "How would you like to interact with you pet?",
                choices: optionsList
            }
        ])
        
        if(options.option == "Heal") {
            myPet.potion();
        } else if(options.option == "Feed") {
            myPet.eat();
        } else if(options.option == "Water") {
            myPet.water();
        } else if(options.option == "Scratch belly") {
            myPet.scratch();
        }

        if(myPet.health > 0 || myPet.hunger > 0 || myPet.thirst > 0 || myPet.happiness > 0) {
            userOptions();
        }
    }
}, 2000);