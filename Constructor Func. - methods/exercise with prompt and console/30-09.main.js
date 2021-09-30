/* 1. Build a function constructor called Question to describe a question. A question should include:
    a) question itself
    b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
    c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor function

3. Store questions all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task (to display question)).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct or not (Hint: write another method for this).

7. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

8. Be careful: after Task 7, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 7.

9. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this).

10. Display the score in the console. Use another method for this. */

(function() {
  function Question(question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
  }
  
  let Q1 = new Question ('What is the name of the capital of Germany ?', ['a : brussel', 'b : paris', 'c : berlin'], 'c' );
  let Q2 = new Question ('How many federated state are there in Germany ?', ['a : 15', 'b : 16', 'c : 17'], 'b' );
  let Q3 = new Question ('Is Berlin the best state in Germany ? ', ['a : definetely', 'b : not at all', 'c : meh!'], 'a' );
  let questions = [Q1 , Q2 , Q3];
  
  
  let indexNum = questions[Math.floor(Math.random() * questions.length)]; 
  
  Question.prototype.display = function() {
    console.log(indexNum.question , ...indexNum.answers);
  }

indexNum.display();

let result  = prompt("please print the correct answer!");

let point;
  Question.prototype.isAnswerCorrect = function() {
    point = point || 0;
    result == indexNum.correctAnswer ? console.log(`your answer is correct and your point is ${++point} `) : console.log(`your answer was wrong`);;
  }

indexNum.isAnswerCorrect();

  function nextQuestion () {
    indexNum = questions[Math.floor(Math.random() * questions.length)]; 
    indexNum.display();
    result  = prompt("please print the correct answer!");
    if (result !== 'exit') {
      indexNum.isAnswerCorrect()
      nextQuestion()
    }else{
      return;
    }
    
  }
  nextQuestion();
})()
