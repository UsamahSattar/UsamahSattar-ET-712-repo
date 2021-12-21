(function(){
  function buildQuiz(){
   
    const output = [];

   
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

       
        const answers = [];

      
        for(letter in currentQuestion.answers){

         
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );

    
    quizContainer.innerHTML = output.join('');
  }

  function showResults(){

    
    const answerContainers = quizContainer.querySelectorAll('.answers');

    
    let numCorrect = 0;

    
    myQuestions.forEach( (currentQuestion, questionNumber) => {

  
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    
      if(userAnswer === currentQuestion.correctAnswer){
   
        numCorrect++;

       
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      
      else{
       
        answerContainers[questionNumber].style.color = 'red';
      }
    });

    
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [
    {
      question: "Convert below 3 temperatures Fahrenheit to Celsius 32°F, 0°F, 90°F",
      answers: {
        a: "13,-57.78,99.2",
        b: "10,2,7",
        c: "0,-17.7778,32.22222"
      },
      correctAnswer: "c"
    },
    {
      question: "Convert below 3 temperatures Fahrenheit to Celsius 27°F",
      answers: {
        a: "2",
        b: "41",
        c: "-2.77778"
      },
      correctAnswer: "c"
    },
    {
      question: "Convert below 3 temperatures Fahrenheit to Celsius 18°F",
      answers: {
        a: "2",
        b: "-6",
        c: "-114",
        d: "-7.77778"
      },
      correctAnswer: "d"
    }
  ];

 
  buildQuiz();

  
  submitButton.addEventListener('click', showResults);
})();