"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 4

   Author: Chad Williams
   Date:   3.1.19
   
   Filename: vw_results.js
   
   Functions:
   
   The calcSum() function is a callback function used to
   calculte the total value from items within an array
   
   The calcPercent(value, sum) function calculates the percentage given
   a value and a sum
   
   The createBar(partyType, percent) function writes a different
   table data table based on the candidates party affilication.
   
      
*/
/* Callback Function to calculate an array sum */
function calcSum(value) {
    totalVotes += value;
}

/* Function to calculate a percentage */
function calcPercent(value, sum) {
    return (100 * value / sum);
}

// step 5, creates a var, inserts html text string and in the middle is the value of raceTitle
var reportHTML = "<h1>" + raceTitle + " </h1>"
// step 5, creates a for loop for each item in the race array
for (var i = 0; i < race.length; i++) {
    // step 5a creates a var equaling 0 
    var totalVotes = 0;
    // step 5b 
    votes[i].forEach(calcSum);
    // step 5c
    reportHTML += "<table><caption>" + race[i] + "</caption><tr><th>Candidate</th><th>Votes</th></tr>"
    // step 5 D
    reportHTML += candidateRows(i, totalVotes);
    // step 5 e
    reportHTML += "</table>";
}
document.getElementsByTagName("section")[0].innerHTML = reportHTML;
// step 8 creates candidateRows function
function candidateRows(raceNum, totalVotes) {
    // step 8 a
    var rowHTML = "";
    // step 8 b
    for (var j = 0; j <= 2; j++) {
        // step 8 b1
        var candidateName = candidate[raceNum][j];
        // step 8 b2
        var candidateParty = party[raceNum][j];
        // step 8 b3
        var candidateVotes = votes[raceNum][j];
        // step 8 b4
        var candidatePercent = calcPercent(candidateVotes, totalVotes);
        // step 8 b5
        rowHTML += "<tr> <td>" + candidateName + "(" + candidateParty + ")</td> <td>" + candidateVotes.toLocaleString() + "(" + candidatePercent.toFixed(1) + ")</td>";
        // step 12
        for (var k = 0; k < candidatePercent; k++) {
            rowHTML += createBar(candidateParty, candidatePercent);
        }
        rowHTML += "</tr>";
    }
    // step 8 c
    return rowHTML;
}

// step 10
function createBar(partyType) {
    // step 10 a
    var barHTML = "";
    // step 10 b
    switch (partyType) {
        case "D":
            // code block
            barHTML = "<td class='dem'></td>"
            break;
        case "R":
            // code block
            barHTML = "<td class='rep'></td>"
            break;
        case "I":
            // code block
            barHTML = "<td class='ind'></td>"
            break;
    }
    return barHTML;
}