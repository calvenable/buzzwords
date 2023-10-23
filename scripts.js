const letters = [];
var frequencies = [];

document.addEventListener("keypress", (event) => {handleKeyPress(event);});

function handleKeyPress(event) {
  switch (event.Key) {
    case "Enter":
      Console.log("Pressed enter!");
      break;
    case "Space":
      Console.log("Pressed space!");
      break;
    default:
      Console.log("Pressed " + event.Key);
  }
}
