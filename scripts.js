let currentMarker = 'X'
let gameState = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let counter = 0;
const winningConditions = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]
];


const handleClick = (element) => {
  if(!document.getElementById(element.id).innerHTML){
    addMarker(element.id)
  }
}

const addMarker = (id) => {
  document.getElementById(id).innerHTML= currentMarker ;
  gameState[id] = currentMarker;
  handleResultValidation();
  changeMarker()
}

const changeMarker = () => {
  if(currentMarker === "X"){
    currentMarker = "O"
  } else {
    currentMarker = "X"
  }
}

const resetBoard = () => {
  
   for (i=1; i < 10; i++) {
    document.getElementById(i).innerHTML = "";
  } 
  gameState = ["", "", "", "", "", "", "", "", ""];
  currentMarker = 'X';
  counter = 0;

}

function handleResultValidation() {
    counter = counter + 1
    let roundWon = false;
    for (let i = 0; i <winningConditions.length; i++) {
        const winCondition = winningConditions[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];

        if (a === '' || b === '' || c === '') {
          continue;
        }

        if (a === b && b === c) {
            roundWon = true;
            break
        }

    }

    if (roundWon) {
      alert(`Player ${currentMarker} wins!`);
    } else if(counter > 8) {
      alert('This is draw');
    }

  }