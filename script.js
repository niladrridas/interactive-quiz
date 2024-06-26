let score = 0;
let currentQuestion = 0;
let questions = [];
let username = '';
let timer;
let timeLeft = 30;
let hintText = '';

const categories = {
    coding: [
        { question: "What is the output of `console.log(2 + 2)`?", answer: "4", hint: "It's a basic JavaScript expression." },
        { question: "What keyword is used to declare a variable in JavaScript?", answer: "var", hint: "It's a JavaScript keyword." },
        { question: "What does HTML stand for?", answer: "HyperText Markup Language", hint: "It's a web technology." },
    ],
    physics: [
        { question: "What is the acceleration due to gravity on Earth?", answer: "9.8", hint: "It's approximately the acceleration of a free-falling object near the Earth's surface." },
        { question: "What is the formula for force?", answer: "F=ma", hint: "F is force, m is mass, and a is acceleration." },
        { question: "Who developed the theory of relativity?", answer: "Einstein", hint: "Albert Einstein, a famous physicist." },
    ],
    math: [
        { question: "What is 5 + 3?", answer: "8", hint: "Add the numbers together." },
        { question: "What is 12 - 4?", answer: "8", hint: "Subtract 4 from 12." },
        { question: "What is 9 + 10?", answer: "19", hint: "Add 9 and 10." },
    ]
};

function selectCategory(category) {
    questions = categories[category];
    $('#category-selection').hide();
    $('#username-container').show();
}

function startQuiz() {
    username = $('#username').val().trim();
    if (username === '') {
        alert('Please enter your name.');
        return;
    }
    $('#username-container').hide();
    $('#quiz').show();
    $('#username-display').text(`Welcome, ${username}!`);
    loadQuestion();
    startTimer();
    getHighScores();
}

function loadQuestion() {
    if (currentQuestion < questions.length) {
        $('#question').text(questions[currentQuestion].question);
        $('#answer').val('');
        $('#answer').focus();
        hintText = questions[currentQuestion].hint;
        $('.hint').text(`Hint: ${hintText}`);
        updateProgressBar();
    } else {
        $('#question').text('Quiz completed!');
        $('#answer').prop('disabled', true);
        $('#quiz button').prop('disabled', true);
        alert('Congratulations! You have completed the quiz.');
    }
}

function checkAnswer() {
    const userAnswer = $('#answer').val();
    if (userAnswer === questions[currentQuestion].answer) {
        score++;
        alert('Correct!');
    } else {
        alert('Incorrect. Inspect to check the answer.');
    }
    currentQuestion++;
    $('#score').text(`Score: ${score}`);
    loadQuestion();
}

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        $('.timer').text(`Timer: ${timeLeft}s`);
        if (timeLeft <= 0) {
            clearInterval(timer);
            alert('Time\'s up! You have completed the quiz.');
            $('#answer').prop('disabled', true);
            $('#quiz button').prop('disabled', true);
        }
    }, 1000);
}

function updateProgressBar() {
    const progressBarFill = $('.progress-bar-fill');
    const progress = (currentQuestion / questions.length) * 100;
    progressBarFill.css('width', `${progress}%`);
}

function getHighScores() {
    const highScores = localStorage.getItem('highScores');
    if (highScores) {
        const scores = JSON.parse(highScores);
        const highScoresList = $('#high-scores');
        scores.forEach((score) => {
            const listItem = $('<li>');
            listItem.text(`${score.username}: ${score.score}`);
            highScoresList.append(listItem);
        });
    }
}

function saveHighScore() {
    const highScores = localStorage.getItem('highScores');
    let scores = [];
    if (highScores) {
        scores = JSON.parse(highScores);
    }
    scores.push({ username, score });
    localStorage.setItem('highScores', JSON.stringify(scores));
}

$(window).on('unload', saveHighScore);
