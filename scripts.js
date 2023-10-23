const letters = [];
var frequencies = [];

document.addEventListener("keypress", (event) => {handleKeyPress(event);});

function handleKeyPress(event) {
  switch (event.Key) {
    case "Enter":
      console.log("Pressed enter!");
      break;
    case "Space":
      console.log("Pressed space!");
      break;
    default:
      console.log("Pressed " + event.Key);
  }
}
