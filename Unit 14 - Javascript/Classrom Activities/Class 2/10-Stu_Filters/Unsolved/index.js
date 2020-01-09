// @TODO: Uncomment the following file and complete the code
//        according to the instructions in README.md.

// Roster of player
 var roster = [{
   name: "Doug",
   position: "Quarterback",
   madeTeam: true
 },
 {
   name: "Antonio",
   position: "Tight End",
   madeTeam: true
 },
 {
   name: "Nick",
   position: "Kicker",
   madeTeam: false
 },
 {
   name: "Ereck",
   position: "Offensive Live",
   madeTeam: false
 },
 {
   name: "AJ",
   position: "Line Backer",
   madeTeam: true
 }];

// YOUR CODE HERE
teamnum = 0;
yesteamnum = 0;
function madeteam(team) {
    return team.madeTeam === true
};

console.log(roster.filter(madeteam))