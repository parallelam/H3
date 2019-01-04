// Problem: Create a list of NFL teams as constants.  -Complete.
// Problem: Create a list of the alphabet as variables to be associated with user keystrokes.  -Complete.
// Problem: Have CPU select team randomly.  -Complete.
// Problem: Create underscores based on letter length of team selected by CPU.  -Complete.
// Problem: Collect and store player letter/click inputs.  -Complete.
// Problem: Compare player input to randomly selected team name for correctness.  -Complete.
// Problem: Deduct guessesLeft for erroneous inputs.  -Complete.
// Problem: Juxtapose corresponding team logo with randomly selected team.  -Complete.
// Problem: Track user wins, losses and have continuation round-over-round.  -Complete.
// Problem: Push player inputs, team name length, erroneous answers, logo, etc, to corresponding HTML elements.  -Complete.
// Problem: Figure out how to address team names that have duplicate letters; ie 'broncos' has two 'o's.  -Complete.
// Problem: Incorporate a reset CSS to clear any pre-existing user page formatting.  -Complete.
// Problem: Incorporate a selectable "nightmode" option that overrides Bootstrap with custom CSS that makes the background a dark, night time friendly color.  -Complete.
// Problem: Figure out a more efficient way to handle function 'displayTeamLogo' instead of 32 individual 'if' conditions.  -Complete.
// Problem: Establish 3 different difficulties: easy, which allows 5 incorrect guesses; normal, which allows 3 incorrect guesses; hard, which allows 0 incorrect guesses.  -Incomplete. 

var doubleLetter = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var teams = ['49ers', 'bears', 'bengals', 'bills', 'broncos', 'browns', 'buccaneers', 'cardinals', 'chargers', 'chiefs', 'colts', 'cowboys', 'dolphins', 'eagles', 'falcons', 'giants', 'jaguars', 'jets', 'lions', 'packers',  'panthers', 'patriots', 'raiders', 'rams', 'ravens', 'redskins', 'saints', 'seahawks', 'steelers', 'texans', 'titans', 'vikings'];
var teamChosen = '';
var lettersInName = [];
var numBlanks = 0;
var blanksAndSuccesses =[];
var wrongLetters = [];
var winCount = 0;
var loseCount = 0;
var rightGuessCounter = 0;
var guessesLeft = 3;

function reset(){
    teamChosen = teams[Math.floor(Math.random() * teams.length)];
    lettersInName = teamChosen.split('');
    numBlanks = lettersInName.length;
    letterGuessed = 0;
    rightGuessCounter = 0;
	guessesLeft = 3;
    wrongLetters =[];
    blanksAndSuccesses =[];
    doubleLetter = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    test=false;
    startGame();
}

function startGame() {
    teamChosen = teams[Math.floor(Math.random() * teams.length)];
    lettersInName = teamChosen.split('');
    numBlanks = lettersInName.length;
    rightGuessCounter = 0;
	guessesLeft = 3;
    wrongLetters =[];
    blanksAndSuccesses =[];
    doubleLetter = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    for(var i = 0; i < numBlanks; i++) {
        blanksAndSuccesses.push('_');
		document.getElementById('teamToGuess').innerHTML = blanksAndSuccesses;
    }
    document.getElementById('teamToGuess').innerHTML = blanksAndSuccesses.join(' ');
	document.getElementById('numGuesses').innerHTML = guessesLeft;
	document.getElementById('winCounter').innerHTML = winCount;
	document.getElementById('lossCounter').innerHTML = loseCount;
    document.getElementById('wrongGuesses').innerHTML = wrongLetters;
    document.getElementById('teamLogo').innerHTML = '<img src=\"assets/images/'+teamChosen+'.png\">';
    console.log(teamChosen);
}

function compareLetters(userKey) {
    if(teamChosen.indexOf(userKey) > -1) {
        for(var i = 0; i < numBlanks; i++) {
            if(lettersInName[i] === userKey){
                rightGuessCounter++;
                blanksAndSuccesses[i] = userKey;
                document.getElementById('teamToGuess').innerHTML = blanksAndSuccesses.join(' ');
            }
        }
    } else {
        wrongLetters.push(userKey);
		guessesLeft--;
		document.getElementById('numGuesses').innerHTML = guessesLeft;
		document.getElementById('wrongGuesses').innerHTML = wrongLetters;
    }
}

startGame();

function winLose() {
    if(rightGuessCounter === numBlanks) {
        winCount++;
        document.getElementById('winCounter').innerHTML = winCount;
		alert('You Win');
        reset();
    } else if(guessesLeft === 0) {
		loseCount++;
		document.getElementById('lossCounter').innerHTML = loseCount;
		alert('You Lose');
        reset();
	}
}

document.onkeyup = function(event) {
	test = true;
	var letterGuessed = event.key;
	for(var i = 0; i < doubleLetter.length; i++) {	
		if(letterGuessed === doubleLetter[i] && test === true) {
			var spliceDword = doubleLetter.splice(i,1);
			console.log('Double word is = ' + doubleLetter[i])
			console.log('Spliced Word is = ' + spliceDword);
			compareLetters(letterGuessed);
			winLose();
		}
	}		
}

// Lines for JavaScript code to create buttons for toggling difficulties that was not completed.
// document.querySelector('.easy').innerHTML = "Set to Easy Mode";
// document.querySelector('.normal').innerHTML = "Set to Normal Mode";
// document.querySelector('.hard').innerHTML = "Set to Hard Mode";

document.querySelector('.js-change-theme').innerHTML = "Switch to Night Display";
document
    .querySelector('.js-change-theme')
    .addEventListener('click', () => {
    const body = document.querySelector('body');
    if (body.classList.contains('t--light')) {
        body.classList.remove('t--light');
        body.classList.add('t--dark');
    } else {
        body.classList.remove('t--dark');
        body.classList.add('t--light');
    };
    if (body.classList.contains('t--light')){
        document.querySelector('.js-change-theme').innerHTML = 'Switch to Night Display';
    } else {
        document.querySelector('.js-change-theme').innerHTML = 'Switch to Day Display';
    }
})