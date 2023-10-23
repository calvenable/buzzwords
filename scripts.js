const rounds = [
    { letter: "T", category: "items of clothing", answers: ["tank top", "trousers", "turtleneck", "t-shirt", "trenchcoat", "tuxedo", "tie", "tunic", "tights", "thong"] },
    { letter: "H", category: "animals", answers: ["humpback whale", "hamster", "hyena", "hare", "hedgehog", "hippopotamus", "hermit crab", "heron", "hammerhead shark"] },
    { letter: "L", category: "body parts", answers: ["leg", "luns", "liver", "large intestine", "loin", "lobe", "lower jaw", "larynx"] },
    { letter: "T", category: "things you'd find in a kitchen", answers: ["teapot", "thermometer", "tongs", "tablespoon", "toaster", "tap", "turnip", "teatowel", "teaspoon", "tea strainer"] },
    { letter: "N", category: "countries", answers: ["Nepal", "Nicaragua", "Namibia", "Norway", "Netherlands", "New Zealand", "Niger"] },
    { letter: "J", category: "books of the Bible", answers: ["Job", "Jeremiah", "James", "Joel", "Jonah", "John", "Joshua", "Jude", "Judges", "1 John", "2 John", "3 John"] },
    { letter: "B", category: "Disney characters", answers: ["Baloo", "Bambi", "Bashful", "Belle", "Beast", "Bolt", "Bruno", "Bullseye", "Bruce", "Buzz Lightyear", "Buster"] },
    { letter: "M", category: "Disney characters", answers: ["Mary Poppins", "Mad Hatter", "Marlin", "Maui", "Moana", "Merida", "Mickey Mouse", "Minnie Mouse", "Mowgli", "Mulan", "Mushu"] },
    { letter: "B", category: "fruits", answers: ["banana", "blueberry", "blackberry", "blackcurrant", "boysenberry", "buddha's hand"] },
    { letter: "S", category: "items of clothing", answers: ["shirt", "swim suit", "sweater", "shorts", "sun dress", "scarf", "suit", "socks", "sombrero"] },
    { letter: "A", category: "countries", answers: ["Afghanistan", "Andorra", "Algeria", "Australia", "Austria", "Armenia", "Albania"] },
    { letter: "B", category: "countries", answers: ["Bahamas", "Barbados", "Belarus", "Belgium", "Benin", "Bolivia", "Brazil", "Bulgaria", "Burundi"] },
    { letter: "S", category: "countries", answers: ["Senegal", "Sierra Leone", "Slovenia", "South Africa", "Spain", "Sri Lanka", "Sudan", "Sweden", "Switzerland"] },
    { letter: "C", category: "UK cities", answers: ["Cambridge", "Canterbury", "Cardiff", "Carlisle", "Chelmsford", "Chester", "Chichister", "Colchester", "Coventry"] },
    { letter: "B", category: "UK Cities", answers: ["Bangor", "Bath", "Belfast", "Birmingham", "Bradford", "Brighton & Hove", "Bristol"] },
    { letter: "B", category: "animals", answers: ["bee", "beaver", "beetle", "boar", "buffalo", "bull", "butterfly", "badger", "bear", "bat"] },
    { letter: "P", category: "animals", answers: ["panther", "parrot", "panda", "partridge", "penguin", "pig", "pigeon", "polar bear", "pony", "porpoise", "porcupine"] },
    { letter: "M", category: "car makes/models", answers: ["McLaren", "Mitsubishi", "Mini", "Mercedes-Benz", "Mazda", "Maserati", "Malibu (Chevrolet)", "Maverick (Ford)", "Model S (Tesla)"] },
    { letter: "A", category: "colours", answers: ["aqua", "amethyst", "amber", "apricot", "arctic lime", "ash grey", "azure"] },
    { letter: "M", category: "colours", answers: ["mint", "mustard", "mango", "midnight blue", "mauve", "magenta", "magnolia"] },
    { letter: "B", category: "sports", answers: ["bobsled", "boxing", "basketball", "baseball", "badminton", "biathlon"] },
    { letter: "S", category: "sports", answers: ["skiing", "snowboarding", "swimming", "surfing", "sumo wrestling", "squash", "soccer", "shooting", "sailing", "scuba diving"] },
];
// swing, slide, seagull, seat, 

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


const State = {
    Menu: 1,
    Intro: 2,
    Waiting: 3,
    RoundInProgress: 4,
    Answers: 5
};
let pageState = State.Menu;

let currentRound;
let availableRounds = [];
for (let i = 0; i < rounds.length; i++) {
    availableRounds.push(rounds[i]);
}

document.addEventListener("keypress", (event) => { handleKeyPress(event); });

function handleKeyPress(event) {
    switch (event.key) {
        case "Enter":
        case " ":
            advancePageState();
        break;
  }
}

function advancePageState() {
    switch (pageState) {
        case State.Menu:
            titleVisible(false);
            hideElementsIn("footer");
            showElementsIn("waiting-elements");
            pageState = State.Waiting;
            break;

        // case State.Intro:

        case State.Waiting:
            hideElementsIn("waiting-elements");
            if (selectRound()) {
                runSelectionAnimation();
                pageState = State.RoundInProgress;
            }
            else {
                // Handle no rounds remaining
            }
            break;

        case State.RoundInProgress:
            showElementsIn("answer-elements");
            pageState = State.Answers;
            break;

        case State.Answers:
            hideElementsIn("game-elements");
            hideElementsIn("answer-elements");
            showElementsIn("waiting-elements");
            pageState = State.Waiting;
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


function runSelectionAnimation() {
    document.getElementById("big-letter").innerText = currentRound.letter;
    document.getElementById("category").innerText = currentRound.category;
    let answerList = currentRound.answers;
    let answerString = "";
    for (let i = 0; i < answerList.length; i++) {
        if (i === answerList.length - 1) {
            answerString += "or " + answerList[i];
        }
        else {
            answerString += answerList[i] + ", ";
        }
    }
    document.getElementById("answerList").innerText = answerString;
    showElementsIn("game-elements");
}

function selectRound() {
    if (availableRounds.length < 0) {
        return false;
    }

    let index = Math.floor(Math.random() * availableRounds.length);
    currentRound = availableRounds[index];
    availableRounds.splice(index, 1);
    return true;
}


