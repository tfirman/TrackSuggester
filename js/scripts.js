//business logic
function findBestResult (answers) {
  var firstAnswers = 0;
  var secondAnswers = 0;
  var thirdAnswers = 0;
  for (var i = 0; i<5; i++){
    if (answers[i][0]==="a") {firstAnswers++};
    if (answers[i][0]==="b") {secondAnswers++};
    if (answers[i][0]==="c") {thirdAnswers++};
  };
  if(firstAnswers >2) {var result = ["result1"]}
  else if (secondAnswers >2) {var result = ["result2"]}
  else if (thirdAnswers >2) {var result = ["result3"]}
  else {
    var result = [];
    if(firstAnswers === 2) {result.push("result1")};
    if(secondAnswers === 2) {result.push("result2")};
    if(thirdAnswers === 2) {result.push("result3")};
  };
  console.log (result);
};

// user interface logic
$(document).ready(function() {
  $("form#questionnaire").submit(function(event) {
    event.preventDefault();
    var answers = [];
    answers.push ($("input:radio[name=qone]:checked").val());
    answers.push ($("input:radio[name=qtwo]:checked").val());
    answers.push ($("input:radio[name=qthree]:checked").val());
    answers.push ($("input:radio[name=qfour]:checked").val());
    answers.push ($("input:radio[name=qfive]:checked").val());
    findBestResult(answers);

  });
});
