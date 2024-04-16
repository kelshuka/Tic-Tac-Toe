

function gameBoard () {
    const gameB = ['','','','','','','','',''];

    return gameB 
}


const plaYer = (function () {
    let name1 = prompt("Player one name is: ",'');
    let name2 = prompt("Player two name is: ",'');
    function player1() {
        const discordName = "player " + name1;
        let sign = 'X';
        return { discordName, sign }
    }

    function player2 () {
        const discordName = "player " + name2;
        let sign = 'O';
        return { discordName, sign }
    }
    return {player1, player2};

})();

function plaY () {
    const arr = gameBoard();
    let gaMer1 = plaYer.player1();
    let gaMer2 = plaYer.player2();

    let i = 1;
    while (i<= arr.length/3) {
        let ind1 = +prompt(`${gaMer1.discordName} please pick a number btw 1 & 9 `,);
        if (arr[ind1-1] == '') arr[ind1-1] = gaMer1.sign;
        else {
            ind1 = +prompt('number taken, choose another ',);
            arr[ind1-1] = gaMer1.sign;
        }

        let ind2 = +prompt(`${gaMer2.discordName} please pick a number btw 1 & 9 `,);
        if (arr[ind2-1] == '') arr[ind2-1] = gaMer2.sign;
        else {
            ind2 = +prompt('number taken, choose another ',);
            arr[ind2-1] = gaMer2.sign;
        }
        
        i++;
    }

    let a = arr[0] == arr[1] && arr[1] == arr[2];
    let b = arr[3] == arr[4] && arr[4] == arr[5];
    let c = arr[6] == arr[7] && arr[7] == arr[8];
    let d = arr[0] == arr[3] && arr[3] == arr[6];
    let e = arr[1] == arr[4] && arr[4] == arr[7];
    let f = arr[2] == arr[5] && arr[5] == arr[8];
    let g = arr[0] == arr[4] && arr[4] == arr[8];
    let h = arr[6] == arr[4] && arr[4] == arr[2];



    if (a) {
            if (arr[0] == gaMer1.sign ) {
                    alert(`The winner is ${gaMer1.discordName}`);
            } else {alert(`The winner is ${gaMer2.discordName}`);}
    } else if (b) {
        if (arr[3] == gaMer1.sign ) {
            alert(`The winner is ${gaMer1.discordName}`);
    } else {alert(`The winner is ${gaMer2.discordName}`);}
    } else if (c) {
        if (arr[6] == gaMer1.sign ) {
            alert(`The winner is ${gaMer1.discordName}`);
    } else {alert(`The winner is ${gaMer2.discordName}`);}
    } else if (d) {
        if (arr[3] == gaMer1.sign ) {
            alert(`The winner is ${gaMer1.discordName}`);
    } else {alert(`The winner is ${gaMer2.discordName}`);}
    } else if (e) {
        if (arr[4] == gaMer1.sign ) {
            alert(`The winner is ${gaMer1.discordName}`);
    } else {alert(`The winner is ${gaMer2.discordName}`);}
    } else if ( f) {
        if (arr[5] == gaMer1.sign ) {
            alert(`The winner is ${gaMer1.discordName}`);
    } else {alert(`The winner is ${gaMer2.discordName}`);}
    } else if (g) {
        if (arr[8] == gaMer1.sign ) {
            alert(`The winner is ${gaMer1.discordName}`);
    } else {alert(`The winner is ${gaMer2.discordName}`);}
    } else if (h) {
        if (arr[2] == gaMer1.sign ) {
            alert(`The winner is ${gaMer1.discordName}`);
    } else {alert(`The winner is ${gaMer2.discordName}`);}
    }

    else {
        alert('The game is a draw');
    }

    return console.log(arr);
}
    

plaY();
//console.log(plaYer.player1());
//console.log(plaYer.player2());

