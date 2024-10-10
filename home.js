function showCourses() {
    let loginForm = document.getElementById("loginForm");
    let physicsChoice = document.getElementById("physicsUnits");
    let comsciChoice = document.getElementById("csUnits");
    let physicsDropZone = document.getElementById("physicsDropZone");
    let comsciDropZone = document.getElementById("comsciDropZone");
    let courseContainer = document.getElementById("courseContainer");
    let submitButton = document.querySelector("#calendarSubmit button");

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        let selectedCourse = document.getElementById("courses").value;

        // Hide all units and drop zones initially
        physicsChoice.style.display = "none";
        comsciChoice.style.display = "none";
        physicsDropZone.style.display = "none";
        comsciDropZone.style.display = "none";
        courseContainer.style.display = "none";
        

        // Show the selected units and their corresponding drop zone
        courseContainer.style.display = "flex";
        if (selectedCourse === "physics") {
            physicsChoice.style.display = "flex";
            physicsDropZone.style.display = "flex";
            submitButton.style.display = "block";
            
        } else if (selectedCourse === "comsci") {
            comsciChoice.style.display = "flex";
            comsciDropZone.style.display = "flex";
            submitButton.style.display = "block";
        }
    });
}

let unitOrder = [];

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var element = document.getElementById(data);
    
    // Add the element to the drop zone
    ev.target.appendChild(element);
    element.style.width = "90%";
    
    // Update the order of units
    updateUnitOrder(ev.target);
}

function updateUnitOrder(dropZone) {
    unitOrder = []; // Reset the array
    let elements = dropZone.children;
    for (let i = 0; i < elements.length; i++) {
        unitOrder.push(elements[i].id); // Store the id of each unit in order
    }
    console.log("Current unit order:", unitOrder);
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