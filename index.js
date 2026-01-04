/***********************
  QUESTIONS (Sample: 30, expand to 130+)
************************/
const ALL_CARDS = [
  // --- Math ---
  { q: "2 + 3 = ?", a: "5", category: "math", difficulty: "easy" },
  { q: "5 × 6 = ?", a: "30", category: "math", difficulty: "easy" },
  { q: "6 + 9 = ?", a: "15", category: "math", difficulty: "easy" },
  { q: "14 − 6 = ?", a: "8", category: "math", difficulty: "easy" },
  { q: "4 × 8 = ?", a: "32", category: "math", difficulty: "easy" },
  { q: "20 ÷ 4 = ?", a: "5", category: "math", difficulty: "easy" },
  { q: "Square of 6?", a: "36", category: "math", difficulty: "easy" },
  { q: "5 + 5 × 2 = ?", a: "15", category: "math", difficulty: "medium" },
  { q: "Square of 12?", a: "144", category: "math", difficulty: "medium" },
  { q: "What is 17 × 6?", a: "102", category: "math", difficulty: "hard" },
  { q: "7 + 8 = ?", a: "15", category: "math", difficulty: "easy" },
  { q: "12 − 5 = ?", a: "7", category: "math", difficulty: "easy" },
  { q: "9 × 3 = ?", a: "27", category: "math", difficulty: "easy" },
  { q: "45 ÷ 5 = ?", a: "9", category: "math", difficulty: "easy" },
  { q: "Square of 5?", a: "25", category: "math", difficulty: "easy" },
  { q: "15 + 27 = ?", a: "42", category: "math", difficulty: "medium" },
  { q: "18 + 24 = ?", a: "42", category: "math", difficulty: "medium" },
  { q: "9 × 11 = ?", a: "99", category: "math", difficulty: "medium" },
  { q: "72 ÷ 8 = ?", a: "9", category: "math", difficulty: "medium" },
  { q: "Square of 15?", a: "225", category: "math", difficulty: "medium" },
  { q: "30 × 7 = ?", a: "210", category: "math", difficulty: "medium" },
  { q: "144 ÷ 12 = ?", a: "12", category: "math", difficulty: "hard" },
  { q: "19 × 9 = ?", a: "171", category: "math", difficulty: "hard" },
  { q: "Square of 29?", a: "841", category: "math", difficulty: "hard" },
  { q: "256 ÷ 16 = ?", a: "16", category: "math", difficulty: "hard" },
  { q: "48 × 13 = ?", a: "624", category: "math", difficulty: "hard" },
  { q: "8 × 7 = ?", a: "56", category: "math", difficulty: "medium" },
  { q: "100 ÷ 4 = ?", a: "25", category: "math", difficulty: "medium" },
  { q: "Square of 14?", a: "196", category: "math", difficulty: "medium" },
  { q: "25 × 6 = ?", a: "150", category: "math", difficulty: "medium" },
  { q: "17 × 8 = ?", a: "136", category: "math", difficulty: "hard" },
  { q: "99 ÷ 3 = ?", a: "33", category: "math", difficulty: "hard" },
  { q: "Square of 23?", a: "529", category: "math", difficulty: "hard" },
  { q: "45 × 12 = ?", a: "540", category: "math", difficulty: "hard" },
  { q: "128 ÷ 8 = ?", a: "16", category: "math", difficulty: "hard" },

  // --- GK ---
  { q: "Capital of India?", a: "delhi", category: "gk", difficulty: "easy" },
  { q: "Largest planet?", a: "jupiter", category: "gk", difficulty: "medium" },
  { q: "Which country has the most population?", a: "china", category: "gk", difficulty: "hard" },
  { q: "First President of India?", a: "dr. rajendra prasad", category: "gk", difficulty: "medium" },
  { q: "Largest ocean on Earth?", a: "pacific", category: "gk", difficulty: "easy" },
  { q: "Which planet is closest to the sun?", a: "mercury", category: "gk", difficulty: "easy" },
  { q: "Currency of USA?", a: "dollar", category: "gk", difficulty: "easy" },
  { q: "Which animal is known as King of Jungle?", a: "lion", category: "gk", difficulty: "easy" },
  { q: "Largest country by area?", a: "russia", category: "gk", difficulty: "easy" },
  { q: "Capital of Japan?", a: "tokyo", category: "gk", difficulty: "easy" },
  { q: "National flower of India?", a: "lotus", category: "gk", difficulty: "easy" },
  { q: "Which planet has rings?", a: "saturn", category: "gk", difficulty: "easy" },
  { q: "Largest continent?", a: "asia", category: "gk", difficulty: "easy" },
  { q: "Currency of India?", a: "rupee", category: "gk", difficulty: "easy" },
  { q: "Father of the Nation (India)?", a: "mahatma gandhi", category: "gk", difficulty: "medium" },
  { q: "Capital of Canada?", a: "ottawa", category: "gk", difficulty: "medium" },
  { q: "Who invented electricity?", a: "benjamin franklin", category: "gk", difficulty: "medium" },
  { q: "Largest river in the world?", a: "nile", category: "gk", difficulty: "medium" },
  { q: "National sport of India?", a: "hockey", category: "gk", difficulty: "medium" },
  { q: "Capital of South Korea?", a: "seoul", category: "gk", difficulty: "hard" },
  { q: "First woman Prime Minister of India?", a: "indira gandhi", category: "gk", difficulty: "hard" },
  { q: "Which country gifted Statue of Liberty to USA?", a: "france", category: "gk", difficulty: "hard" },
  { q: "Longest river in Asia?", a: "yangtze", category: "gk", difficulty: "hard" },
  { q: "Which year did India get independence?", a: "1947", category: "gk", difficulty: "hard" },
  { q: "First man on the moon?", a: "neil armstrong", category: "gk", difficulty: "medium" },
  { q: "Which country won the 2018 FIFA World Cup?", a: "france", category: "gk", difficulty: "medium" },
  { q: "Who wrote 'Romeo and Juliet'?", a: "shakespeare", category: "gk", difficulty: "medium" },
  { q: "National bird of India?", a: "peacock", category: "gk", difficulty: "medium" },
  { q: "Capital of Australia?", a: "canberra", category: "gk", difficulty: "hard" },
  { q: "Heaviest land animal?", a: "elephant", category: "gk", difficulty: "hard" },
  { q: "Tallest mountain on Earth?", a: "everest", category: "gk", difficulty: "hard" },
  { q: "Largest desert in the world?", a: "sahara", category: "gk", difficulty: "hard" },
  { q: "Which year did World War 2 end?", a: "1945", category: "gk", difficulty: "hard" },

  // --- Science ---
  { q: "Water freezes at ___ °C?", a: "0", category: "science", difficulty: "easy" },
  { q: "Boiling point of water?", a: "100", category: "science", difficulty: "easy" },
  { q: "Humans breathe ___?", a: "oxygen", category: "science", difficulty: "easy" },
  { q: "What planet is known as Red Planet?", a: "mars", category: "science", difficulty: "medium" },
  { q: "What is H2O?", a: "water", category: "science", difficulty: "medium" },
  { q: "Which gas do plants produce?", a: "oxygen", category: "science", difficulty: "easy" },
  { q: "What is H2O?", a: "water", category: "science", difficulty: "easy" },
  { q: "State of water at 0°C?", a: "solid", category: "science", difficulty: "easy" },
  { q: "Which organ pumps blood?", a: "heart", category: "science", difficulty: "easy" },
  { q: "What do humans breathe in?", a: "oxygen", category: "science", difficulty: "easy" },
  { q: "Chemical symbol for gold?", a: "au", category: "science", difficulty: "medium" },
  { q: "Planet known as Red Planet?", a: "mars", category: "science", difficulty: "medium" },
  { q: "Gas needed for burning?", a: "oxygen", category: "science", difficulty: "easy" },
  { q: "Nearest star to Earth?", a: "sun", category: "science", difficulty: "easy" },
  { q: "Human brain is part of which system?", a: "nervous", category: "science", difficulty: "easy" },
  { q: "Which vitamin comes from sunlight?", a: "d", category: "science", difficulty: "easy" },
  { q: "Which organ helps in breathing?", a: "lungs", category: "science", difficulty: "easy" },
  { q: "Chemical symbol of iron?", a: "fe", category: "science", difficulty: "medium" },
  { q: "What force pulls objects to Earth?", a: "gravity", category: "science", difficulty: "medium" },
  { q: "Which blood cells fight disease?", a: "white blood cells", category: "science", difficulty: "medium" },
  { q: "Which planet has most moons?", a: "jupiter", category: "science", difficulty: "medium" },
  { q: "Unit of electric current?", a: "ampere", category: "science", difficulty: "medium" },
  { q: "pH value of pure water?", a: "7", category: "science", difficulty: "hard" },
  { q: "Hardest natural substance?", a: "diamond", category: "science", difficulty: "hard" },
  { q: "Main gas in Earth atmosphere?", a: "nitrogen", category: "science", difficulty: "hard" },
  { q: "What is DNA full form?", a: "deoxyribonucleic acid", category: "science", difficulty: "hard" },
  { q: "Largest organ in human body?", a: "skin", category: "science", difficulty: "hard" },
  { q: "Process of plants making food?", a: "photosynthesis", category: "science", difficulty: "medium" },
  { q: "Boiling point of alcohol?", a: "78", category: "science", difficulty: "medium" },
  { q: "Which organ filters blood?", a: "kidney", category: "science", difficulty: "medium" },
  { q: "Speed of light (km/s)?", a: "300000", category: "science", difficulty: "hard" },
  { q: "Atomic number of oxygen?", a: "8", category: "science", difficulty: "hard" },
  { q: "Largest planet in solar system?", a: "jupiter", category: "science", difficulty: "hard" },
  { q: "Smallest bone in human body?", a: "stapes", category: "science", difficulty: "hard" },
  { q: "Number of chromosomes in humans?", a: "46", category: "science", difficulty: "hard" },

  // ===== 100 MORE QUESTIONS (MULTI-DOMAIN) =====

// -------- COMPUTER SCIENCE (25) --------
{ q: "What does CPU stand for?", a: "central processing unit", category: "cs", difficulty: "easy" },
{ q: "Binary system uses how many digits?", a: "2", category: "cs", difficulty: "easy" },
{ q: "Full form of RAM?", a: "random access memory", category: "cs", difficulty: "easy" },
{ q: "Keyboard is an input or output device?", a: "input", category: "cs", difficulty: "easy" },
{ q: "Which device shows output?", a: "monitor", category: "cs", difficulty: "easy" },
{ q: "HTML is used for?", a: "creating web pages", category: "cs", difficulty: "medium" },
{ q: "CSS stands for?", a: "cascading style sheets", category: "cs", difficulty: "medium" },
{ q: "JavaScript is a ___ language?", a: "programming", category: "cs", difficulty: "medium" },
{ q: "Which memory is volatile?", a: "ram", category: "cs", difficulty: "medium" },
{ q: "What does OS stand for?", a: "operating system", category: "cs", difficulty: "medium" },
{ q: "Brain of the computer?", a: "cpu", category: "cs", difficulty: "hard" },
{ q: "Which language is closest to machine code?", a: "assembly", category: "cs", difficulty: "hard" },
{ q: "What does HTTP stand for?", a: "hypertext transfer protocol", category: "cs", difficulty: "hard" },
{ q: "Which data structure uses FIFO?", a: "queue", category: "cs", difficulty: "hard" },
{ q: "Which company developed Windows OS?", a: "microsoft", category: "cs", difficulty: "hard" },

// -------- SOCIAL SCIENCE (20) --------
{ q: "Study of society is called?", a: "sociology", category: "social", difficulty: "easy" },
{ q: "Study of human behavior?", a: "psychology", category: "social", difficulty: "easy" },
{ q: "Smallest unit of society?", a: "family", category: "social", difficulty: "easy" },
{ q: "Study of population?", a: "demography", category: "social", difficulty: "easy" },
{ q: "Who wrote the Indian Constitution?", a: "b r ambedkar", category: "social", difficulty: "medium" },
{ q: "Father of sociology?", a: "auguste comte", category: "social", difficulty: "medium" },
{ q: "Main occupation in rural areas?", a: "agriculture", category: "social", difficulty: "medium" },
{ q: "Study of economics deals with?", a: "resources", category: "social", difficulty: "medium" },
{ q: "Who is known as Iron Man of India?", a: "sardar patel", category: "social", difficulty: "hard" },
{ q: "What is social stratification?", a: "division of society", category: "social", difficulty: "hard" },
{ q: "Author of Arthashastra?", a: "chanakya", category: "social", difficulty: "hard" },
{ q: "What is secularism?", a: "equal respect for all religions", category: "social", difficulty: "hard" },

// -------- POLITICAL SCIENCE (20) --------
{ q: "Head of state of India?", a: "president", category: "political", difficulty: "easy" },
{ q: "Head of government of India?", a: "prime minister", category: "political", difficulty: "easy" },
{ q: "How many houses in Indian Parliament?", a: "2", category: "political", difficulty: "easy" },
{ q: "Voting age in India?", a: "18", category: "political", difficulty: "easy" },
{ q: "Lower house of Parliament?", a: "lok sabha", category: "political", difficulty: "medium" },
{ q: "Upper house of Parliament?", a: "rajya sabha", category: "political", difficulty: "medium" },
{ q: "Tenure of Lok Sabha?", a: "5 years", category: "political", difficulty: "medium" },
{ q: "Who appoints the Prime Minister?", a: "president", category: "political", difficulty: "medium" },
{ q: "Guardian of Indian Constitution?", a: "supreme court", category: "political", difficulty: "hard" },
{ q: "Article 21 deals with?", a: "right to life", category: "political", difficulty: "hard" },
{ q: "Who conducts elections in India?", a: "election commission", category: "political", difficulty: "hard" },
{ q: "How many fundamental rights?", a: "6", category: "political", difficulty: "hard" },

// -------- GEOGRAPHY (20) --------
{ q: "Largest ocean?", a: "pacific", category: "geography", difficulty: "easy" },
{ q: "Capital of France?", a: "paris", category: "geography", difficulty: "easy" },
{ q: "Highest mountain peak?", a: "mount everest", category: "geography", difficulty: "easy" },
{ q: "Which continent is India in?", a: "asia", category: "geography", difficulty: "easy" },
{ q: "Longest river in world?", a: "nile", category: "geography", difficulty: "medium" },
{ q: "Largest desert?", a: "sahara", category: "geography", difficulty: "medium" },
{ q: "Tropic of Cancer passes through India?", a: "yes", category: "geography", difficulty: "medium" },
{ q: "Imaginary line dividing Earth?", a: "equator", category: "geography", difficulty: "medium" },
{ q: "Smallest continent?", a: "australia", category: "geography", difficulty: "hard" },
{ q: "Deepest ocean trench?", a: "mariana trench", category: "geography", difficulty: "hard" },
{ q: "Largest island?", a: "greenland", category: "geography", difficulty: "hard" },
{ q: "River Ganga originates from?", a: "gangotri glacier", category: "geography", difficulty: "hard" },

// -------- ENVIRONMENT & ECONOMICS (15) --------
{ q: "Process of planting trees?", a: "afforestation", category: "environment", difficulty: "easy" },
{ q: "Main cause of global warming?", a: "greenhouse gases", category: "environment", difficulty: "easy" },
{ q: "Renewable energy example?", a: "solar", category: "environment", difficulty: "easy" },
{ q: "What is GDP?", a: "gross domestic product", category: "economics", difficulty: "medium" },
{ q: "Money used in a country?", a: "currency", category: "economics", difficulty: "medium" },
{ q: "Inflation means?", a: "rise in prices", category: "economics", difficulty: "medium" },
{ q: "Ozone layer protects from?", a: "uv rays", category: "environment", difficulty: "hard" },
{ q: "Who controls monetary policy in India?", a: "rbi", category: "economics", difficulty: "hard" },
{ q: "Main source of government income?", a: "tax", category: "economics", difficulty: "hard" },


  // --- Basic / Mixed ---
  { q: "Days in a week?", a: "7", category: "basic", difficulty: "easy" },
  { q: "Months in a year?", a: "12", category: "basic", difficulty: "easy" },
  { q: "Opposite of hot?", a: "cold", category: "basic", difficulty: "easy" },
  { q: "Shape of a wheel?", a: "circle", category: "basic", difficulty: "easy" },
  { q: "Dog has how many legs?", a: "4", category: "basic", difficulty: "easy" },
  { q: "Days in a week?", a: "7", category: "basic", difficulty: "easy" },
  { q: "Months in a year?", a: "12", category: "basic", difficulty: "easy" },
  { q: "Opposite of hot?", a: "cold", category: "basic", difficulty: "easy" },
  { q: "How many vowels in English?", a: "5", category: "basic", difficulty: "easy" },
  { q: "How many fingers in one hand?", a: "5", category: "basic", difficulty: "easy" },
  { q: "Which animal barks?", a: "dog", category: "basic", difficulty: "easy" },
  { q: "Color of grass?", a: "green", category: "basic", difficulty: "easy" },
  { q: "Opposite of big?", a: "small", category: "basic", difficulty: "easy" },
  { q: "Which day comes after Friday?", a: "saturday", category: "basic", difficulty: "medium" },
  { q: "How many hours in a week?", a: "168", category: "basic", difficulty: "medium" },
  { q: "Which shape has 4 equal sides?", a: "square", category: "basic", difficulty: "medium" },
  { q: "Which sense organ is for smell?", a: "nose", category: "basic", difficulty: "medium" },
  { q: "Which animal gives milk?", a: "cow", category: "basic", difficulty: "medium" },
  { q: "Fastest bird?", a: "peregrine falcon", category: "basic", difficulty: "hard" },
  { q: "How many bones in adult human?", a: "206", category: "basic", difficulty: "hard" },
  { q: "Which metal is liquid at room temp?", a: "mercury", category: "basic", difficulty: "hard" },
  { q: "Which planet spins fastest?", a: "jupiter", category: "basic", difficulty: "hard" },
  { q: "Tallest animal?", a: "giraffe", category: "basic", difficulty: "hard" },
  { q: "Shape of a wheel?", a: "circle", category: "basic", difficulty: "easy" },
  { q: "Dog has how many legs?", a: "4", category: "basic", difficulty: "easy" },
  { q: "Which is bigger 10 or 5?", a: "10", category: "basic", difficulty: "easy" },
  { q: "First month of the year?", a: "january", category: "basic", difficulty: "easy" },
  { q: "Primary color?", a: "red", category: "basic", difficulty: "easy" },
  { q: "Opposite of light?", a: "dark", category: "basic", difficulty: "medium" },
  { q: "Opposite of up?", a: "down", category: "basic", difficulty: "medium" },
  { q: "Largest mammal?", a: "blue whale", category: "basic", difficulty: "medium" },
  { q: "Which comes first: sunrise or sunset?", a: "sunrise", category: "basic", difficulty: "medium" },
  { q: "Which direction does the sun rise?", a: "east", category: "basic", difficulty: "medium" },
  { q: "Fastest land animal?", a: "cheetah", category: "basic", difficulty: "hard" },
  { q: "Tallest tree?", a: "redwood", category: "basic", difficulty: "hard" },
];

/***********************
  HELPERS
************************/
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

/**
 * Pick questions randomly from different categories/difficulties
 */
let usedQuestions = new Set();
function pickRandomQuestions(limit) {
  const pool = ALL_CARDS.filter((_, idx) => !usedQuestions.has(idx));
  shuffle(pool);

  const selected = pool.slice(0, limit);
  selected.forEach(q => {
    const index = ALL_CARDS.indexOf(q);
    usedQuestions.add(index);
  });

  // Reset when pool is exhausted
  if (usedQuestions.size === ALL_CARDS.length) {
    usedQuestions.clear();
  }

  return selected;
}

/***********************
  DOM
************************/
const questionText = document.getElementById("questionText");
const answerInput = document.getElementById("answerInput");
const submitBtn = document.getElementById("submitBtn");
const feedback = document.getElementById("feedback");
const progressBar = document.getElementById("progressBar");
const timerEl = document.getElementById("timer");
const celebration = document.getElementById("celebration");
const finalScore = document.getElementById("finalScore");
const usernameInput = document.getElementById("username");
const difficultySelect = document.getElementById("difficulty");
const startBtn = document.getElementById("startBtn");

/***********************
  USER
************************/
usernameInput.value = localStorage.getItem("fc_user") || "";
usernameInput.onchange = () =>
  localStorage.setItem("fc_user", usernameInput.value);

/***********************
  QUIZ STATE
************************/
let quiz = null;
let timerInterval;
let timeLeft = 0;
let attempted = 0;

/***********************
  START QUIZ
************************/
startBtn.onclick = () => {
  startBtn.disabled = true;
  difficultySelect.disabled = true;
  answerInput.disabled = false;
  submitBtn.disabled = false;

  let limit = 10;
  if (difficultySelect.value === "medium") limit = 15;
  if (difficultySelect.value === "hard") limit = 20;

  if (difficultySelect.value === "easy") timeLeft = 60;
  if (difficultySelect.value === "medium") timeLeft = 90;
  if (difficultySelect.value === "hard") timeLeft = 110;

  const questions = pickRandomQuestions(limit);

  quiz = {
    questions,
    index: 0,
    score: 0
  };

  attempted = 0;
  startTimer();
  loadQuestion();
};

/***********************
  TIMER
************************/
function startTimer() {
  timerEl.innerText = timeLeft;

  timerInterval = setInterval(() => {
    timeLeft--;
    timerEl.innerText = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      finishQuiz(true);
    }
  }, 1000);
}

/***********************
  LOAD QUESTION
************************/
function loadQuestion() {
  if (quiz.index >= quiz.questions.length) {
    finishQuiz(false);
    return;
  }

  questionText.innerText = quiz.questions[quiz.index].q;
  answerInput.value = "";
  feedback.innerText = "";
}

/***********************
  SUBMIT ANSWER
************************/
function submitAnswer() {
  attempted++;

  updateProgress();

  const user = answerInput.value.trim().toLowerCase();
  const correct = quiz.questions[quiz.index].a.toLowerCase();

  if (user === correct) {
    quiz.score++;
    feedback.innerText = "✅ Correct!";
    feedback.style.color = "green";
  } else {
    feedback.innerText = `❌ Correct: ${quiz.questions[quiz.index].a}`;
    feedback.style.color = "red";
  }

  quiz.index++;
  setTimeout(loadQuestion, 400);
}

submitBtn.onclick = submitAnswer;
answerInput.addEventListener("keydown", e => {
  if (e.key === "Enter" && !submitBtn.disabled) {
    submitAnswer();
  }
});

/***********************
  FINISH QUIZ
************************/
function finishQuiz(timeUp) {
  clearInterval(timerInterval);

  answerInput.style.display = "none";
  submitBtn.style.display = "none";

  const name = localStorage.getItem("fc_user") || "Learner";
  const total = quiz.questions.length;

  if (!timeUp && attempted === total && quiz.score === total) {
    celebration.querySelector("h2").innerText = "🎉 Congratulations! Perfect Score!";
  } else {
    celebration.querySelector("h2").innerText = "😔 Better Luck Next Time";
  }

  questionText.innerText = "Quiz Finished";
  finalScore.innerText = `${name}, You Attempted ${attempted}/${total}\nScored ${quiz.score}/${total}`;
  celebration.classList.remove("d-none");
}

/***********************
  PROGRESS BAR
************************/
function updateProgress() {
  const percent = Math.round((attempted / quiz.questions.length) * 100);
  progressBar.style.width = percent + "%";
  progressBar.innerText = percent + "%";
}
