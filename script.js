const quiz = [
  {
    question:
      "Quel élément HTML est utilisé pour insérer un contenu JavaScript?",
    choices: ["<js>", "<javascript>", "<scripting>", "<script>"],
    answer: "<script>",
  },
  {
    question:
      "Quelle fonction JavaScript est utilisée pour afficher une boîte de dialogue?",
    choices: ["msg()", "show()", "display()", "alert()"],
    answer: "alert()",
  },
  {
    question:
      "Quelle propriété CSS est utilisée pour changer la couleur d'arrière-plan?",
    choices: ["color", "bgcolor", "background-color", "backgroundFill"],
    answer: "background-color",
  },
  {
    question: "Comment déclare-t-on une variable en JavaScript?",
    choices: ["var name", "v name", "variable name", "declare name"],
    answer: "var name",
  },
  {
    question:
      "Quel attribut est utilisé en HTML pour spécifier une feuille de style externe?",
    choices: ["href", "rel", "type", "src"],
    answer: "href",
  },
];
// ...
let userAnswers = new Array(quiz.length).fill("");
let showSummaryBtn = document.getElementById("show-summary");
let summarySection = document.getElementById("summary");

showSummaryBtn.style.display = "block"; // Cache le bouton de récapitulatif au début
summarySection.style.display = "none"; // Cache la section de récapitulatif au début

showSummaryBtn.addEventListener("click", function () {
  // Affiche la section de récapitulatif
  summarySection.style.display = "block";
  // Masque le bouton de récapitulatif
  showSummaryBtn.style.display = "none";
  // Génère le récapitulatif
  generateSummary();
});

function generateSummary() {
  let summary = document.getElementById("summary-content");
  summary.innerHTML = ""; // Vide le contenu précédent

  for (let i = 0; i < quiz.length; i++) {
    let questionItem = document.createElement("div");
    let question = quiz[i].question;
    let userAnswer = userAnswers[i]; // Récupère la réponse de l'utilisateur
    let isCorrect = false; // Initialise la vérification de la réponse

    // Vérifie si la réponse de l'utilisateur est correcte
    if (userAnswer === quiz[i].answer) {
      isCorrect = true;
    }

    // Ajoute la question au récapitulatif
    if (isCorrect) {
      questionItem.innerHTML = question + "<br>Félicitations votre réponse est correcte : " + userAnswer;
      questionItem.style.color = "greenyellow";
    } else {
      questionItem.innerHTML = question + "<br>Réponse incorrecte : " + userAnswer + "<br>La bonne réponse etait : " + quiz[i].answer;
      questionItem.style.color = "red";
    }

    summary.appendChild(questionItem);
  }
}


// ...


let startSection = document.getElementById("start");
let quizSection = document.getElementById("quiz");
let resultSection = document.getElementById("result");
let scoreElement = document.getElementById("score");
let totalElement = document.getElementById("total");
let restartBtn = document.getElementById("restart");
let timerElement = document.getElementById("timer");

totalElement.innerHTML = quiz.length;

quizSection.style.display = "none";
resultSection.style.display = "none";

let startBtn = document.getElementById("start-btn");
let timer = 30;
let score = 0;
let index = 0;

function showQuestion() {
  let question = document.getElementById("question");
  question.innerHTML = quiz[index].question;
  let choices = document.getElementById("choices");
  choices.innerHTML = "";
  let clicked = false;
  for (let i = 0; i < quiz[index].choices.length; i++) {
    let li = document.createElement("li");
    li.textContent = quiz[index].choices[i];
    choices.appendChild(li);

    li.addEventListener("click", function () {
      if (clicked) {
        return;
      }
      clicked = true;

      let lies = choices.querySelectorAll("li");
      lies.forEach(function (li) {
        li.style.pointerEvents = "none";
        li.style.cursor = "not-allowed";
        if (li.textContent === quiz[index].answer) {
          li.style.backgroundColor = "green";
        }
      });

      if (li.textContent === quiz[index].answer) {
        score++;
      } else {
        li.style.backgroundColor = "red";
      }

      // Met à jour la réponse de l'utilisateur dans userAnswers
      userAnswers[index] = li.textContent;

      setTimeout(function () {
        index++;
        if (index < quiz.length) {
          showQuestion();
        } else {
          quizSection.style.display = "none";
          resultSection.style.display = "block";
          scoreElement.innerHTML = score;
          generateSummary();
        }
      }, 1000);
    });
  }
}


startBtn.addEventListener("click", function () {
  startSection.style.display = "none";
  quizSection.style.display = "block";
  resultSection.style.display = "none";
  showQuestion();
  let interval = setInterval(function () {
    timer--;
    timerElement.innerHTML = timer;
    if (timer === 0) {
      clearInterval(interval);
      quizSection.style.display = "none";
      resultSection.style.display = "block";
      scoreElement.innerHTML = score;
    }
  }, 1000);
});

restartBtn.addEventListener("click", function () {
  window.location.reload();
});