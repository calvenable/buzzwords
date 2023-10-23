// Generator functions and properties
const letters = ['T', 'A', 'O', 'I', 'S', 'W', 'C', 'B', 'P', 'H', 'F', 'M', 'D', 'E', 'R', 'L', 'N', 'G', 'U', 'K', 'V', 'Y', 'J', 'Q', 'X', 'Z'];
const probs = [.16, .117, .076, .073, .067, .055, .052, .044, .043, .042, .04, .038, .032, .028, .028, .024, .023, .016, .012, .0086, .0082, .0076, .0051, .0022, .00045, .00045];
let aggProbs = [];
function initialiseProbs() {
    let count = 0.0;
    for (let i = 0; i < probs.length; i++) {
        count += probs[i];
        aggProbs[i] = count;
    }
}

function generateLetter() {
    var randValue = Math.random();
    var index = 0;
    while (aggProbs[index] < randValue) {
        index++;
    }
    return letters[index];
};


function generateCategory() {
    return categories[Math.floor(Math.random() * categories.length)];
}



// Actual program functionality
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



let categories = [
    'fruits',
    'items of clothing',
    'countries',
    'British cities',
    'items of clothing',
    'animals',
    'body parts',
    'car makes/models',
    'things you\'d find in a kitchen',
    'things you\'d find in a park',
    'famous actors (surname)',
    'cartoon characters',
    'colours',
    'items of furniture',
    'beverages (drinks)',
    'foods',
    'sports',
    'books of the Bible'];