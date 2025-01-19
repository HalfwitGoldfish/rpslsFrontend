const player1 = document.getElementById ( "player1" );
const player2 = document.getElementById ( "player2" );

const gameMode = document.getElementById ( "gameMode" );
const rpsls = document.getElementById ( "rpsls" );
const gameTitle = document.getElementById ( "gameTitle" );

const rock = document.getElementById ( "rock" );
const paper = document.getElementById ( "paper" );
const scissor = document.getElementById ( "scissor" );
const lizard = document.getElementById ( "lizard" );
const spock = document.getElementById ( "spock" );

const player1Btns = document.getElementById ( "player1Btns" );
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

const yesBtn = document.getElementById ( "yesBtn" );
const noBtn = document.getElementById ( "noBtn" );

const scorePlayer1 = document.getElementById ( "scorePlayer1" );
const scorePlayer2 = document.getElementById ( "scorePlayer2" );

const endPopup = document.getElementById ( "endPopup" );
const endCenter = document.getElementById ( "endCenter" );

const winConditions =
{
    "Rock": [ "Scissor", "Lizard" ],
    "Paper": [ "Rock", "Spock" ],
    "Scissor": [ "Paper", "Lizard" ],
    "Lizard": [ "Spock", "Paper" ],
    "Spock": [ "Scissor", "Rock" ]
};

let winLoseTie = 0;

let player1Score = 0;

let player2Score = 0;

let player1Response = "";

let player2Response = "";

const ending = () =>
{
    rpsls.textContent = "Play Again?"
    gameTitle.textContent = ""
    endPopup.classList = "row2 endScreen"
    gameMode.classList = "endOpacity";
    rpsls.classList = "endOpacity playAgain";
    endCenter.classList = "endCenter"
    rock.classList = "displayNone"
    paper.classList = "displayNone"
    scissor.classList = "displayNone"
    lizard.classList = "displayNone"
    spock.classList = "displayNone"
    yesBtn.classList = "";
    noBtn.classList = "";
}

const switchToPlayer2 = () =>
{
    player1.classList = "inactivePlayer";
    player2.classList = "activePlayer";
    player1Btns.classList = "displayNone";
    player2Btns.classList = "";
}

const switchToPlayer1 = () =>
{
    player1.classList = "activePlayer";
    player2.classList = "inactivePlayer";
    player1Btns.classList = "";
    player2Btns.classList = "displayNone";
}

const checkRoundWinner = (player1Response, player2Response) =>
{
    if ( winConditions[ player1Response ].includes( player2Response ) )
    {
        player1Score += 1;
    }else if ( winConditions[ player2Response ].includes( player1Response ) )
    {
        player2Score += 1;
    }else if ( player1Response === player2Response )
    {
        player1Score;
        player2Score;
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
        switchToPlayer1();
        player2Response = "Rock";
    });

paperBtn2.addEventListener( "click", async () =>
    {
        switchToPlayer1();
        player2Response = "Paper";
    });

scissorBtn2.addEventListener( "click", async () =>
    {
        switchToPlayer1();
        player2Response = "Scissor";
    });

lizardBtn2.addEventListener( "click", async () =>
    {
        switchToPlayer1();
        player2Response = "Lizard";
    });

spockBtn2.addEventListener( "click", async () =>
    {
        switchToPlayer1();
        player2Response = "Spock";
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