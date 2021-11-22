// You've been given stub code for a program that has the information about the score of a football game. 
//Your job is to use that information to help determine the score of the game. 
//Scoring information has been noted via alpha characters, rather than by their point value.
//
// Here are the point values for each leter option in the list

// t -> 6
// e -> 1
// f -> 3
// s => 2

let t = 6
let e = 1
let f = 3
let s = 2

// ✅ First each value for the scoring needed to be defined
// each value was a string and the strings were not defined

//team1 = ["t","e","t","f","f","s"]

//team2 = ["f","f","f","t","e","t","e","f"]

let team1 = [t,e,t,f,f,s]

let team2 = [f,f,f,t,e,t,e,f]

//Then declared the sum of points from the index of team1 for team 1 usinig team1_sum

let team1_sum = 0 

for ( var i = 0; i < team1.length; i++) {
  // write code under this line to calculate score for team 1
  team1_sum =  team1_sum +  team1[i]
}
//by setting the value of i = 0 I initialized the index of the array. I made my condition i is less than the length of the array of team1 and set it to add in increments of 1
let team2_sum = 0 
//I just repeated the same steps I used for team1
for ( var i = 0; i < team2.length; i++) {
  // write code under this line to calculate score for team 1
  team2_sum = team2_sum + (team2[i])

}



// write code under this comment block to determine who the winner is. You should display the follwing:
// "Game Score: *team1 score* - *team2 score*. *Winning Team* Wins!"
// ex. "Game Score: 45 - 22. Team 1 Wins!

let winning_team = ""

if (team1_sum > team2_sum)
   winning_team = "Team 1"

else 
   winning_team = "Team 2"




console.log("Game Score: " + team1_sum + " - " +team2_sum +". " + winning_team + " Wins!")
