const daysTag = document.querySelector(".days");
const studyhours = document.querySelector(".days1"),
currentDate = document.getElementById("current-date"),
prevNextIcon = document.querySelectorAll(".icons span");

let unitOrder = JSON.parse(localStorage.getItem('unitOrder')); // Get the unit order from localStorage
const days = parseInt(localStorage.getItem('days')); // Get total number of study days from localStorage
let minimumHours = 0.1;

const totalHoursPerDay = 4; // Total number of study hours per day
localStorage.removeItem('unitOrder');
localStorage.removeItem('days');

document.getElementById("current-date").innerHTML = new Date().getDate();

let totalUnits = unitOrder.length;

// Calculate the sum of indexes (0 + 1 + 2 + ... + (n-1))
let indexSum = 0;
for (let i = 0; i < totalUnits; i++) {
    indexSum += i;
}

// Calculate the percentage of study time for each unit based on its index
let hoursPerUnit = [];
if (totalUnits === 1) {
    // If there's only one unit, allocate all hours to this unit
    hoursPerUnit = [totalHoursPerDay];
} else {
    // Calculate the percentage of study time for each unit based on its index
    for (let i = 0; i < totalUnits; i++) {
        let unitPercentage = i / indexSum; // The percentage of study time for this unit
        let unitHours = unitPercentage * totalHoursPerDay; // Hours for this unit
        unitHours = Math.max(unitHours, minimumHours);
        hoursPerUnit.push(unitHours);
    }
}

// getting new date, current year and month
let date = new Date(),
    currYear = date.getFullYear(),
    currMonth = date.getMonth();

// storing full name of all months in array
const months = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];

const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // getting first day of month
        lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last date of month
        lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // getting last day of month
        lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month

    let liTag = "";
    let studyTag = "";

    // Creating inactive days of previous month
    for (let i = firstDayofMonth; i > 0; i--) {
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }

    // Looping over current month's days
    for (let i = 1; i <= lastDateofMonth; i++) {
        let isToday = i === date.getDate() && currMonth === new Date().getMonth()
            && currYear === new Date().getFullYear() ? "active" : "";

        // Check if this day falls within the study period
        if (i <= days) {
            // Determine which unit to study based on the day
            let currentUnitIndex = (i - 1) % totalUnits; // Cycle through unitOrder
            let currentUnit = unitOrder[currentUnitIndex]; // Get the current unit
            let currentUnitHours = hoursPerUnit[currentUnitIndex]; // Get the study hours for this unit

            // Create study message for this day
            studyTag = `Study ${currentUnit} for ${currentUnitHours.toFixed(1)} hours`;

            // Create the list item (li) for the day
            liTag += `<li class="${isToday}">${i}<br>${studyTag}</li>`;
        } else {
            liTag += `<li class="${isToday}">${i}</li>`; // No study message if outside the study days
        }
    }

    // Creating inactive days of next month
    for (let i = lastDayofMonth; i < 6; i++) {
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
    }

    currentDate.innerText = `${months[currMonth]} ${currYear}`; // Display current month and year
    daysTag.innerHTML = liTag; // Add the list items to the days container
}

renderCalendar();

prevNextIcon.forEach(icon => {
    icon.addEventListener("click", () => {
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

        if (currMonth < 0 || currMonth > 11) {
            date = new Date(currYear, currMonth, new Date().getDate());
            currYear = date.getFullYear();
            currMonth = date.getMonth();
        } else {
            date = new Date(); 
        }
        renderCalendar(); // Re-render the calendar on clicking prev or next
    });
});
