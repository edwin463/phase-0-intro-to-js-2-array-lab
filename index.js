// Write your solution here!
// Initialize cats array
let cats = ["Milo", "Otis", "Garfield"];


// Function to destructively append a cat to the end of the array
function destructivelyAppendCat(name) {
    cats.push(name);
}


// Destructive functions
function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

// Non-destructive functions
function appendCat(name) {
    return [...cats, name];
}

function prependCat(name) {
    return [name, ...cats];
}

function removeLastCat() {
    return cats.slice(0, cats.length - 1);
}

function removeFirstCat() {
    return cats.slice(1);
}
