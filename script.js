////////Js Fundamental part 1

//Coding challenge 1
/*
const MarkMass = 50;
const JohnMass = 65;
const MarkH = 5;
const JohnH = 5;

const MarkBMI = MarkMass / (MarkH ** 2);
const JohnBMI = JohnMass / (JohnH ** 2);
const markHigherBMI = MarkBMI > JohnBMI;
console.log(MarkBMI, JohnBMI, markHigherBMI);
*/

//Coding challenge 2:
/*
const MarkMass = 55;
const JohnMass = 65;
const MarkH = 5.6;
const JohnH = 5.9;

const MarkBMI = MarkMass / (MarkH * MarkH);
const JohnBMI = JohnMass / (JohnH * JohnH);
if (MarkBMI > JohnBMI) {
    console.log(`Mark BMI(${MarkBMI}) is Higher than John(${JohnBMI})!`);
}
else{
    console.log(`Johns BMI (${JohnBMI}) is Higher than Mark(${MarkBMI})!`)
}
*/

//Coding challenge 3
/*
const dolphins1=97;
const dolphins2=112;
const dolphins3=101;
let average1;
average1=(dolphins1+dolphins2+dolphins3)/3;
console.log(average1);
const average2=(109+95+123)/3;
console.log(average2);
if(average1>average2 && average1>=100){
    console.log('Dolphin is the boss');
}
 else if(average2>average1){
    console.log('Koalas is the hero');
}
 else if(average1===average1)
{
    console.log('Both are win');
}
 else{
    console.log('No one win');
}
*/

//Coding challenge 4
/*
const bill=275;
const tip= bill<=300 && bill>=50? bill*(15/100):bill*(20/100);
console.log(`The bill was ${bill}, the tip was ${tip}, The total was${bill + tip}`);
*/





///////Js Fundamentals Part 2




//Coding Chanllenge 1
/*

const calAvg = (a, b, c) =>(a+b+c)/3;
//Test 1
const scoredolphins = calAvg(44,23,71);
const scorekoalas = calAvg(65,54,49);
console.log(scoredolphins,scorekoalas);

const checkwinner = function(avgdolphins, avgkoalas){
    if(avgdolphins >= 2 * avgkoalas){
        console.log(`Dolphins win (${avgdolphins} vs. ${avgkoalas})`);
    } else if(avgkoalas >= 2 * avgdolphins){
        console.log(`Koalas win (${avgkoalas} vs. ${avgdolphins})`);
    } else {
        console.log('No team wins...');
    }
}
checkwinner(scoredolphins,scorekoalas);
checkwinner(111,300);

//Test 2
scoredolphinss = calAvg(85,54,41);
scorekoalass = calAvg(23,34,27);
console.log(scoredolphinss,scorekoalass);
checkwinner(scoredolphinss,scorekoalass);
*/

//Coding chanllenge 2
/*
const calcTip = bill => bill >=50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
const bills = [125,555,44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills , tips,totals);
*/

//Coding challenge 3
/*
const mark = {
    fullname: 'Mark Miller', 
    mass: 78,
    height: 1.69,
    calcBMI: function(){
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    } 
};

const john = {
    fullname: 'John Smith', 
    mass: 92,
    height: 1.95,
    calcBMI: function(){
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    } 
};

mark.calcBMI();
john.calcBMI();
console.log(mark.bmi, john.bmi);

if(mark.bmi > john.bmi){
    console.log(`${mark.fullname}'s BMI (${mark.bmi}) is higher than ${john.fullname}'s BMI (${john.bmi})`);
}else if(john.bmi > mark.bmi){
    console.log(`${john.fullname}'s BMI (${john.bmi}) is higher than ${mark.fullname}'s BMI (${mark.bmi})`);
}
*/

//Code challenge 4
/*
const calcTip = function(bill) {
    return bill >=50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
 

} 
const bills = [22,295,176,440,37,105,10,1100,86,52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++){
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

const calAvg = function(arr){
    let sum = 0;
    for (let i=0; i<arr.length; i++){
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(calAvg([2,3,7]));
console.log(calAvg(totals));
console.log(calAvg(tips));
*/
/*
"use strict";

const x = "23";
if(x === 23) console.log(23);


const calcage = (birthyear) => 2037 - birthyear;
console.log("jakir");
*/








