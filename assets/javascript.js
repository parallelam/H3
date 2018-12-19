// Problem: Create a list of answers.
// Problem: Have CPU select word randomly.
// Problem: Create blanks based on length of word selected.
// Problem: Gather players inputs.
// Problem: Check player input for correctness.
    // If right push to Correct array.
    // If wrong push to Wrong array.


const teams = ["Patriots", "Ravens", "Redskins", "Jets", "Dolphins", "Cardinals", "Falcons", "Bills", "Panthers", "Bears", "Bengals", "Browns", "Cowboys", "Broncos", "Lions", "Packers", "Texans", "Colts", "Jaguars", "Chiefs", "Chargers", "Rams", "Vikings", "Saints", "Giants", "Raiders", "Eagles", "Steelers", "49ers", "Seahawks", "Buccaneers", "Titans"];
var random = Math.floor(Math.random() * teams.length);
var teamChoice = teams[random];
var underscores = [];
console.log(teamChoice);

let createUnderscores = () => {
    for (let i = 0; i < teamChoice.length; i++) {
        underscores.push("_");
    }
    return underscores;
}

console.log(createUnderscores());
document.addEventListener("keypress", (event) => {
    console.log(event);
});