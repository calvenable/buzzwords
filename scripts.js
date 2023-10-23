const letters = [];
var frequencies = [];

const State = {
    Menu: 1,
    Intro: 2,
    Waiting: 3,
    RoundInProgress: 4,
    Answers: 5
};
let pageState = State.Menu;

document.addEventListener("keypress", (event) => {handleKeyPress(event);});

function handleKeyPress(event) {
    switch (event.key) {
        case "Enter":
        case " ":
            advancePageState();
        break;
    default:
        console.log("Pressed " + event.key);
  }
}

function advancePageState() {
    switch (pageState) {
        case State.Menu:
            document.getElementById("buzz").classList.add("slideLeft");
            document.getElementById("words").classList.add("slideRight");
            pageState = State.Intro;
            break;
        case State.Intro:
            document.getElementById("buzz").classList.remove("slideLeft");
            document.getElementById("words").classList.remove("slideRight");
            pageState = State.Menu;
            break;

    }
}