
gameB = ['','','','','','','','',''];

const Players = [];

const gamers = document.querySelector('.addPlayers');
const foRm = document.getElementById('myForm');

gamers.addEventListener('click', ()=> {
    foRm.style.display = 'block';
})

foRm.addEventListener("submit", function (event) {
    event.preventDefault();
    const pl1 = document.querySelector("#pl1").value;
    const pl2 = document.querySelector("#pl2").value;

    Players.push(pl1);
    Players.push(pl2);
    console.log(Players);
    event.target.style.display = "none";
    console.log(plaYer.player1(Players));
    console.log(Players);

    let gaMer1 = plaYer.player1(Players);
    playerTurn.textContent = `${gaMer1.discordName} please play `;

    
    return Players;
    
    
});

console.log(Players);

const plaYer = (function () {
    function player1(Player) {
        let name1 = Player[0];
        const discordName = "player " + name1;
        let sign = 'X';
        return { discordName, sign }
    }

    function player2 (Player) {
        let name2 = Player[1];
        const discordName = "player " + name2;
        let sign = 'O';
        return { discordName, sign }
    }
    return {player1, player2};

})();


const numbs = document.querySelectorAll('.text');
const playerTurn = document.querySelector('.playerTurn');

let gaMer1 = plaYer.player1(Players);
let gaMer2 = plaYer.player2(Players);
        
let currentPlayer = gaMer1.discordName;
let currentSign = gaMer1.sign;

numbs.forEach(contents => {
    contents.addEventListener('click', (e) => {

        let gaMer1 = plaYer.player1(Players);
        let gaMer2 = plaYer.player2(Players);
       
        playerTurn.textContent = `${currentPlayer} please play `;

        let arr = gameB;
        let ind = e.target.id;
        console.log(ind);
        if (arr[ind] == '') {
            arr[ind] = currentSign;
            e.target.innerText= currentSign;

            winNer (arr,currentSign, currentPlayer);
            
            currentSign = currentSign == gaMer1.sign ? gaMer2.sign : gaMer1.sign;   
            currentPlayer = currentPlayer == gaMer1.discordName ? gaMer2.discordName : gaMer1.discordName;
            
        } 
        
    });
});

 
function winNer (arr,currentSign, currentPlayer) {
    
    let a = arr[0] == arr[1] && arr[0] == arr[2];
    let b = arr[3] == arr[4] && arr[3] == arr[5];
    let c = arr[6] == arr[7] && arr[6] == arr[8];
    let d = arr[0] == arr[3] && arr[0] == arr[6];
    let e = arr[1] == arr[4] && arr[1] == arr[7];
    let f = arr[2] == arr[5] && arr[2] == arr[8];
    let g = arr[0] == arr[4] && arr[0] == arr[8];
    let h = arr[2] == arr[4] && arr[2] == arr[6];



    if (a) {
            if (arr[0] == currentSign ) {
                playerTurn.textContent = `The winner is ${currentPlayer}`;}
    } else if (b) {
        if (arr[3] == currentSign ) {
            playerTurn.textContent = `The winner is ${currentPlayer}`;}
    } else if (c) {
        if (arr[6] == currentSign ) {
            playerTurn.textContent = `The winner is ${currentPlayer}`;}
    } else if (d) {
        if (arr[0] == currentSign ) {
            playerTurn.textContent = `The winner is ${currentPlayer}`;}
    } else if (e) {
        if (arr[1] == currentSign ) {
            playerTurn.textContent = `The winner is ${currentPlayer}`;}
    } else if ( f) {
        if (arr[2] == currentSign ) {
            playerTurn.textContent = `The winner is ${currentPlayer}`;}
    } else if (g) {
        if (arr[0] == currentSign ) {
            playerTurn.textContent = `The winner is ${currentPlayer}`;}
    } else if (h) {
        if (arr[2] == currentSign ) {
            playerTurn.textContent = `The winner is ${currentPlayer}`;}
    }
    else if (arr[6] !== '' && arr[7] !== '' && arr[8] !== ''){
        playerTurn.textContent = 'The game is a draw';
    }
    return false;
}
    
