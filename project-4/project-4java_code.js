//Question A part 1 (celsius to fahrenheit)
var celsius=19; //storing temperature in celsius
//converting to fahrenheit (formula: C*(9/5) + 32) and displaying using template literals 
console.log(`It’s getting colder! Let’s cover the temperature here, $ {celsius} °C is $ {((celsius*(9/5))+32)} °F`);

//Question A part 2 (fahrenheit to celsius)
var fahren=100;
console.log(`It’s getting colder! Let’s cover the temperature here, $ {fahren} °F is $ {((fahren-32)*(5/9))} °C`);// JavaScript Document
//Question B (BMI)
//defining and storing BMI values of Lucas and John in two variables.

bmiLucas=24;
bmiJohn=22.5;


if(bmiLucas>bmiJohn) {
    console.log(`Lucas' BMI (${bmiLucas}) is higher than John's ($ {bmiJohn})!`);
} else {
    console.log(`John's BMI (${bmiJohn}) is higher than Lucas' ($ {bmiLucas})!`);
}
It’s getting colder! Let’s cover the temperature here, 19 °C is 66.2 °F
It’s getting colder! Let’s cover the temperature here, 100 °F is 37.77777777777778 °C
Lucas' BMI (24) is higher than John's (22.5)!
