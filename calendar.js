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
    currDate = date.getDate(); 

// storing full name of all months in array
const months = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];

const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // First day of current month
        lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // Last date of current month
        lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // Last day of current month
        lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // Last date of previous month

    let liTag = "";

    // Creating inactive days of the previous month
    for (let i = firstDayofMonth; i > 0; i--) {
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }

    // Looping over current month's days
    let studyDayCount = 0; // Counter for study days
    for (let i = 1; i <= lastDateofMonth; i++) {
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear() ? "active" : "";

        // Only start counting study days from the current date
        if (i >= currDate && studyDayCount < days) {
            // Determine which unit to study based on the day
            let currentUnitIndex = studyDayCount % totalUnits; // Cycle through unitOrder
            let currentUnit = unitOrder[currentUnitIndex]; // Get the current unit
            let currentUnitHours = hoursPerUnit[currentUnitIndex]; // Get the study hours for this unit

            // Create study message for this day
            let studyTag = `Study ${currentUnit} for ${currentUnitHours} hours`;

            // Create the list item (li) for the day
            liTag += `<li class="${isToday}">${i}<br>${studyTag}</li>`;
            studyDayCount++; // Increment study day count
        } else {
            liTag += `<li class="${isToday}">${i}</li>`; // No study message if outside the study days
        }
    }

    // Creating inactive days of the next month
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
