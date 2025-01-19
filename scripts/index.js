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