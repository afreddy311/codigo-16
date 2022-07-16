
const cardArray = [
    {
        name:"fries",
        Img:"images/fries.png"
    },
    {
        name:"cheeseburger",
        Img:"images/cheeseburger.png"
    },
    {
        name:"hotdog",
        Img:"images/hotdog.png"
    },
    {
        name:"ice-cream",
        Img:"images/ice-cream.png"
    },
    {
        name:"milkshake",
        Img:"images/milkshake.png"
    },
    {
        name:"pizza",
        Img:"images/pizza.png"
    },
    {
        name:"fries",
        Img:"images/fries.png"
    },
    {
        name:"cheeseburger",
        Img:"images/cheeseburger.png"
    },
    {
        name:"hotdog",
        Img:"images/hotdog.png"
    },
    {
        name:"ice-cream",
        Img:"images/ice-cream.png"
    },
    {
        name:"milkshake",
        Img:"images/milkshake.png"
    },
    {
        name:"pizza",
        Img:"images/pizza.png"
    }
];


//barajamos las cartas aleatoriamente
cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector("#grid");

let cardsChosen = [];
let cardsChosenId = [];
let cardsWon=[];

function createBoard() {
    for ( let i=0 ; i<cardArray.length ; i++) {
        const card=document.createElement('img');
        card.setAttribute('src',"images/blank.png");
        card.addEventListener('click',flipCard);
        card.setAttribute("data-id",i);
        gridDisplay.append(card);
    }
}

createBoard();
//Lograr valores entre 0.5 y -0.5
// console.log(Math.random());//entre 0 y 0.999
// (0.5-0.0)=0.5
// (0.5-0.99)=-0.49

function checkForMatch() {
    //cards es un array de todas las img renderizadas.
    const cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

    if (optionOneId==optionTwoId) {
        //Esta misma card debe cerrarse (blanck.png)
        cards[optionOneId].setAttribute('src',"images/blank.png");
        cards[optionTwoId].setAttribute('src',"images/blank.png");

        alert('same card');
    } else if (cardsChosen[0]== cardsChosen[1]) {
        //colocamos ambas cartas como white
        cards[optionOneId].setAttribute('src',"images/white.png");
        cards[optionTwoId].setAttribute('src',"images/white.png");
        //quitar event click a las cartas white:
        cards[optionOneId].removeEventListener("click",flipCard);
        cards[optionTwoId].removeEventListener("click",flipCard);

        
        cardsWon.push(cardsChosen);
        alert("match");
    } else {
        //queremos volver a cerrar las 2 cartas.
        cards[optionOneId].setAttribute('src',"images/blank.png");
        cards[optionTwoId].setAttribute('src',"images/blank.png");
        alert("no match");
    }


    console.log("check for match");
    if (cardsChosen[0]==cardsChosen[1]) {
        alert("Match!");
    }

    cardsChosen = [];
    cardsChosenId = [];

    if ( cardsWon.length == cardArray.length/2) {
        resultDisplay.textContent = "you win";
    }
}

function flipCard() {
    let cardId = this.getAttribute("data-id");
    this.setAttribute('src',cardArray[cardId].Img);
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    
    if (cardsChosen.length==2) {
        setTimeout(checkForMatch,500);
    }

}