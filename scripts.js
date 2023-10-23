const State = {
    Menu: 1,
    Intro: 2,
    Waiting: 3,
    RoundInProgress: 4,
    Answers: 5
};
let pageState = State.Menu;
initialiseProbs();

document.addEventListener("keypress", (event) => {handleKeyPress(event);});

function handleKeyPress(event) {
    switch (event.key) {
        case "Enter":
        case " ":
            advancePageState();
        break;
        default:
            console.log("Letter: " + generateLetter());
            console.log("Category: " + generateCategory());
  }
}

function advancePageState() {
    switch (pageState) {
        case State.Menu:
            titleVisible(false);
            hideElementsIn("footer");
            pageState = State.Intro;
            break;
        case State.Intro:
            titleVisible(true);
            showElementsIn("footer");
            pageState = State.Menu;
            break;

    }
}

function titleVisible(state) {
    if (state) {
        document.getElementById("buzz").classList.remove("slideLeft");
        document.getElementById("words").classList.remove("slideRight");
    }
    else {
        document.getElementById("buzz").classList.add("slideLeft");
        document.getElementById("words").classList.add("slideRight");
    }
}

function showElementsIn(divID) {
    elements = document.getElementById(divID).children;
    [...elements].forEach(item => {
        item.classList.remove("hidden");
    });
}

function hideElementsIn(divID) {
    elements = document.getElementById(divID).children;
    [...elements].forEach(item => {
        item.classList.add("hidden");
    });
}


function selectRound() {
    return rounds[Math.floor(Math.random() * rounds.length)];
}

let rounds = [
    { letter: "T", category: "items of clothing", answers: ["tank top", "trousers", "turtleneck", "t-shirt", "trenchcoat", "tuxedo", "tie", "tunic", "tights", "thong"] },
    { letter: "H", category: "animals", answers: ["humpback whale", "hamster", "hyena", "hare", "hedgehog", "hippopotamus", "hermit crab", "heron", "hammerhead shark"] },
    { letter: "L", category: "body parts", answers: ["leg", "luns", "liver", "large intestine", "loin", "lobe", "lower jaw", "larynx"] },
    { letter: "T", category: "things you'd find in a kitchen", answers: ["teapot", "thermometer", "tongs", "tablespoon", "toaster", "tap", "turnip", "teatowel", "teaspoon", "tea strainer"] },
    { letter: "N", category: "countries", answers: ["Nepal", "Nicaragua", "Namibia", "Norway", "Netherlands", "New Zealand", "Niger"] },
    { letter: "J", category: "books of the Bible", answers: ["Job", "Jeremiah", "James", "Joel", "Jonah", "John", "Joshua", "Jude", "Judges", "1 John", "2 John", "3 John"] },
    //{ letter: }
];


//let categories = [
//    'fruits',
//    'items of clothing',
//    'countries',
//    'British cities',
//    'items of clothing',
//    'animals',
//    'body parts',
//    'car makes/models',
//    'things you\'d find in a kitchen',
//    'things you\'d find in a park',
//    'famous actors (surname)',
//    'cartoon characters',
//    'colours',
//    'items of furniture',
//    'beverages (drinks)',
//    'foods',
//    'sports',
//    'books of the Bible'];