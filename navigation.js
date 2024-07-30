// navigation.js
const NUM_STATIONS = 5;

const schedules = {
    1: [3, 4, 5, 1, 6],
    2: [2, 1, 4, 50, 6],
    3: [2, 4, 50, 1, 6],
    4: [1, 2, 7, 4, 6],
    5: [4, 2, 1, 3, 6],
    6: [4, 3, 1, 5, 6],
    7: [1, 50, 2, 4, 6],
    8: [5, 1, 2, 7, 6],
    9: [50, 1, 3, 2, 6],
    10: [1, 5, 4, 2, 6],
    11: [7, 4, 1, 2, 6]
};

// function saveGroupSchedule() {
//     const groupNumber = document.getElementById('groupInput').value;
//     if (groupNumber && schedules[groupNumber]) {
//         localStorage.setItem('selectedGroup', groupNumber);
//         localStorage.setItem('groupSchedule', JSON.stringify(schedules[groupNumber]));
//         localStorage.setItem('currentPageIndex', 0); // Initialize current page index
//         displaySchedule(groupNumber, schedules[groupNumber]);
//     } else {
//         alert('Bitte gib eine gültige Gruppennummer ein.');
//     }
// }

// JavaScript function to handle button click and selection

function selectGroupNumber(groupNumber) {

    // Entfernen der 'selected'-Klasse von allen Buttons
    const buttons = document.querySelectorAll('.button-group button');
    buttons.forEach(button => button.classList.remove('selected'));

    // Setzen der 'selected'-Klasse auf den geklickten Button
    localStorage.setItem('groupNumber', groupNumber);


    console.log('groupNumber', groupNumber);

    document.getElementById('groupNumber').textContent = groupNumber;
    const button = Array.from(buttons).find(btn => btn.textContent.includes(groupNumber));
    if (button) {
        button.classList.add('selected');
    }
}

function saveGroupSchedule() {
    const selectedGroup = localStorage.getItem('groupNumber');
    console.log('groupNumber', selectedGroup);

    if (selectedGroup && schedules[selectedGroup]) {
        localStorage.setItem('selectedGroup', selectedGroup);
        localStorage.setItem('groupSchedule', JSON.stringify(schedules[selectedGroup]));
        localStorage.setItem('currentPageIndex', 0); // Initialize current page index
        displaySchedule(selectedGroup, schedules[selectedGroup]);
    } else {
        alert('saveGroupSchedule: Bitte wählen Sie eine gültige Gruppe aus.');
    }
}


function displaySchedule(groupNumber, schedule) {
    console.log("displaySchedule", schedule);
    document.getElementById('group-selection').style.display = 'none';
    document.getElementById('schedule').style.display = 'block';
    document.getElementById('groupNumber').innerText = groupNumber;
    document.getElementById('scheduleList').innerText = "Seid ihr bereit?";
}

function navigateToNextStation() {
    const selectedGroup = localStorage.getItem('selectedGroup');
    const groupSchedule = JSON.parse(localStorage.getItem('groupSchedule'));
    let currentPageIndex = parseInt(localStorage.getItem('currentPageIndex'), 10);
    console.log("navigateToNextStation currentPageIndex", currentPageIndex);

    if (selectedGroup && groupSchedule && !isNaN(currentPageIndex)) {
        console.log("currentPageIndex: ", currentPageIndex);
        // wenn weiternavigiert wird, zähle page index hoch
        if (currentPageIndex > NUM_STATIONS) {

            console('Ihr habt alle Stationen durchlaufen!');
            navigateToEndStation();

            return;
        }


        // navigiere zu nächstem Spiel basierend aud seitenindex und Laufplan
        stationNumber = groupSchedule[currentPageIndex];
        currentPageIndex++;
        localStorage.setItem('currentPageIndex', currentPageIndex);

        console.log("stationNumber: ", stationNumber);
        const url = `raetsel${stationNumber}.html`
        console.log(url)
        window.location.href = url;


    } else {
        console.log('Fehler bei der Navigation. Bitte starten Sie den Prozess neu.');
    }
}





function resetGroupSchedule() {
    localStorage.removeItem('selectedGroup');
    localStorage.removeItem('groupSchedule');
    localStorage.removeItem('currentPageIndex');
    document.getElementById('group-selection').style.display = 'block';
    document.getElementById('schedule').style.display = 'none';
}

// document.addEventListener('DOMContentLoaded', () => {
//     resetGroupSchedule(); // Reset group selection on page load
// });


// JavaScript function to handle button click and selection
let selectedButton = null;

function selectGroup(groupNumber) {
    // Entfernen der 'selected'-Klasse von allen Buttons
    const buttons = document.querySelectorAll('.button-group button');
    buttons.forEach(button => button.classList.remove('selected'));

    // Setzen der 'selected'-Klasse auf den geklickten Button
    selectedButton = groupNumber;
    document.getElementById('groupNumber').textContent = groupNumber;
    const button = Array.from(buttons).find(btn => btn.textContent.includes(groupNumber));
    if (button) {
        button.classList.add('selected');
    }
}