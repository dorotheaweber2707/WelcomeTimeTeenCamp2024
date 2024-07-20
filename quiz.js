// hier steht die Logik für die Rätsel drin

// für jedes Rätsel gibt es eine eigene Funktion, die überprüft, ob die Antwort richtig ist 
// und anschließend den Button zum Weiterklicken sichtbar macht
// eingaben immer nur über multiple choice, damit es keine Fehler bei der Eingabe gibt :)

// wie z.B: beim Anzeigen des Groupschedules, in gruppen_auswahl.html
function displaySchedule(groupNumber, schedule) {
    console.log("displaySchedule", schedule);
    document.getElementById('group-selection').style.display = 'none';
    document.getElementById('schedule').style.display = 'block';
    document.getElementById('groupNumber').innerText = groupNumber;
    document.getElementById('scheduleList').innerText = `Stationen: ${schedule.join(', ')}`;
}