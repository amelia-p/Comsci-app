let daysInputValue = document.getElementById("none");

function showCourses() {
    let loginForm = document.getElementById("loginForm");
    let explanation = document.getElementById("courseExplain");
    let physicsChoice = document.getElementById("physicsUnits");
    let comsciChoice = document.getElementById("csUnits");
    let physicsDropZone = document.getElementById("physicsDropZone");
    let comsciDropZone = document.getElementById("comsciDropZone");
    let courseContainer = document.getElementById("courseContainer");
    let days = document.getElementById("daysInput");
    let submitButton = document.getElementById("calendarSubmit");

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        let selectedCourse = document.getElementById("courses").value;

        // Hide all units and drop zones initially
        explanation.style.display = "none";
        physicsChoice.style.display = "none";
        comsciChoice.style.display = "none";
        physicsDropZone.style.display = "none";
        comsciDropZone.style.display = "none";
        courseContainer.style.display = "none";
        days.style.display = "none";
        submitButton.style.display = "none";

        // Show the selected units and their corresponding drop zone
        courseContainer.style.display = "flex";
        if (selectedCourse === "physics") {
            physicsChoice.style.display = "flex";
            physicsDropZone.style.display = "flex";
            submitButton.style.display = "block";
            days.style.display = "block";
            explanation.style.display = "block";
        } else if (selectedCourse === "comsci") {
            comsciChoice.style.display = "flex";
            comsciDropZone.style.display = "flex";
            submitButton.style.display = "block";
            days.style.display = "block";
            explanation.style.display = "block";
        }
    });

    //Handle form submission and populate hidden fields
    submitButton.addEventListener("click", (e) => {
        e.preventDefault();  // Prevent the default form submission
    
        // Get the selected course inside the click event handler
        const selectedCourse = document.getElementById("courses").value;
    
                // Get the number of days input
        daysInputValue = document.getElementById("daysInputField").value;
        console.log("Number of days at submission:", daysInputValue);

        //(2000);

        calcHours();
        // console.log("let days = document.getElementById(daysInput):", days)
        console.log("hours Per Unit array:", hoursPerUnit);

        // Get the unit order and store it in the hidden input
        let dropZone = selectedCourse === "physics" ? physicsDropZone : comsciDropZone;
        updateUnitOrder(dropZone);
        console.log("Unit order at submission:", unitOrder);
    
        
    
        // Store in localStorage
        localStorage.setItem("unitOrder", JSON.stringify(unitOrder));  // Store the unit order as a string
        localStorage.setItem("days", daysInputValue);  // Store the days input
    
        // Redirect to the calendar.html page
        window.location.href = `calendar.html`;
        console.log("Unit order at submission:", unitOrder);
    });
}

let unitOrder = [];

let draggedElement = null;

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    draggedElement = ev.target;  // Store the dragged element
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    
    // Ensure we are dropping inside a dropzone
    if (ev.target.classList.contains('dropzone')) {
        ev.target.appendChild(draggedElement);  // Append the dragged element to the new position
    } else if (ev.target.parentElement.classList.contains('dropzone')) {
        ev.target.parentElement.insertBefore(draggedElement, ev.target);  // Insert above the target element
    }

    // After dropping, reset the dragged element
    draggedElement = null;

    // Update the order of units after the drop
    updateUnitOrder(ev.target.closest('.dropzone'));
    
}

function updateUnitOrder(dropZone) {
    unitOrder = [];
    let elements = dropZone.children;
    for (let i = 0; i < elements.length; i++) {
        unitOrder.push(elements[i].id); // Store the id of each unit in order
    }
    console.log("Updated unit order:", unitOrder);
    //calcHours();
}



function loadStoredOrder(dropZone) {
    const storedOrder = JSON.parse(localStorage.getItem("unitOrder")); 
    if (storedOrder) {
        for (const unitId of storedOrder) {
            let unitElement = document.getElementById(unitId); //storing each of the strings in the unitOrder
            if (unitElement) {
                dropZone.appendChild(unitElement); // Recreate the order from storage
            }
        }
        unitOrder = storedOrder;
    }
    console.log(storedOrder);
}

//calcHours();
props = [];
hoursPerUnit = [];
let totalranks = 0;

function calcHours(){
    
    //for (let i = 0; i < daysInputValue; i++){
        let totalhours = daysInputValue;
    //}
    // Is this for amelia's function?
    
    ranks = [];
    for (let i = 0; i < unitOrder.length; i++) {
        //if (i > 0){ //greater than the most comfortable ranking
        ranks[i] = i; 
        totalranks += ranks[i]; //getting total numbers
        //}
    }
    for (let i = 0; i < ranks.length; i++){
        props[i] = ranks[i]/totalranks * 1.0;
        hoursPerUnit[i] = totalhours * props[i];
    }
    console.log("totalranks", ranks);

}


// submitButton.addEventListener("click", (e) => {
//     // Get the selected drop zone (physics or comsci) and update the unit order
//     let dropZone = selectedCourse === "physics" ? physicsDropZone : comsciDropZone;
//     updateUnitOrder(dropZone);  // Update the unit order array

//     // Log the current unit order when the submit button is pressed
//     console.log("Unit order at submission:", unitOrder);

//     // Get the number of days input
// let daysInputValue = document.getElementById("daysInputField").value;
// daysValueInput.value = daysInputValue;  // Store the days in the hidden input

//      // Log the number of days when the submit button is pressed
// console.log("Number of days at submission:", daysInputValue);
//  });
// // 

// Call the function to add the event listener to the form
showCourses();

