const quiz = [
  {
      question: "Quelle balise HTML est utilisée pour créer un lien hypertexte ?",
      choices: ["<a>", "<link>", "<href>", "<url>"],
      answer: "<a>"
  },
  {
      question: "Quelle est la langue de programmation principalement utilisée pour créer des pages web dynamiques ?",
      choices: ["JavaScript", "HTML", "CSS", "Python"],
      answer: "JavaScript"
  },
  {
      question: "Quelle est la méthode JavaScript utilisée pour afficher un message d'alerte dans une boîte de dialogue ?",
      choices: ["alert()", "prompt()", "confirm()", "console.log()"],
      answer: "alert()"
  },
  {
      question: "Quelle propriété CSS est utilisée pour définir la couleur de fond d'un élément HTML ?",
      choices: ["color", "background-color", "text-color", "font-color"],
      answer: "background-color"
  },
  {
      question: "Quel est l'acronyme de 'Hypertext Markup Language' ?",
      choices: ["HTML", "HTTP", "CSS", "URL"],
      answer: "HTML"
  },
  {
      question: "Quelle balise HTML est utilisée pour définir une liste non ordonnée ?",
      choices: ["<ul>", "<ol>", "<li>", "<dl>"],
      answer: "<ul>"
  },
  {
      question: "Quelle est la méthode JavaScript utilisée pour ajouter un élément à la fin d'un tableau ?",
      choices: ["push()", "append()", "insert()", "add()"],
      answer: "push()"
  },
  {
      question: "Quelle balise HTML est utilisée pour créer un paragraphe ?",
      choices: ["<p>", "<div>", "<span>", "<h1>"],
      answer: "<p>"
  },
  {
      question: "Quel sélecteur CSS est utilisé pour cibler tous les éléments HTML ?",
      choices: ["*", "body", "#id", ".class"],
      answer: "*"
  },
  {
      question: "Quel est l'élément HTML utilisé pour créer un lien vers une feuille de style externe ?",
      choices: ["<style>", "<link>", "<head>", "<meta>"],
      answer: "<link>"
  }
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

