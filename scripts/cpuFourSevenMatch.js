import { getData, winConditions, ending } from "./app.js";

const gameMode = document.getElementById ( "gameMode" );
const rpsls = document.getElementById ( "rpsls" );
const gameTitle = document.getElementById ( "gameTitle" );

const rock = document.getElementById ( "rock" );
const paper = document.getElementById ( "paper" );
const scissor = document.getElementById ( "scissor" );
const lizard = document.getElementById ( "lizard" );
const spock = document.getElementById ( "spock" );

const rockBtn = document.getElementById ( "rockBtn" );
const paperBtn = document.getElementById ( "paperBtn" );
const scissorBtn = document.getElementById ( "scissorBtn" );
const lizardBtn = document.getElementById ( "lizardBtn" );
const spockBtn = document.getElementById ( "spockBtn" );
const yesBtn = document.getElementById ( "yesBtn" );
const noBtn = document.getElementById ( "noBtn" );

const scorePlayer1 = document.getElementById ( "scorePlayer1" );
const scorePlayer2 = document.getElementById ( "scorePlayer2" );

const endPopup = document.getElementById ( "endPopup" );
const endCenter = document.getElementById ( "endCenter" );

let winLoseTie = 0;

let rounds = 0;

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
                rounds += 1;
                rpsls.classList = "endOpacity lastPlay";
                rpsls.textContent = `The enemy chose ${cpuResponse}! You destroyed them!`
            }else if ( playerResponse === cpuResponse )
            {
                player1Score;
                player2Score;
                rounds;
                rpsls.classList = "endOpacity lastPlay";
                rpsls.textContent = `The enemy chose ${cpuResponse}! An even clash!`
            }else
            {
                player2Score += 1;
                scorePlayer2.textContent = player2Score;
                rounds += 1;
                rpsls.classList = "endOpacity lastPlay";
                rpsls.textContent = `The enemy chose ${cpuResponse}! They destroyed you!`
            }
    
        if ( rounds === 7 && player1Score >= 4 )
            {
            winLoseTie = 1;
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
            }else if ( rounds === 7 && player2Score >= 4 )
            {
            winLoseTie = 2;
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
            }
    });

paperBtn.addEventListener( "click", async () =>
    {
        playerResponse = "Paper";
        let cpuResponse = await getData();
    
        if ( winConditions[playerResponse].includes(cpuResponse) )
            {
                player1Score += 1;
                scorePlayer1.textContent = player1Score;
                rounds += 1;
                rpsls.classList = "endOpacity lastPlay";
                rpsls.textContent = `The enemy chose ${cpuResponse}! You destroyed them!`
            }else if ( playerResponse === cpuResponse )
            {
                player1Score;
                player2Score;
                rounds;
                rpsls.classList = "endOpacity lastPlay";
                rpsls.textContent = `The enemy chose ${cpuResponse}! An even clash!`
            }else
            {
                player2Score += 1;
                scorePlayer2.textContent = player2Score;
                rounds += 1;
                rpsls.classList = "endOpacity lastPlay";
                rpsls.textContent = `The enemy chose ${cpuResponse}! They destroyed you!`
            }
    
        if ( rounds === 7 && player1Score >= 4 )
            {
            winLoseTie = 1;
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
            }else if ( rounds === 7 && player2Score >= 4 )
            {
            winLoseTie = 2;
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
            }
    });

scissorBtn.addEventListener( "click", async () =>
    {
        playerResponse = "Scissor";
        let cpuResponse = await getData();
    
        if ( winConditions[playerResponse].includes(cpuResponse) )
            {
                player1Score += 1;
                scorePlayer1.textContent = player1Score;
                rounds += 1;
                rpsls.classList = "endOpacity lastPlay";
                rpsls.textContent = `The enemy chose ${cpuResponse}! You destroyed them!`
            }else if ( playerResponse === cpuResponse )
            {
                player1Score;
                player2Score;
                rounds;
                rpsls.classList = "endOpacity lastPlay";
                rpsls.textContent = `The enemy chose ${cpuResponse}! An even clash!`
            }else
            {
                player2Score += 1;
                scorePlayer2.textContent = player2Score;
                rounds += 1;
                rpsls.classList = "endOpacity lastPlay";
                rpsls.textContent = `The enemy chose ${cpuResponse}! They destroyed you!`
            }
    
        if ( rounds === 7 && player1Score >= 4 )
            {
            winLoseTie = 1;
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
            }else if ( rounds === 5 && player2Score >= 3 )
            {
            winLoseTie = 2;
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
            }
    });

lizardBtn.addEventListener( "click", async () =>
    {
        playerResponse = "Lizard";
        let cpuResponse = await getData();
    
        if ( winConditions[playerResponse].includes(cpuResponse) )
            {
                player1Score += 1;
                scorePlayer1.textContent = player1Score;
                rounds += 1;
                rpsls.classList = "endOpacity lastPlay";
                rpsls.textContent = `The enemy chose ${cpuResponse}! You destroyed them!`
            }else if ( playerResponse === cpuResponse )
            {
                player1Score;
                player2Score;
                rounds;
                rpsls.classList = "endOpacity lastPlay";
                rpsls.textContent = `The enemy chose ${cpuResponse}! An even clash!`
            }else
            {
                player2Score += 1;
                scorePlayer2.textContent = player2Score;
                rounds += 1;
                rpsls.classList = "endOpacity lastPlay";
                rpsls.textContent = `The enemy chose ${cpuResponse}! They destroyed you!`
            }
    
        if ( rounds === 7 && player1Score >= 4 )
            {
            winLoseTie = 1;
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
            }else if ( rounds === 7 && player2Score >= 4 )
            {
            winLoseTie = 2;
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
            }
    });

spockBtn.addEventListener( "click", async () =>
    {
        playerResponse = "Spock";
        let cpuResponse = await getData();
    
        if ( winConditions[playerResponse].includes(cpuResponse) )
            {
                player1Score += 1;
                scorePlayer1.textContent = player1Score;
                rounds += 1;
                rpsls.classList = "endOpacity lastPlay";
                rpsls.textContent = `The enemy chose ${cpuResponse}! You destroyed them!`
            }else if ( playerResponse === cpuResponse )
            {
                player1Score;
                player2Score;
                rounds;
                rpsls.classList = "endOpacity lastPlay";
                rpsls.textContent = `The enemy chose ${cpuResponse}! An even clash!`
            }else
            {
                player2Score += 1;
                scorePlayer2.textContent = player2Score;
                rounds += 1;
                rpsls.classList = "endOpacity lastPlay";
                rpsls.textContent = `The enemy chose ${cpuResponse}! They destroyed you!`
            }
    
        if ( rounds === 7 && player1Score >= 4 )
            {
            winLoseTie = 1;
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
            }else if ( rounds === 7 && player2Score >= 4 )
            {
            winLoseTie = 2;
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
            }
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