////Coding Challenge#1
/*
const game ={
    team1 : 'Bayern Munich',
    team2 : 'Borrussia Dortmund',
    players : [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score : '4:0',
    scored: ['Lewandowski', 'Gnarby','Lewandowski','Hummels'],
    date: 'Dec 25th, 2023',
    odds: {
        team1: 4.33,
        x: 3.25,
        team2: 6.5,
    },
};

//1
const [player1, player2] = game.players;
console.log(player1, player2);

//2
const [gk, ...fieldplayer] = player1;
console.log(gk, fieldplayer);

//3
const allplayers = [...player1, ...player2];
console.log(allplayers);

//4
const playersFinal = [...player1, 'Thiago', 'Coutinho', 'Peristic'];

//5
const {odds: {team1,x: draw,team2}} = game;
console.log(team1,draw,team2);

//6
const printGoals = function(...players){
    console.log(`${players.length} goals were scored`);
};
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich')

//7
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');

*/

///Coding Challenge #_2
/*
const game ={
    team1 : 'Bayern Munich',
    team2 : 'Borrussia Dortmund',
    players : [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score : '4:0',
    scored: ['Lewandowski', 'Gnarby','Lewandowski','Hummels'],
    date: 'Dec 25th, 2023',
    odds: {
        team1: 1.83,
        x: 2.25,
        team2: 4.5,
    },
};

//1
for (const [i, player] of game.scored.entries())
  console.log(`Goal ${i+1}: ${player}`);

//2
const odds = Object.values(game.odds);
let avg = 0;
for(const odd of odds) avg += odd;
avg /= odds.length;
console.log(avg);

//3
for (const [team,odd] of Object.entries(game.odds))
{
    const teamstr = team === 'x' ? 'draw' : `Victory ${game[team]}`;
    console.log(`Odd of ${teamstr} ${odd}`);

}
  
*/


///Coding Challlenge#_3
/*
const gameEvents = new Map([
    [17,'Goal'],
    [36,'Substitution'],
    [47, 'Goal'],
    [61, 'Substitution'],
    [64, 'Yellow card'],
    [69, 'Red card'],
    [70, 'Substitution'],
    [72, 'Substitution'],
    [76, 'Goal'],
    [80, 'Goal'],
    [92, 'Yellow card'],
]);

//1

const events = new Set(gameEvents.values());
console.log(events);

//2
gameEvents.delete(64);

//3
console.log(`An event happened, on average, every ${90/gameEvents.size} minuties`);


const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(`An event happened, on average, every ${time/gameEvents.size} minuties`);

//4
for(const [min, event] of gameEvents){
    const half = min <= 45 ? 'First' : 'Second';
    console.log(`[${half}Half] ${min} : ${event}`);
}

*/


///Coding Challlenge#_4
/*
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));


document.querySelector('button').addEventListener('click', function(){

    const text = document.querySelector('textarea').value;
    const rows = text.split('\n');
    
    for(const[i,row] of rows.entries()){
        const [first, second] = row.toLowerCase().trim().split('_');
        const output = `${first}${second.replace(
            second[0],
            second[0].toUpperCase()
            )}`;
        console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
     }
});

*/



