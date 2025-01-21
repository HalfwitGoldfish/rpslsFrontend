import { winConditions, ending, switchToPlayer2} from "./app.js";

const gameMode = document.getElementById ( "gameMode" );

const player2Btns = document.getElementById ( "player2Btns" );

const rockBtn = document.getElementById ( "rockBtn" );
const paperBtn = document.getElementById ( "paperBtn" );
const scissorBtn = document.getElementById ( "scissorBtn" );
const lizardBtn = document.getElementById ( "lizardBtn" );
const spockBtn = document.getElementById ( "spockBtn" );

const rockBtn2 = document.getElementById ( "rockBtn2" );
const paperBtn2 = document.getElementById ( "paperBtn2" );
const scissorBtn2 = document.getElementById ( "scissorBtn2" );
const lizardBtn2 = document.getElementById ( "lizardBtn2" );
const spockBtn2 = document.getElementById ( "spockBtn2" );

const scorePlayer1 = document.getElementById ( "scorePlayer1" );
const scorePlayer2 = document.getElementById ( "scorePlayer2" );

let player1Score = 0;

let player2Score = 0;

let player1Response = "";

let player2Response = "";

const checkRoundWinner = () =>
{
    if ( winConditions[ player1Response ].includes( player2Response ) )
    {
        player1Score += 1;
        scorePlayer1.textContent = player1Score;
        ending();
        gameMode.textContent = `Player 2 chose '${player2Response}', Player 1 Wins!`;
    }else if ( winConditions[ player2Response ].includes( player1Response ) )
    {
        player2Score += 1;
        scorePlayer2.textContent = player2Score;
        ending();
        gameMode.textContent = `Player 1 chose '${player1Response}', Player 2 Wins!`;
    }else if ( player1Response === player2Response )
    {
        ending();
        gameMode.textContent = `Its a Tie!`;
    }
}

rockBtn.addEventListener( "click", async () =>
    {
        switchToPlayer2();
        player1Response = "Rock";
    });

paperBtn.addEventListener( "click", async () =>
    {
        switchToPlayer2();
        player1Response = "Paper";
    });

scissorBtn.addEventListener( "click", async () =>
    {
        switchToPlayer2();
        player1Response = "Scissor";
    });

lizardBtn.addEventListener( "click", async () =>
    {
        switchToPlayer2();
        player1Response = "Lizard";
    });

spockBtn.addEventListener( "click", async () =>
    {
        switchToPlayer2();
        player1Response = "Spock";
    });

rockBtn2.addEventListener( "click", async () =>
    {
        player2Response = "Rock";
        player2Btns.classList = "displayNone";
        checkRoundWinner();
    });

paperBtn2.addEventListener( "click", async () =>
    {
        player2Response = "Paper";
        player2Btns.classList = "displayNone";
        checkRoundWinner();
    });

scissorBtn2.addEventListener( "click", async () =>
    {
        player2Response = "Scissor";
        player2Btns.classList = "displayNone";
        checkRoundWinner();
    });

lizardBtn2.addEventListener( "click", async () =>
    {
        player2Response = "Lizard";
        player2Btns.classList = "displayNone";
        checkRoundWinner();
    });

spockBtn2.addEventListener( "click", async () =>
    {
        player2Response = "Spock";
        player2Btns.classList = "displayNone";
        checkRoundWinner();
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