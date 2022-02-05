'use strict'

//MINIMUM
let name = "John";
let admin = name;

console.log(admin);
console.log("");


let login = "Admin";
let password = "TheMaster";

console.log("Who's there?");
if (login == "Cancel") {
    console.log("its Cancel");
    console.log("Canceled.");
}
else if (login == "Admin") {
    console.log("- its Admin");
    console.log("Password?");
    if (password == "Cancel") {
        console.log("- password is 'Canceled'");
        console.log("Canceled.");
    }
    else if (password == "TheMaster") {
        console.log("- password is TheMaster");
        console.log("Welcome!");
    }
    else {
        console.log("- password is " + password);
        console.log("Wrong Password");
    }
}
else {
    console.log("- Its " + login);
    console.log("I don't know you");
}

console.log("");

//MAXIMUM

console.log("Who's there?");
switch (login) {
    case "Cancel":
        console.log("Canceled");
        break;

    case "Admin":
        console.log("- its Admin");
        console.log("Password?");
        switch (password) {
            case "Cancel":
                console.log("Canceled");
                break;
            case "TheMaster":
                console.log("- password is TheMaster");
                console.log("Welcome!");
                break;
            default:
                console.log("- password is " + password);
                console.log("Wrong password");
                break;
        }
        break;
    default:
        console.log("- Its " + login);
        console.log("I don't know you");
        break;
}