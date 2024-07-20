// navigation.js


const schedules = {
    1: [1, 2, 3, 4, 5, 6],
    2: [2, 3, 4, 5, 6, 1],
    3: [3, 4, 5, 6, 1, 2],
    4: [4, 5, 6, 1, 2, 3],
    5: [5, 6, 1, 2, 3, 4],
    6: [6, 1, 2, 3, 4, 5]
};

function saveGroupSchedule() {
    const groupNumber = document.getElementById('groupInput').value;
    if (groupNumber && schedules[groupNumber]) {
        localStorage.setItem('selectedGroup', groupNumber);
        localStorage.setItem('groupSchedule', JSON.stringify(schedules[groupNumber]));
        localStorage.setItem('currentPageIndex', 0); // Initialize current page index
        displaySchedule(groupNumber, schedules[groupNumber]);
    } else {
        alert('Bitte gib eine gültige Gruppennummer ein.');
    }
}

function displaySchedule(groupNumber, schedule) {
    console.log("displaySchedule", schedule);
    document.getElementById('group-selection').style.display = 'none';
    document.getElementById('schedule').style.display = 'block';
    document.getElementById('groupNumber').innerText = groupNumber;
    document.getElementById('scheduleList').innerText = `Stationen: ${schedule.join(', ')}`;
}

function navigateToNextStation() {
    const selectedGroup = localStorage.getItem('selectedGroup');
    const groupSchedule = JSON.parse(localStorage.getItem('groupSchedule'));
    let currentPageIndex = parseInt(localStorage.getItem('currentPageIndex'), 10);
    console.log("navigateToNextStation currentPageIndex", currentPageIndex);

    if (selectedGroup && groupSchedule && !isNaN(currentPageIndex)) {
        // wenn weiternavigiert wird, zähle page index hoch
        currentPageIndex++;
        if (currentPageIndex >= groupSchedule.length) {
            console('Ihr habt alle Stationen durchlaufen!');
            const url = `ende.html`
            console.log(url)
            window.location.href = url;

            return;
        }
        localStorage.setItem('currentPageIndex', currentPageIndex);
        
        // navigiere zu nächstem Spiel basierend aud seitenindex und Laufplan
        stationNumber = groupSchedule[currentPageIndex];
        // stationNumber = 1;
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
