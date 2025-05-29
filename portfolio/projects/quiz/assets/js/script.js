//Selezione elementi da HTML
const startBtn = document.getElementById("startBtn"); // Bottone per iniziare il quiz
const startScreen = document.getElementById("start-screen"); // Schermata iniziale
const quizContainer = document.getElementById("quiz"); // Contenitore delle domande
const resultContainer = document.getElementById("result"); // Contenitore dei risultati finali
const quizTitle = document.getElementById("quiz-title"); // Titolo del quiz (nome del giocatore)
const questionEl = document.getElementById("question"); // Elemento per visualizzare la domanda
const optionsEl = document.getElementById("options"); // Contenitore delle opzioni di risposta
const nextBtn = document.getElementById("nextBtn"); // Bottone per andare alla prossima domanda
const scoreText = document.getElementById("scoreText"); // Elemento dove mostrare il punteggio
const playerNameInput = document.getElementById("playerName"); // Campo input del nome del giocatore
const questionCountSelect = document.getElementById("questionCount"); // Menu a tendina per numero di domande

//Dichiarazione variabili di stato
let playerName = ""; // Nome del giocatore
let quizData = []; // Dati delle domande selezionate per il quiz
let currentQuestion = 0; // Indice della domanda attuale
let score = 0; // Punteggio del giocatore
let selectedQuestions = []; // Array con domande scelte casualmente

//Banca dati delle domande
const fullQuizData = [
  {
    question: "Chi ha sviluppato il linguaggio di programmazione Java?",
    options: ["James Gosling", "Dennis Ritchie", "Bjarne Stroustrup", "Guido van Rossum"],
    answer: "James Gosling"
  },
  {
    question: "In quale anno è stato rilasciato Java per la prima volta?",
    options: ["1995", "1991", "1989", "2000"],
    answer: "1995"
  },
  {
    question: "Java è un linguaggio...",
    options: ["Compilato e interpretato", "Solo compilato", "Solo interpretato", "Né compilato né interpretato"],
    answer: "Compilato e interpretato"
  },
  {
    question: "Quale delle seguenti è una caratteristica di Java?",
    options: ["Puntatori espliciti", "Indipendenza dalla piattaforma", "Dipendenza dall'hardware", "Solo per sistemi Unix"],
    answer: "Indipendenza dalla piattaforma"
  },
  {
    question: "Cosa rappresenta JVM?",
    options: ["Java Virtual Machine", "Java Variable Method", "Java Verified Module", "Java Version Manager"],
    answer: "Java Virtual Machine"
  },
  {
    question: "Qual è l'estensione di un file compilato Java?",
    options: [".java", ".class", ".exe", ".jar"],
    answer: ".class"
  },
  {
    question: "Quale parola chiave è usata per ereditare una classe in Java?",
    options: ["inherits", "extends", "implements", "inheritsFrom"],
    answer: "extends"
  },
  {
    question: "Quale parola chiave è usata per creare un oggetto?",
    options: ["create", "instantiate", "new", "object"],
    answer: "new"
  },
  {
    question: "Come si chiama il metodo principale in un'app Java?",
    options: ["start()", "init()", "main()", "run()"],
    answer: "main()"
  },
  {
    question: "Quale pacchetto è automaticamente importato in ogni programma Java?",
    options: ["java.lang", "java.util", "java.io", "java.net"],
    answer: "java.lang"
  },
  {
    question: "Quale delle seguenti è un tipo di dato primitivo?",
    options: ["String", "Integer", "int", "ArrayList"],
    answer: "int"
  },
  {
    question: "Cosa stampa `System.out.println(5 + \"5\")`?",
    options: ["10", "55", "Errore", "5 5"],
    answer: "55"
  },
  {
    question: "Come si definisce una classe astratta in Java?",
    options: ["abstract class", "virtual class", "interface class", "base class"],
    answer: "abstract class"
  },
  {
    question: "Quale eccezione viene lanciata quando si divide un numero per zero?",
    options: ["ArithmeticException", "DivideByZeroException", "IllegalArgumentException", "IOException"],
    answer: "ArithmeticException"
  },
  {
    question: "Cos'è un'interfaccia in Java?",
    options: ["Una classe con costruttori", "Una classe concreta", "Un contratto senza implementazione", "Una libreria grafica"],
    answer: "Un contratto senza implementazione"
  },
  {
    question: "Quale parola chiave impedisce l'estensione di una classe?",
    options: ["final", "static", "abstract", "sealed"],
    answer: "final"
  },
  {
    question: "Cosa fa il garbage collector in Java?",
    options: ["Compila il codice", "Cancella file", "Libera memoria non più usata", "Arresta il programma"],
    answer: "Libera memoria non più usata"
  },
  {
    question: "Quale metodo viene chiamato quando un thread Java parte?",
    options: ["main()", "run()", "start()", "execute()"],
    answer: "run()"
  },
  {
    question: "Quale classe è usata per leggere input da tastiera?",
    options: ["Scanner", "Reader", "InputReader", "BufferedInput"],
    answer: "Scanner"
  },
  {
    question: "Come si dichiara un array di interi di 10 elementi?",
    options: ["int arr[] = new int[10];", "array int arr = 10;", "int arr(10);", "int arr = new int[10];"],
    answer: "int arr[] = new int[10];"
  },
  {
    question: "Quale libreria è usata per gestire collezioni dinamiche?",
    options: ["java.util", "java.io", "java.sql", "java.awt"],
    answer: "java.util"
  },
  {
    question: "Cosa rappresenta `null` in Java?",
    options: ["Zero", "Nessun valore/oggetto", "Stringa vuota", "Indirizzo di memoria zero"],
    answer: "Nessun valore/oggetto"
  },
  {
    question: "Cos'è un costruttore?",
    options: ["Un metodo che costruisce una GUI", "Un metodo speciale che inizializza oggetti", "Una classe speciale", "Un tipo di dato"],
    answer: "Un metodo speciale che inizializza oggetti"
  },
  {
    question: "Quale delle seguenti è una struttura di controllo in Java?",
    options: ["if", "switch", "for", "Tutte le precedenti"],
    answer: "Tutte le precedenti"
  },
  {
    question: "Quale tipo di eccezione non può essere ignorato senza gestione?",
    options: ["Checked Exception", "Unchecked Exception", "Runtime Exception", "Error"],
    answer: "Checked Exception"
  },
  {
    question: "Cos'è `this` in Java?",
    options: ["Un metodo", "Una classe", "Un riferimento all'oggetto corrente", "Una libreria"],
    answer: "Un riferimento all'oggetto corrente"
  },
  {
    question: "Come si scrive un commento su una sola riga in Java?",
    options: ["//", "/* */", "#", "--"],
    answer: "//"
  },
  {
    question: "Quale delle seguenti è una parola chiave riservata?",
    options: ["public", "main", "println", "String"],
    answer: "public"
  },
  {
    question: "Cosa fa `super` in Java?",
    options: ["Accede alla classe padre", "Crea una super classe", "Definisce una classe speciale", "Chiama il costruttore di classe figlia"],
    answer: "Accede alla classe padre"
  },
  {
    question: "Qual è il modificatore di accesso più restrittivo?",
    options: ["private", "protected", "public", "default"],
    answer: "private"
  },
  {
    question: "Quale ciclo viene eseguito almeno una volta anche se la condizione è falsa?",
    options: ["while", "do-while", "for", "foreach"],
    answer: "do-while"
  },
  {
    question: "Quale costrutto è usato per gestire le eccezioni?",
    options: ["try-catch", "do-catch", "catch-throw", "handle-exception"],
    answer: "try-catch"
  },
  {
    question: "Cosa fa `System.exit(0);`?",
    options: ["Riavvia il sistema", "Termina il programma", "Resetta il main", "Lancia un errore"],
    answer: "Termina il programma"
  },
  {
    question: "Cos'è un package in Java?",
    options: ["Una funzione", "Un gruppo di classi correlate", "Una variabile globale", "Un framework"],
    answer: "Un gruppo di classi correlate"
  },
  {
    question: "Quale delle seguenti non è una classe wrapper?",
    options: ["Integer", "Boolean", "Float", "String"],
    answer: "String"
  },
  {
    question: "Quale versione ha introdotto le lambda expressions?",
    options: ["Java 8", "Java 6", "Java 11", "Java 7"],
    answer: "Java 8"
  },
  {
    question: "A cosa serve `final` su una variabile?",
    options: ["Rende la variabile modificabile", "La rende costante", "La nasconde", "La inizializza"],
    answer: "La rende costante"
  },
  {
    question: "Cosa restituisce un metodo che non ha valore di ritorno?",
    options: ["void", "null", "int", "return"],
    answer: "void"
  },
  {
    question: "Quale parola chiave viene usata per creare un'interfaccia?",
    options: ["interface", "implements", "class", "extends"],
    answer: "interface"
  },
  {
    question: "Qual è la differenza tra `==` e `.equals()`?",
    options: ["Nessuna", "`==` confronta riferimenti, `.equals()` contenuti", "`==` confronta contenuti", "`.equals()` è per numeri"],
    answer: "`==` confronta riferimenti, `.equals()` contenuti"
  },
  {
    question: "Cosa fa `instanceof`?",
    options: ["Verifica se un oggetto è di un certo tipo", "Crea un'istanza", "Importa classi", "Definisce un oggetto"],
    answer: "Verifica se un oggetto è di un certo tipo"
  },
  {
    question: "Quale classe usi per creare una finestra grafica?",
    options: ["JFrame", "Frame", "Window", "Dialog"],
    answer: "JFrame"
  },
  {
    question: "Qual è l'interfaccia base per collezioni in Java?",
    options: ["Collection", "List", "ArrayList", "Set"],
    answer: "Collection"
  },
  {
    question: "Cos'è una classe annidata (nested)?",
    options: ["Classe dentro un metodo", "Classe dentro un'altra classe", "Classe principale", "Classe di sistema"],
    answer: "Classe dentro un'altra classe"
  },
  {
    question: "Qual è la differenza tra ArrayList e LinkedList?",
    options: ["ArrayList è più veloce per accesso casuale", "LinkedList è più veloce per accesso casuale", "Sono uguali", "ArrayList è thread-safe"],
    answer: "ArrayList è più veloce per accesso casuale"
  },
  {
    question: "Cosa significa overloading?",
    options: ["Stessa funzione con parametri diversi", "Ereditarietà multipla", "Più classi con stesso nome", "Nomi duplicati"],
    answer: "Stessa funzione con parametri diversi"
  },
  {
    question: "Cosa significa overriding?",
    options: ["Sovrascrivere un metodo della superclasse", "Creare un nuovo metodo", "Duplicare un metodo", "Eseguire una funzione ricorsiva"],
    answer: "Sovrascrivere un metodo della superclasse"
  },
  {
    question: "Java supporta l'ereditarietà multipla di classi?",
    options: ["No", "Sì", "Solo con interfacce", "Solo con abstract"],
    answer: "No"
  }
];

//Inizio del quiz
startBtn.addEventListener("click", () => {
  playerName = playerNameInput.value.trim(); // Ottiene e pulisce il nome del giocatore
  const questionCount = parseInt(questionCountSelect.value); // Numero di domande da mostrare

  if (playerName === "") {
    alert("Per favore inserisci il tuo nome.");
    return; // Interrompe se il nome non è stato inserito
  }

  // Seleziona un sottoinsieme casuale di domande
  selectedQuestions = fullQuizData.sort(() => 0.5 - Math.random()).slice(0, questionCount);
  quizData = selectedQuestions;

  // Nasconde la schermata iniziale e mostra il quiz
  startScreen.style.display = "none";
  quizContainer.style.display = "flex";

  quizTitle.innerText = `Giocatore: ${playerName}`; // Aggiorna il titolo con il nome del giocatore
  showQuestion(); // Mostra la prima domanda
});

//Mostra una domanda
function showQuestion() {
  const current = quizData[currentQuestion]; // Ottiene la domanda corrente
  questionEl.innerText = current.question; // Mostra la domanda
  optionsEl.innerHTML = ""; // Pulisce le opzioni precedenti

  // Per ogni opzione, crea un bottone e assegna un handler
  current.options.forEach(option => {
    const btn = document.createElement("button");
    btn.innerText = option;
    btn.onclick = () => selectAnswer(btn, current.answer); // Gestione click
    optionsEl.appendChild(btn);
  });

  nextBtn.disabled = true; // Disabilita il bottone "Avanti" finché non si sceglie una risposta
}

//Gestione della risposta selezionata
function selectAnswer(btn, correctAnswer) {
  const buttons = optionsEl.querySelectorAll("button"); // Tutti i bottoni di risposta
  buttons.forEach(b => b.disabled = true); // Disabilita tutti dopo la scelta

  if (btn.innerText === correctAnswer) {
    btn.style.backgroundColor = "green"; // Colore verde se corretto
    score++; // Incrementa il punteggio
  } else {
    btn.style.backgroundColor = "red"; // Colore rosso se sbagliato
    buttons.forEach(b => {
      if (b.innerText === correctAnswer) b.style.backgroundColor = "green"; // Evidenzia la risposta corretta
    });
  }

  nextBtn.disabled = false; // Abilita il bottone per andare avanti
}

//Passaggio alla domanda successiva
nextBtn.addEventListener("click", () => {
  currentQuestion++; // Passa alla prossima domanda
  if (currentQuestion < quizData.length) {
    showQuestion(); // Mostra la nuova domanda
  } else {
    endQuiz(); // Se finite, termina il quiz
  }
});

//Fine del quiz
function endQuiz() {
  quizContainer.style.display = "none"; // Nasconde il contenitore delle domande
  resultContainer.style.display = "flex"; // Mostra il risultato
  scoreText.innerText = `${playerName}, il tuo punteggio è ${score} su ${quizData.length}`; // Mostra punteggio
}

