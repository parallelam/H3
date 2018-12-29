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
// Problem: Establish 3 different difficulties: easy, which allows 5 incorrect guesses; normal, which allows 3 incorrect guesses; hard, which allows 0 incorrect guesses.  -Incomplete. 
// Problem: Figure out a more efficient way to handle function 'displayTeamLogo' instead of 32 individual 'if' conditions.  -Incomplete.

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
    displayTeamLogo();
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

function displayTeamLogo(){
    if (teamChosen === '49ers') {
        document.getElementById('teamLogo').innerHTML = '<img src=\"assets/images/49ers.png\" alt=\"San Francisco 49ers\">';
    } 
    if (teamChosen === 'bears') {
        document.getElementById('teamLogo').innerHTML = '<img src=\"assets/images/bears.png\" alt=\"Chicago Bears\">';
    } 
    if (teamChosen === 'bengals') {
        document.getElementById('teamLogo').innerHTML = '<img src=\"assets/images/bengals.png\" alt=\"Cincinnati Bengals\">';
    } 
    if (teamChosen === 'bills') {
        document.getElementById('teamLogo').innerHTML = '<img src=\"assets/images/bills.png\" alt=\"Buffalo Bills\">';
    }
    if (teamChosen === 'broncos') {
        document.getElementById('teamLogo').innerHTML = '<img src=\"assets/images/broncos.png\" alt=\"Denver Broncos\">';
    }
    if (teamChosen === 'browns') {
        document.getElementById('teamLogo').innerHTML = '<img src=\"assets/images/browns.gif\" alt=\"Cleveland Browns\">';
    }
    if (teamChosen === 'buccaneers') {
        document.getElementById('teamLogo').innerHTML = '<img src=\"assets/images/buccaneers.png\" alt=\"Tampa Bay Buccaneers\">';
    }
    if (teamChosen === 'cardinals') {
        document.getElementById('teamLogo').innerHTML = '<img src=\"assets/images/cardinals.png\" alt=\"Arizona Cardinals\">';
    }
    if (teamChosen === 'chargers') {
        document.getElementById('teamLogo').innerHTML = '<img src=\"assets/images/chargers.png\" alt=\"Los Angeles Chargers\">';
    }
    if (teamChosen === 'chiefs') {
        document.getElementById('teamLogo').innerHTML = '<img src=\"assets/images/chiefs.png\" alt=\"Kansas City Chiefs\">';
    }
    if (teamChosen === 'colts') {
        document.getElementById('teamLogo').innerHTML = '<img src=\"assets/images/colts.png\" alt=\"Indianapolis Colts\">';
    }
    if (teamChosen === 'cowboys') {
        document.getElementById('teamLogo').innerHTML = '<img src=\"assets/images/cowboys.png\" alt=\"Dallas Cowboys\">';
    }
    if (teamChosen === 'dolphins') {
        document.getElementById('teamLogo').innerHTML = '<img src=\"assets/images/dolphins.png\" alt=\"Miami Dolphins\">';
    }
    if (teamChosen === 'eagles') {
        document.getElementById('teamLogo').innerHTML = '<img src=\"assets/images/eagles.png\" alt=\"Philadelphia Eagles\">';
    }
    if (teamChosen === 'falcons') {
        document.getElementById('teamLogo').innerHTML = '<img src=\"assets/images/falcons.png\" alt=\"Atlanta Falcons\">';
    }
    if (teamChosen === 'giants') {
        document.getElementById('teamLogo').innerHTML = '<img src=\"assets/images/giants.gif\" alt=\"New York Giants\">';
    }
    if (teamChosen === 'jaguars') {
        document.getElementById('teamLogo').innerHTML = '<img src=\"assets/images/jaguars.png\" alt=\"Jacksonville Jaguars\">';
    }
    if (teamChosen === 'jets') {
        document.getElementById('teamLogo').innerHTML = '<img src=\"assets/images/jets.png\" alt=\"New York Jets\">';
    }
    if (teamChosen === 'lions') {
        document.getElementById('teamLogo').innerHTML = '<img src=\"assets/images/lions.png\" alt=\"Detroit Lions\">';
    }
    if (teamChosen === 'packers') {
        document.getElementById('teamLogo').innerHTML = '<img src=\"assets/images/packers.png\" alt=\"Green Bay Packers\">';
    }
    if (teamChosen === 'panthers') {
        document.getElementById('teamLogo').innerHTML = '<img src=\"assets/images/panthers.png\" alt=\"Carolina Panthers\">';
    }
    if (teamChosen === 'patriots') {
        document.getElementById('teamLogo').innerHTML = '<img src=\"assets/images/patriots.png\" alt=\"Best Team in the NFL. TB12 Numba Wun.\">';
    }
    if (teamChosen === 'raiders') {
        document.getElementById('teamLogo').innerHTML = '<img src=\"assets/images/raiders.png\" alt=\"Oakland Raiders\">';
    }
    if (teamChosen === 'rams') {
        document.getElementById('teamLogo').innerHTML = '<img src=\"assets/images/rams.png\" alt=\"Los Angeles Rams\">';
    }
    if (teamChosen === 'ravens') {
        document.getElementById('teamLogo').innerHTML = '<img src=\"assets/images/ravens.png\" alt=\"Baltimore Ravens\">';
    }
    if (teamChosen === 'redskins') {
        document.getElementById('teamLogo').innerHTML = '<img src=\"assets/images/redskins.png\" alt=\"Washington Redskins\">';
    }
    if (teamChosen === 'saints') {
        document.getElementById('teamLogo').innerHTML = '<img src=\"assets/images/saints.png\" alt=\"New Orleans Saints\">';
    }
    if (teamChosen === 'seahawks') {
        document.getElementById('teamLogo').innerHTML = '<img src=\"assets/images/seahawks.png\" alt=\"Seattle Seahawks\">';
    }
    if (teamChosen === 'steelers') {
        document.getElementById('teamLogo').innerHTML = '<img src=\"assets/images/steelers.png\" alt=\"Worst Team in the NFL. Patriots Numba Wun Stunnas.\">';
    }
    if (teamChosen === 'texans') {
        document.getElementById('teamLogo').innerHTML = '<img src=\"assets/images/texans.png\" alt=\"Houston Texans\">';
    }
    if (teamChosen === 'titans') {
        document.getElementById('teamLogo').innerHTML = '<img src=\"assets/images/titans.png\" alt=\"Tennessee Titans\">';
    }
    if (teamChosen === 'vikings') {
        document.getElementById('teamLogo').innerHTML = '<img src=\"assets/images/vikings.png\" alt=\"Minnesota Vikings\">';
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