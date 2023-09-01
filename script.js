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

let startSection = document.getElementById("start");
let quizSection = document.getElementById("quiz");
let resultSection = document.getElementById("result");
let scoreElement = document.getElementById("score");
let totalElement = document.getElementById("total");
let restartBtn = document.getElementById("restart");

totalElement.innerHTML = quiz.length;

quizSection.style.display = "none";
resultSection.style.display = "none";

let startBtn = document.getElementById("start-btn");

let score = 0;

let index = 0;

function showQuestion() {
  let question = document.getElementById("question");
  question.innerHTML = quiz[index].question;
  let choices = document.getElementById("choices");
  choices.innerHTML = "";
  for (let i = 0; i < quiz[index].choices.length; i++) {
    let li = document.createElement("li");
    li.textContent = quiz[index].choices[i];
    choices.appendChild(li);

    li.addEventListener("click", function () {
        if (li.textContent === quiz[index].answer) {
            li.style.backgroundColor = "green";
            score++;
        } else {
            li.style.backgroundColor = "red";
        }
        setTimeout(function () {
            index++;
            if (index < quiz.length) {
                showQuestion();
            } else {
                quizSection.style.display = "none";
                resultSection.style.display = "block";
                scoreElement.innerHTML = score;
            }
        }, 1000);

      
    })
  }
}

startBtn.addEventListener("click", function () {
  startSection.style.display = "none";
  quizSection.style.display = "block";
  resultSection.style.display = "none";
  showQuestion();
});

restartBtn.addEventListener("click", function () {
    startSection.style.display = "none";
    quizSection.style.display = "block";
    resultSection.style.display = "none";
    score = 0;
    index = 0;
    }
)

