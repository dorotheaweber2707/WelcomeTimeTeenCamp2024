// hier steht die Logik für die Rätsel drin

// für jedes Rätsel gibt es eine eigene Funktion, die überprüft, ob die Antwort richtig ist 
// und anschließend den Button zum Weiterklicken sichtbar macht
// eingaben immer nur über multiple choice, damit es keine Fehler bei der Eingabe gibt :)

const ANSWER_QUIZ_1 = 1
const ANSWER_QUIZ_2 = 1
const ANSWER_QUIZ_3 = 1
const ANSWER_QUIZ_4 = 1
const ANSWER_QUIZ_5 = 1
const ANSWER_QUIZ_6 = 1

const correct_answer = {
    1: ANSWER_QUIZ_1,
    2: ANSWER_QUIZ_2,
    3: ANSWER_QUIZ_3,
    4: ANSWER_QUIZ_4,
    5: ANSWER_QUIZ_5,
    6: ANSWER_QUIZ_6
}

const laufbeschreibung = {
    1: "",
    2: "Geht ins große Zelt. \nDort ist eure nächste Station.",
    3: "Geht zur Mitte des Fußballplatztes. \nDort ist eure nächste Station.",
    4: "",
    5: "",
    6: "Geht zum Essenszelt. \nDort ist eure nächste Station."
}



// Function to check the selected answer
function checkAnswer(quiznumber) {
    console.log("checkAnswer");
    // console.log("quiznumber", quiznumber);
    // console.log("correct answer", correct_answer[quiznumber]);
    
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (selectedOption) {
        const answer = parseInt(selectedOption.value, 10);

        // Check if the selected answer is correct
        if (answer === correct_answer[quiznumber]) { // Hier kannst du die richtige Antwort anpassen
            displayAnswer(quiznumber);
        } else {
            displayWrongAnswer();
            disableChoices();
        }
    } else {
        alert('Bitte wähle eine Antwort aus.');
    }
}

function displayAnswer(quiznumber) {
    console.log("displayAnswer");
    document.getElementById('raetsel-auswahl').style.display = 'none';
    document.getElementById('raetsel-antwort').style.display = 'block';

    console.log(laufbeschreibung[quiznumber]);

    document.getElementById('laufbeschreibung').innerText = laufbeschreibung[quiznumber];
    // document.getElementById('scheduleList').innerText = `Stationen: ${schedule.join(', ')}`;
}

function displayWrongAnswer(){
    document.getElementById('falseAnswer').innerText = "Falsche Antwort :(";
}

function disableChoices() {
    const choices = document.querySelectorAll('#choices input[type="radio"]');
    choices.forEach(choice => {
        choice.selectedOption = false;
    });
}

// Function to reset the quiz (optional)
// This can be called to reset the form and enable the button again
function resetQuiz() {
    document.getElementById('falseAnswer').innerText = ""; // Clear error message
    document.getElementById('raetsel-auswahl').style.display = 'block';
    document.getElementById('raetsel-antwort').style.display = 'none';

    // Enable all choices again
    const choices = document.querySelectorAll('#choices input[type="radio"]');
    choices.forEach(choice => {
        choice.disabled = false;
    });

    // Enable the Check Answer button
    document.getElementById('checkButton').disabled = false;
}
