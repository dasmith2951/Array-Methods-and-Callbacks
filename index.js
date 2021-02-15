import { fifaData } from './fifa.js';

// ⚽️ M  V P ⚽️ //

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Practice accessing data by console.log-ing the following pieces of data note, you may want to filter the data first 😉*/

//(a) Home Team name for 2014 world cup final

let finalsA = fifaData.filter((item) => {

    return item.Year === 2014 && item.Stage === "Final";

})

finalsA;

console.log(finalsA[0]["Home team Name"])

//(b) Away Team name for 2014 world cup final

let finalsB = fifaData.filter((item)=> {

    return item.Year === 2014 && item.Stage === "Final";

});

finalsB;

console.log(finalsB[0]["Away Team name"]);

//(c) Home Team goals for 2014 world cup final

let finalsC = fifaData.filter((item)=> {

    return item.Year === 2014 && item.Stage === "Final";

});

finalsC;

console.log(finalsC[0]["Home Team goals"]);

//(d) Away Team goals for 2014 world cup final

let finalsD = fifaData.filter((item)=> {

    return item.Year === 2014 && item.Stage === "Final";

});

finalsD;

console.log(finalsD[0]["Away Team goals"]);

//(e) Winner of 2014 world cup final */

let finalsE = fifaData.filter((item)=> {

    return item.Year === 2014 && item.Stage === "Final";

});

finalsE;

console.log(finalsE[0]['Win conditions']);

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use getFinals to do the following:
1. Receive data as a parameter
2. Return an array of objects with the data of the teams that made it to the final stage

hint - you should be looking at the stage key inside of the objects
*/

function getFinals(T2data) {
   
    return T2data.filter((getFinal) => {

        return getFinal.Stage === "Final";

    })

}

console.log(getFinals);

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function called getYears to do the following: 
1. Receive an array
2. Receive a callback function getFinals from task 2 
3. Return an array called years containing all of the years in the getFinals data set*/

function getYears(T3array, T3finals) {
    
    return T3finals(T3array).map((getFinal) => {

        return getFinal.Year;

    })

}

console.log(getYears);

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function getWinners to do the following:  
1. Receives an array
2. Receives the callback function getFinals from task 2 
3. Determines the winner (home or away) of each `finals` game. 
4. Returns the names of all winning countries in an array called `winners` */ 

function getWinners(T3array, T3finals) {
    
    let T4array = T3finals(T3array);
    let winners = [];

    T4array.forEach(element => {

        if (element ["Home Team Goals"] > element ["Away Team Goals"]) {

            winners.push(element ["Home Team Name"])

        } else {

            winners.push(element ["Away Team Name"])

        }

    });

    return winners;
    
}

console.log(getWinners);

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use the higher-order function getWinnersByYear to do the following:
1. Receive an array
2. Receive a callback function getYears from task 3
3. Receive a callback function getWinners from task 4
4. Return an array of strings that say "In {year}, {country} won the world cup!" 

hint: the strings returned need to exactly match the string in step 4.
*/

function getWinnersByYear(fifaData, getYears, getWinners) {
    
    let year = getYears(fifaData);
    let winners = getWinners(fifaData);
    let T5Array = [];

    for (let i = 0; i < winners.length; i++) {

        T5Array.push(`In ${year[i]}, ${winners[i]} won the world cup!`);

    }

    return T5Array;

}

console.log(getWinnersByYear);

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher order function getAverageGoals to do the following: 
 1. Receive the callback function getFinals from task 2 ensure you pass in the data as an argument
 2. Return the the average number of the total home team goals and away team goals scored per match and round to the second decimal place. 
 
 (Hint: use .reduce and do this in 2 steps) 
 
 Example of invocation: getAverageGoals(getFinals(fifaData));
*/

function getAverageGoals(T6finalsCallback) {
   
    let T6homeTotal = T6finalsCallback.reduce((total, item) => {
        return total + item["Home Team Goals"]
    }, 0)

    let T6awayTotal = T6finalsCallback.reduce((total, item) => {
        return total + item["Away Team Goals"]
    }, 0)

    return ((T6homeTotal / T6finalsCallback.length) + (T6awayTotal / T6finalsCallback.length)).toFixed(2);
}

console.log(getAverageGoals);


/// 🥅 STRETCH 🥅 ///

/* 💪💪💪💪💪 Stretch 1: 💪💪💪💪💪 
Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

}



/* 💪💪💪💪💪 Stretch 2: 💪💪💪💪💪 
Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

}


/* 💪💪💪💪💪 Stretch 3: 💪💪💪💪💪
Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

}


/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */


/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo(){
    console.log('its working');
    return 'bar';
}
export default{
    foo,
    getFinals,
    getYears,
    getWinners,
    getWinnersByYear,
    getAverageGoals
}
