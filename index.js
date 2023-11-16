// user prompt
const userInputString = prompt(
    "Please enter a list of froyo flavors.",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

// display the user's input in the console in an array of strings
let froyoChoices = userInputString.split(",");

console.log(froyoChoices)

// defining the froyo object to keep track of the flavor count
const froyo = {
    vanilla: 0,
    strawberry: 0,
    coffee: 0
};

// creating the function and the loop
function froyoTable(flavorChoices) {
    for (let i = 0; i < flavorChoices.length; i++) {
        let flavor = flavorChoices[i]
        console.log(flavor)

        if (flavor === "vanilla") {
            froyo.vanilla = froyo.vanilla+1;
        } else if (flavor === "strawberry") {
            froyo.strawberry = froyo.strawberry+1;
        } else if (flavor === "coffee") {
            froyo.coffee = froyo.coffee+1;
        }
    }
    console.log(froyo)

    for (const key in froyo) {
        console.log(key)
    }; // iterates through the array of flavors (vanilla, strawberry, coffee)

    return froyo;
}

console.log(froyoTable(froyoChoices));