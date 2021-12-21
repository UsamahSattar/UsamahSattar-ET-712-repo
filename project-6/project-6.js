//function to calculate average of 3 scores
let calcAverage = (score1,score2,score3) => {
  return (score1+(score2+score3))/3;
}

//function to check winner
function checkWinner(avgNets, avgKnicks) {
  if(avgNets>avgKnicks)
  {
        //team is winner when it has more than double score of the another team
        if(avgNets>=2*avgKnicks)
    {
        console.log("Nets win ("+avgNets+" vs. "+avgKnicks+")");
    }
  }
  else if(avgNets<=2*avgKnicks)
  {
        console.log("Knicks win ("+avgKnicks+" vs. "+avgNets+")");
  }
  else
  {
                //if no one wins
        console.log("No one Wins!!");
  }
}

//calculate average of both teams using calcAverage function

let avgNets=calcAverage(44,23,71);
let avgKnicks=calcAverage(65,54,49);
//print result of game on console
console.log(checkWinner(avgNets,avgKnicks));




//function to calculate BMI
function CalculateBMI(mass,height)
{
        return mass/(height*height);
}

//store 2 person's data in variable

let lucas_weight=78;
let lucas_height=1.69;
let john_weight=92;
let john_height=1.92;

//calculate BMI using CalculateBMI function
let lucas_bmi=CalculateBMI(lucas_weight,lucas_height);
let john_bmi=CalculateBMI(john_weight,john_height);

//compare it and print result
if(lucas_bmi>john_bmi)
{
        console.log("Lucas' BMI "+lucas_bmi+" is higher than John's BMI "+john_bmi);
}
else
{
        console.log("Lucas' BMI "+lucas_bmi+" is lower than John's BMI "+john_bmi);
}





//calculate BMI using arrow function
let calculate_bmi=(mass,height)=>{
        return mass/(height*height);
}

//compare bmi of both using ternary operator ans store result
var ans=(lucas_bmi>john_bmi)?"Lucas' BMI "+lucas_bmi+" is higher than John's BMI "+john_bmi :
                                                        "Lucas' BMI "+lucas_bmi+" is lower than John's BMI "+john_bmi ;
console.log(ans);

</script>

</body>
</html>