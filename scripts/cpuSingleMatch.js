import { getData, winConditions, ending } from "./app.js";

const gameMode = document.getElementById ( "gameMode" );

const rockBtn = document.getElementById ( "rockBtn" );
const paperBtn = document.getElementById ( "paperBtn" );
const scissorBtn = document.getElementById ( "scissorBtn" );
const lizardBtn = document.getElementById ( "lizardBtn" );
const spockBtn = document.getElementById ( "spockBtn" );

const scorePlayer1 = document.getElementById ( "scorePlayer1" );
const scorePlayer2 = document.getElementById ( "scorePlayer2" );

let winLoseTie = 0;

let player1Score = 0;

let player2Score = 0;

let playerResponse = "";

rockBtn.addEventListener( "click", async () =>
    {
        playerResponse = "Rock";
        let cpuResponse = await getData();
    
        if ( winConditions[playerResponse].includes(cpuResponse) )
        {
            player1Score += 1;
            scorePlayer1.textContent = player1Score;
            winLoseTie = 1;
        }else if ( playerResponse === cpuResponse )
        {
            player1Score;
            player2Score;
            winLoseTie = 3;
        }else
        {
            player2Score += 1;
            scorePlayer2.textContent = player2Score;
            winLoseTie = 2;
        }
    
        switch (winLoseTie)
        {
        case 1:
            gameMode.textContent = `The enemy chose '${cpuResponse}', You Win!`
            ending();
            break;
        case 2:
            gameMode.textContent = `The enemy chose '${cpuResponse}', You Lose!`
            ending();
            break;
        case 3:
            gameMode.textContent = `The enemy chose '${cpuResponse}', Its a Tie!`
            ending();
            break;
        };
    });

paperBtn.addEventListener( "click", async () =>
    {
        playerResponse = "Paper";
        let cpuResponse = await getData();
        
        if ( winConditions[playerResponse].includes(cpuResponse) )
        {
            player1Score += 1;
            scorePlayer1.textContent = player1Score;
            winLoseTie = 1;
        }else if ( playerResponse === cpuResponse )
        {
            player1Score;
            player2Score;
            winLoseTie = 3;
        }else
        {
            player2Score += 1;
            scorePlayer2.textContent = player2Score;
            winLoseTie = 2;
        }
    
        switch (winLoseTie)
        {
        case 1:
            gameMode.textContent = `The enemy chose '${cpuResponse}', You Win!`
            ending();
            break;
        case 2:
            gameMode.textContent = `The enemy chose '${cpuResponse}', You Lose!`
            ending();
            break;
        case 3:
            gameMode.textContent = `The enemy chose '${cpuResponse}', Its a Tie!`
            ending();
            break;
        };
    });

scissorBtn.addEventListener( "click", async () =>
    {
        playerResponse = "Scissor";
        let cpuResponse = await getData();
    
        if ( winConditions[playerResponse].includes(cpuResponse) )
        {
            player1Score += 1;
            scorePlayer1.textContent = player1Score;
            winLoseTie = 1;
        }else if ( playerResponse === cpuResponse )
        {
            player1Score;
            player2Score;
            winLoseTie = 3;
        }else
        {
            player2Score += 1;
            scorePlayer2.textContent = player2Score;
            winLoseTie = 2;
        }
    
        switch (winLoseTie)
        {
        case 1:
            gameMode.textContent = `The enemy chose '${cpuResponse}', You Win!`
            ending();
            break;
        case 2:
            gameMode.textContent = `The enemy chose '${cpuResponse}', You Lose!`
            ending();
            break;
        case 3:
            gameMode.textContent = `The enemy chose '${cpuResponse}', Its a Tie!`
            ending();
            break;
        };
    });

lizardBtn.addEventListener( "click", async () =>
    {
        playerResponse = "Lizard";
        let cpuResponse = await getData();
    
        if ( winConditions[playerResponse].includes(cpuResponse) )
        {
            player1Score += 1;
            scorePlayer1.textContent = player1Score;
            winLoseTie = 1;
        }else if ( playerResponse === cpuResponse )
        {
            player1Score;
            player2Score;
            winLoseTie = 3;
        }else
        {
            player2Score += 1;
            scorePlayer2.textContent = player2Score;
            winLoseTie = 2;
        }
    
        switch (winLoseTie)
        {
        case 1:
            gameMode.textContent = `The enemy chose '${cpuResponse}', You Win!`
            ending();
            break;
        case 2:
            gameMode.textContent = `The enemy chose '${cpuResponse}', You Lose!`
            ending();
            break;
        case 3:
            gameMode.textContent = `The enemy chose '${cpuResponse}', Its a Tie!`
            ending();
            break;
        };
    });

spockBtn.addEventListener( "click", async () =>
    {
        playerResponse = "Spock";
        let cpuResponse = await getData();
    
        if ( winConditions[playerResponse].includes(cpuResponse) )
        {
            player1Score += 1;
            scorePlayer1.textContent = player1Score;
            winLoseTie = 1;
        }else if ( playerResponse === cpuResponse )
        {
            player1Score;
            player2Score;
            winLoseTie = 3;
        }else
        {
            player2Score += 1;
            scorePlayer2.textContent = player2Score;
            winLoseTie = 2;
        }
    
        switch (winLoseTie)
        {
        case 1:
            gameMode.textContent = `The enemy chose '${cpuResponse}', You Win!`
            ending();
            break;
        case 2:
            gameMode.textContent = `The enemy chose '${cpuResponse}', You Lose!`
            ending();
            break;
        case 3:
            gameMode.textContent = `The enemy chose '${cpuResponse}', Its a Tie!`
            ending();
            break;
        };
    });

const startScreen = document.getElementById( "startScreen" );
const tutorialScreen = document.getElementById( "tutorialScreen" );
    
const tutorialOpen = document.getElementById( "tutorialOpen" );
const tutorialClose = document.getElementById( "tutorialClose" );
    
tutorialOpen.addEventListener( "click", () => {
    tutorialScreen.classList = ""
    startScreen.classList = "displayNone"
} );
    
tutorialClose.addEventListener( "click", () => {
    tutorialScreen.classList = "displayNone"
    startScreen.classList = "";
} );