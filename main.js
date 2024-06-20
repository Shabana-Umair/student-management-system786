#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(2000 + Math.random() * 70000);
let myBalance = 0;
const answer = await inquirer.prompt([
    {
        name: "students",
        type: "input",
        message: "Enter the student name",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please enter a non empty value";
        }
    },
    {
        name: "courses",
        type: "list",
        message: "Select the course to enrolled",
        choices: ["MSO", "WORD", "EXCEL", "TYPESCRIPT", "JAVASCRIPT"]
    },
]);
const tutionFee = {
    "MSO": 2500,
    "WORD": 2500,
    "EXCEL": 2000,
    "TYPESCRIPT": 5000,
    "JAVASCRIPT": 7000,
};
console.log(`\n Course Fees: ${tutionFee[answer.courses]}`);
console.log(`Balance:${myBalance}`);
let paymentType = await inquirer.prompt([
    {
        name: "payment",
        type: "list",
        message: "Select payment method",
        choices: ["Bank Transfer", "Easy Paisa", "Cash", "Sadapay"]
    },
    {
        name: "amount",
        type: "input",
        message: "Transfer Money",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please enter a non empty value";
        }
    }
]);
console.log(`\nYou select payment method ${paymentType.payment}.\n`);
const tutionFees = tutionFee[answer.courses];
const paymentAmount = parseFloat(paymentType.amount);
if (tutionFees === paymentAmount) {
    console.log(`Congratulations, You have successfully enrolled in ${answer.courses}.\n`);
    let ans = await inquirer.prompt([
        {
            name: "select",
            type: "list",
            message: "What would you like to do next",
            choices: ["view status", "exist"]
        }
    ]);
    if (ans.select === "view status") {
        console.log("\n*************Status***********\n");
        console.log(`Student Name: ${answer.students}`);
        console.log(`Student Id:${randomNumber}`);
        console.log(`Course:${answer.courses}`);
        console.log(`Tution Fee Paid:${paymentAmount}`);
        console.log(`Balance:${myBalance += paymentAmount}`);
    }
    else {
        console.log("\n Exiting Student Management System");
    }
}
else {
    console.log("Invalid Amount for this Course");
}
