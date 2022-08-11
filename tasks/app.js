

class customer{
    constructor(name, drink, price){
        this.name = name
        this.drink = drink
        this.price = price
    }


    order(){
        console.log(
            `Hello ${this.name}, i see you want ${this.drink}.`
        )
    }

    totalPrice(){
        console.log(
            `that will be ${this.price} in total thanks.`
        )
    }};

const Nathan = new customer("Nathan" , "Great coffee", 3.50 );


Nathan.order();
Nathan.totalPrice();


// ######### example

//  UN COMMENT TO SEE IT WORKING

// inquirer
// .prompt([
//     {
//         name: "itemOrder",
//         type: "rawlist",
//         message: "What drink would you like to order?",
//         default: "tea",
//         choices: [
//             "Cream Soda",
//             "Melon Cream Soda",
//             "Ramune",
//             "Monster",
//             "Tea",
//             "Coffee",
//             "Water",
//             "Orange Juice"
//         ]
//     }
// ])
// .then((answers) => {
//     console.info("One", answers.itemOrder, "coming up.");
// })
// .catch((error) => {
//     if (error.isTtyError) {
//         // Prompt couldn't be rendered in the current environment
//     } else {
//         // Something else went wrong
//     }
// });


// const inquirer = require("inquirer")
import inquirer from 'inquirer';
import Choices from 'inquirer/lib/objects/choices'

inquirer
.prompt([
    {
    name: "user_name",
    type: "input",
    message: "What coffee would you like Coffee or Great Coffee??",
    default: "Coffee",
    choices: [
        "coffee",
        "Great Coffee",
    ]
    },
])
.then((answer) => {
    console.log("You have selected " + answer.user_name);
});



