const getData = async () =>
{
    const response = await fetch( "https://rockpaperscissorlizardspock-ebcdd0hpg0aqg3h3.westus-01.azurewebsites.net/rpsls/rpsls" );
    const data = await response.text();
    console.log( data );
    return data;
}

const winConditions =
{
    "Rock": [ "Scissor", "Lizard" ],
    "Paper": [ "Rock", "Spock" ],
    "Scissor": [ "Paper", "Lizard" ],
    "Lizard": [ "Spock", "Paper" ],
    "Spock": [ "Scissor", "Rock" ]
};

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

export { getData, winConditions, ending, switchToPlayer1, switchToPlayer2 };