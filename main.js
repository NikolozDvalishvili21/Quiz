let correctCount = 0
let wrongCount = 0



// RIGHT OR WRONG
function updateScore() {
    document.getElementById('correctCount').innerText = `Correct: ${correctCount}`;
    document.getElementById('wrongCount').innerText = `Wrong: ${wrongCount}`;


    if (wrongCount >= 5) {
        document.querySelector('.texty').style.display = 'block'
        document.querySelector('.Main').style.display = 'none'
        document.querySelector('.right-wrong').style.display = 'none'

        var audio = new Audio('Sounds/Dj Air Horn Sound Effects.mp3')
        audio.play()

        setTimeout(function () {
            document.querySelector('.texty').style.display = 'none';
            document.querySelector('.Main').style.display = 'flex';
            document.querySelector('.right-wrong').style.display = 'flex';

            wrongCount = 0
            updateScore()


        }, 4000);
    }
}

// CORRECT ANSWERS
function showCorrectAnswer(button) {
    correctCount++
    updateScore()
    document.querySelector('.answers1').style.display = 'none';
    document.getElementById('nextQuestion').style.display = 'block';
    document.getElementById('nextQuestion').innerText = 'Correct! Next Question';

    // var audio = new Audio('Sounds/Dj Air Horn Sound Effects.mp3')
    // audio.play()
}

function showCorrectAnswer2(button) {
    correctCount++
    updateScore()
    document.querySelector('.answers2').style.display = 'none';
    document.getElementById('nextQuestion2').style.display = 'block';
    document.getElementById('nextQuestion2').innerText = 'Correct! Next Question';
}

function showCorrectAnswer3(button) {
    correctCount++
    updateScore()
    document.querySelector('.answers3').style.display = 'none';
    document.getElementById('nextQuestion3').style.display = 'block';
    document.getElementById('nextQuestion3').innerText = 'Correct! Next Question';
}

function showCorrectAnswer4(button) {
    correctCount++
    updateScore()
    document.querySelector('.answers4').style.display = 'none';
    document.getElementById('nextQuestion4').style.display = 'block';
    document.getElementById('nextQuestion4').innerText = 'Correct! Next Question';
}

function showCorrectAnswer5(button) {
    correctCount++
    updateScore()
    document.querySelector('.answers5').style.display = 'none';
    document.getElementById('nextQuestion5').style.display = 'block';
    document.getElementById('nextQuestion5').innerText = 'Correct! Next Question';
}

function showCorrectAnswer6(button) {
    correctCount++
    updateScore()
    document.querySelector('.answers6').style.display = 'none';
    document.getElementById('nextQuestion6').style.display = 'block';
    document.getElementById('nextQuestion6').innerText = 'Correct! Next Question';
}


// WRONG ANSWERS
function wrongAnswer(button) {
    if (showCorrectAnswer != wrongAnswer) {
        wrongCount++
        updateScore()
        // button.style.borderColor = 'red'
        document.querySelector('.answers1').style.display = 'none';
        document.getElementById('retryQuestion').style.display = 'block';
        document.getElementById('retryQuestion').innerText = 'Incorrect! Try Again';
    }
}

function wrongAnswer2(button) {
    if (showCorrectAnswer2 != wrongAnswer2) {
        wrongCount++
        updateScore()
        // button.style.borderColor = 'red'
        document.querySelector('.answers2').style.display = 'none';
        document.getElementById('retryQuestion2').style.display = 'block';
        document.getElementById('retryQuestion2').innerText = 'Incorrect! Try Again';
    }
}

function wrongAnswer3(button) {
    if (showCorrectAnswer3 != wrongAnswer3) {
        wrongCount++
        updateScore()
        // button.style.borderColor = 'red'
        document.querySelector('.answers3').style.display = 'none';
        document.getElementById('retryQuestion3').style.display = 'block';
        document.getElementById('retryQuestion3').innerText = 'Incorrect! Try Again';
    }
}

function wrongAnswer4(button) {
    if (showCorrectAnswer4 != wrongAnswer4) {
        wrongCount++
        updateScore()
        // button.style.borderColor = 'red'
        document.querySelector('.answers4').style.display = 'none';
        document.getElementById('retryQuestion4').style.display = 'block';
        document.getElementById('retryQuestion4').innerText = 'Incorrect! Try Again';
    }
}

function wrongAnswer5(button) {
    if (showCorrectAnswer5 != wrongAnswer5) {
        wrongCount++
        updateScore()
        // button.style.borderColor = 'red'
        document.querySelector('.answers5').style.display = 'none';
        document.getElementById('retryQuestion5').style.display = 'block';
        document.getElementById('retryQuestion5').innerText = 'Incorrect! Try Again';
    }
}

function wrongAnswer6(button) {
    if (showCorrectAnswer6 != wrongAnswer6) {
        wrongCount++
        updateScore()
        // button.style.borderColor = 'red'
        document.querySelector('.answers6').style.display = 'none';
        document.getElementById('retryQuestion6').style.display = 'block';
        document.getElementById('retryQuestion6').innerText = 'Incorrect! Try Again';
    }
}

// RETRY
function retry() {
    document.querySelector('.retry-question').style.display = 'none'
    document.querySelector('.answers1').style.display = 'grid'
}

function retry2() {
    document.querySelector('.retry-question2').style.display = 'none'
    document.querySelector('.answers2').style.display = 'grid'
}

function retry3() {
    document.querySelector('.retry-question3').style.display = 'none'
    document.querySelector('.answers3').style.display = 'grid'
}

function retry4() {
    document.querySelector('.retry-question4').style.display = 'none'
    document.querySelector('.answers4').style.display = 'grid'
}

function retry5() {
    document.querySelector('.retry-question5').style.display = 'none'
    document.querySelector('.answers5').style.display = 'grid'
}

function retry6() {
    document.querySelector('.retry-question6').style.display = 'none'
    document.querySelector('.answers6').style.display = 'grid'
}



// NEXT QUESTION
function nextQuestion() {
    document.querySelector('.body-style').style.display = 'none'
    document.querySelector('.answers1').style.display = 'none'

    var nextQuestion = document.querySelector('.body-style2');
    var nextAnswers = nextQuestion.querySelector('.answers2');

    nextQuestion.style.display = 'flex';
    nextAnswers.style.display = 'grid';

    document.querySelector('.next-question').style.display = 'block'
}

function nextQuestion2() {
    document.querySelector('.body-style2').style.display = 'none'
    document.querySelector('.answers2').style.display = 'none'

    var nextQuestion = document.querySelector('.body-style3');
    var nextAnswers = nextQuestion.querySelector('.answers3');

    nextQuestion.style.display = 'flex';
    nextAnswers.style.display = 'grid';

    document.querySelector('.next-question').style.display = 'block'
}

function nextQuestion3() {
    document.querySelector('.body-style3').style.display = 'none'
    document.querySelector('.answers3').style.display = 'none'

    var nextQuestion = document.querySelector('.body-style4');
    var nextAnswers = nextQuestion.querySelector('.answers4');

    nextQuestion.style.display = 'flex';
    nextAnswers.style.display = 'grid';

    document.querySelector('.next-question').style.display = 'block'
}

function nextQuestion4() {
    document.querySelector('.body-style4').style.display = 'none'
    document.querySelector('.answers4').style.display = 'none'

    var nextQuestion = document.querySelector('.body-style5');
    var nextAnswers = nextQuestion.querySelector('.answers5');

    nextQuestion.style.display = 'flex';
    nextAnswers.style.display = 'grid';

    document.querySelector('.next-question').style.display = 'block'
}

function nextQuestion5() {
    document.querySelector('.body-style5').style.display = 'none'
    document.querySelector('.answers5').style.display = 'none'

    var nextQuestion = document.querySelector('.body-style6');
    var nextAnswers = nextQuestion.querySelector('.answers6');

    nextQuestion.style.display = 'flex';
    nextAnswers.style.display = 'grid';

    document.querySelector('.next-question').style.display = 'block'
}

function nextQuestion6() {
    document.querySelector('.body-style6').style.display = 'none'
    document.querySelector('.answers6').style.display = 'none'

    var nextQuestion = document.querySelector('.body-style7');
    var nextAnswers = nextQuestion.querySelector('.answers7');

    nextQuestion.style.display = 'flex';
    nextAnswers.style.display = 'grid';

    document.querySelector('.next-question').style.display = 'block'
}

// TROLLS


function trollAnswer() {
    document.querySelector('.troll .wrong-ans').style.display = 'block';
    document.querySelector('.troll .corr').style.visibility = 'hidden';
}

function showCorrect() {
    document.querySelector('.troll .corr').style.visibility = 'visible';
    document.querySelector('.troll .wrong-ans').style.display = 'none';
}





