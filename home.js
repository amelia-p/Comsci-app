function showCourses() {
    let loginForm = document.getElementById("loginForm");
    let explanation = document.getElementById("courseExplain");
    let physicsChoice = document.getElementById("physicsUnits");
    let comsciChoice = document.getElementById("csUnits");
    let dropZone = document.querySelector(".dropZone");
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
        dropZone.style.display = "none";
        courseContainer.style.display = "none";
        days.style.display = "none";
        submitButton.style.display = "none";

        // Show the selected units and their corresponding drop zone
        courseContainer.style.display = "flex";
        if (selectedCourse === "physics") {
            physicsChoice.style.display = "flex";
            dropZone.style.display = "flex";
            submitButton.style.display = "block";
            days.style.display = "block";
            explanation.style.display = "block";
        } else if (selectedCourse === "comsci") {
            comsciChoice.style.display = "flex";
            dropZone.style.display = "flex";
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
    
        // Get the unit order and store it in the hidden input
        let currentDropZone = selectedCourse === "physics" ? physicsChoice : comsciChoice;
        updateUnitOrder(currentDropZone);
        console.log("Unit order at submission:", unitOrder);
    
        // Get the number of days input
        let daysInputValue = document.getElementById("daysInputField").value;
        console.log("Number of days at submission:", daysInputValue);
    
        // Store in localStorage
        localStorage.setItem("unitOrder", JSON.stringify(unitOrder));  // Store the unit order as a string
        localStorage.setItem("days", daysInputValue);  // Store the days input
    
        // Redirect to the calendar.html page
        window.location.href = `calendar.html`;
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
    if (ev.target.classList.contains('dropZone')) {
        ev.target.appendChild(draggedElement);  // Append the dragged element to the new position
    } else if (ev.target.parentElement.classList.contains('dropZone')) {
        ev.target.parentElement.insertBefore(draggedElement, ev.target);  // Insert above the target element
    }

    // After dropping, reset the dragged element
    draggedElement = null;

    // Update the order of units after the drop
    updateUnitOrder(ev.target.closest('.dropZone'));
}

function updateUnitOrder(dropZone) {
    unitOrder = [];
    let elements = dropZone.children;
    for (let i = 0; i < elements.length; i++) {
        unitOrder.push(elements[i].id); // Store the id of each unit in order
    }
    console.log("Updated unit order:", unitOrder);
}


function loadStoredOrder(dropZone) {
    const storedOrder = JSON.parse(localStorage.getItem("unitOrder"));
    if (storedOrder) {
        for (const unitId of storedOrder) {
            let unitElement = document.getElementById(unitId);
            if (unitElement) {
                dropZone.appendChild(unitElement); // Recreate the order from storage
            }
        }
        unitOrder = storedOrder;
    }
}

// Call the function to add the event listener to the form
showCourses();
