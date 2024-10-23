let daysInputValue = document.getElementById("none");

function showCourses() {
    let loginForm = document.getElementById("loginForm");
    let explanation = document.getElementById("courseExplain");

    let physicsChoice = document.getElementById("physicsUnits");
    let comsciChoice = document.getElementById("csUnits");
    let physics2Choice = document.getElementById("physics2Units");
    let physics3Choice = document.getElementById("physics3Units")
    let bioChoice = document.getElementById("bioUnits");
    let aaChoice = document.getElementById("aaUnits");
    let artHistoryChoice = document.getElementById("artHistoryUnits");
    let calcABChoice = document.getElementById("calcABUnits");
    let calcBCChoice = document.getElementById("calcBCUnits");
    let chemChoice = document.getElementById("chemUnits");
    let chineseChoice = document.getElementById("chineseUnits");
    let compGovPolChoice = document.getElementById("compGovPolUnits");
    let csprChoice = document.getElementById("csPrinciplesUnits");
    let litChoice = document.getElementById("litUnits");
    let apesChoice = document.getElementById("apesUnits");
    let euroChoice = document.getElementById("euroUnits");
    let frenchChoice = document.getElementById("frenchUnits");
    let germanChoice = document.getElementById("germanUnits");
    let hugChoice = document.getElementById("hugUnits");
    let italianChoice = document.getElementById("italianUnits");
    let japaneseChoice = document.getElementById("japaneseUnits");
    let latinChoice = document.getElementById("latinUnits");
    let macroEconChoice = document.getElementById("macroEconUnits");
    let microEconChoice = document.getElementById("microEconUnits");
    let musicTheoryChoice = document.getElementById("musicTheoryUnits");
    let physics3aChoice = document.getElementById("physics3aUnits");
    let precalcChoice = document.getElementById("precalcUnits");
    let psychChoice = document.getElementById("psychUnits");
    let spanishChoice = document.getElementById("spanishUnits");
    let statsChoice = document.getElementById("statsUnits");
    let usgovChoice = document.getElementById("usgovUnits");
    let apushChoice = document.getElementById("apushUnits");
    let worldChoice = document.getElementById("worldUnits");

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
        physics2Choice.style.display = "none";
        physics3Choice.style.display = "none";
        bioChoice.style.display = "none";
        aaChoice.style.display = "none";
        artHistoryChoice.style.display = "none";
        calcABChoice.style.display = "none";
        calcBCChoice.style.display = "none";
        chemChoice.style.display = "none";
        chineseChoice.style.display = "none";
        compGovPolChoice.style.display = "none";
        csprChoice.style.display = "none";
        litChoice.style.display = "none";
        apesChoice.style.display = "none";
        euroChoice.style.display = "none";
        frenchChoice.style.display = "none";
        germanChoice.style.display = "none";
        hugChoice.style.display = "none";
        italianChoice.style.display = "none";
        japaneseChoice.style.display = "none";
        latinChoice.style.display = "none";
        macroEconChoice.style.display = "none";
        microEconChoice.style.display = "none";
        musicTheoryChoice.style.display = "none";
        physics3aChoice.style.display = "none";
        precalcChoice.style.display = "none";
        psychChoice.style.display = "none";
        spanishChoice.style.display = "none";
        statsChoice.style.display = "none";
        usgovChoice.style.display = "none";
        apushChoice.style.display = "none";
        worldChoice.style.display = "none";

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
        } 
        else if (selectedCourse === "comsci") {
            comsciChoice.style.display = "flex";
            dropZone.style.display = "flex";
            submitButton.style.display = "block";
            days.style.display = "block";
            explanation.style.display = "block";
        }
        else if (selectedCourse === "physics2"){
            physics2Choice.style.display = "flex";
            dropZone.style.display = "flex";
            submitButton.style.display = "block";
            days.style.display = "block";
            explanation.style.display = "block";
        }
        else if (selectedCourse === "physics3"){
            physics3Choice.style.display = "flex";
            dropZone.style.display = "flex";
            submitButton.style.display = "block";
            days.style.display = "block";
            explanation.style.display = "block";
        }
        else if (selectedCourse === "physics3a"){
            physics3aChoice.style.display = "flex";
            dropZone.style.display = "flex";
            submitButton.style.display = "block";
            days.style.display = "block";
            explanation.style.display = "block";
        }
        else if (selectedCourse === "biology"){
            bioChoice.style.display = "flex";
            dropZone.style.display = "flex";
            submitButton.style.display = "block";
            days.style.display = "block";
            explanation.style.display = "block";
        }
        else if (selectedCourse === "aa"){
            aaChoice.style.display = "flex";
            dropZone.style.display = "flex";
            submitButton.style.display = "block";
            days.style.display = "block";
            explanation.style.display = "block";
        }
        else if (selectedCourse === "artHistory"){
            artHistoryChoice.style.display = "flex";
            dropZone.style.display = "flex";
            submitButton.style.display = "block";
            days.style.display = "block";
            explanation.style.display = "block";
        }
        else if (selectedCourse === "calcAB"){
            calcABChoice.style.display = "flex";
            dropZone.style.display = "flex";
            submitButton.style.display = "block";
            days.style.display = "block";
            explanation.style.display = "block";
        }
        else if (selectedCourse === "calcBC"){
            calcBCChoice.style.display = "flex";
            dropZone.style.display = "flex";
            submitButton.style.display = "block";
            days.style.display = "block";
            explanation.style.display = "block";
        }
        else if (selectedCourse === "chemistry"){
            chemChoice.style.display = "flex";
            dropZone.style.display = "flex";
            submitButton.style.display = "block";
            days.style.display = "block";
            explanation.style.display = "block";
        }
        else if (selectedCourse === "chinese"){
            chineseChoice.style.display = "flex";
            dropZone.style.display = "flex";
            submitButton.style.display = "block";
            days.style.display = "block";
            explanation.style.display = "block";
        }
        else if (selectedCourse === "compGovPol"){
            compGovPolChoice.style.display = "flex";
            dropZone.style.display = "flex";
            submitButton.style.display = "block";
            days.style.display = "block";
            explanation.style.display = "block";
        }
        else if (selectedCourse === "comsciPrinciples"){
            csprChoice.style.display = "flex";
            dropZone.style.display = "flex";
            submitButton.style.display = "block";
            days.style.display = "block";
            explanation.style.display = "block";
        }
        else if (selectedCourse === "lit"){
            litChoice.style.display = "flex";
            dropZone.style.display = "flex";
            submitButton.style.display = "block";
            days.style.display = "block";
            explanation.style.display = "block";
        }
        else if (selectedCourse === "apes"){
            apesChoice.style.display = "flex";
            dropZone.style.display = "flex";
            submitButton.style.display = "block";
            days.style.display = "block";
            explanation.style.display = "block";
        }
        else if (selectedCourse === "euro"){
            euroChoice.style.display = "flex";
            dropZone.style.display = "flex";
            submitButton.style.display = "block";
            days.style.display = "block";
            explanation.style.display = "block";
        }
        else if (selectedCourse === "french"){
            frenchChoice.style.display = "flex";
            dropZone.style.display = "flex";
            submitButton.style.display = "block";
            days.style.display = "block";
            explanation.style.display = "block";
        }
        else if (selectedCourse === "german"){
            germanChoice.style.display = "flex";
            dropZone.style.display = "flex";
            submitButton.style.display = "block";
            days.style.display = "block";
            explanation.style.display = "block";
        }
        else if (selectedCourse === "hug"){
            hugChoice.style.display = "flex";
            dropZone.style.display = "flex";
            submitButton.style.display = "block";
            days.style.display = "block";
            explanation.style.display = "block";
        }
        else if (selectedCourse === "italian"){
            italianChoice.style.display = "flex";
            dropZone.style.display = "flex";
            submitButton.style.display = "block";
            days.style.display = "block";
            explanation.style.display = "block";
        }
        else if (selectedCourse === "japanese"){
            japaneseChoice.style.display = "flex";
            dropZone.style.display = "flex";
            submitButton.style.display = "block";
            days.style.display = "block";
            explanation.style.display = "block";
        }
        else if (selectedCourse === "latin"){
            latinChoice.style.display = "flex";
            dropZone.style.display = "flex";
            submitButton.style.display = "block";
            days.style.display = "block";
            explanation.style.display = "block";
        }
        else if (selectedCourse === "macroEcon"){
            macroEconChoice.style.display = "flex";
            dropZone.style.display = "flex";
            submitButton.style.display = "block";
            days.style.display = "block";
            explanation.style.display = "block";
        }
        else if (selectedCourse === "microEcon"){
            microEconChoice.style.display = "flex";
            dropZone.style.display = "flex";
            submitButton.style.display = "block";
            days.style.display = "block";
            explanation.style.display = "block";
        }
        else if (selectedCourse === "musicTheory"){
            musicTheoryChoice.style.display = "flex";
            dropZone.style.display = "flex";
            submitButton.style.display = "block";
            days.style.display = "block";
            explanation.style.display = "block";
        }
        else if (selectedCourse === "precalc"){
            precalcChoice.style.display = "flex";
            dropZone.style.display = "flex";
            submitButton.style.display = "block";
            days.style.display = "block";
            explanation.style.display = "block";
        }
        else if (selectedCourse === "psych"){
            psychChoice.style.display = "flex";
            dropZone.style.display = "flex";
            submitButton.style.display = "block";
            days.style.display = "block";
            explanation.style.display = "block";
        }
        else if (selectedCourse === "spanish"){
            spanishChoice.style.display = "flex";
            dropZone.style.display = "flex";
            submitButton.style.display = "block";
            days.style.display = "block";
            explanation.style.display = "block";
        }
        else if (selectedCourse === "stats"){
            statsChoice.style.display = "flex";
            dropZone.style.display = "flex";
            submitButton.style.display = "block";
            days.style.display = "block";
            explanation.style.display = "block";
        }
        else if (selectedCourse === "usgov"){
            usgovChoice.style.display = "flex";
            dropZone.style.display = "flex";
            submitButton.style.display = "block";
            days.style.display = "block";
            explanation.style.display = "block";
        }
        else if (selectedCourse === "apush"){
            apushChoice.style.display = "flex";
            dropZone.style.display = "flex";
            submitButton.style.display = "block";
            days.style.display = "block";
            explanation.style.display = "block";
        }
        else if (selectedCourse === "world"){
            worldChoice.style.display = "flex";
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
    
                // Get the number of days input
        daysInputValue = document.getElementById("daysInputField").value;
        console.log("Number of days at submission:", daysInputValue);

        //(2000);

        calcHours();
        // console.log("let days = document.getElementById(daysInput):", days)
        console.log("hours Per Unit array:", hoursPerUnit);

        // Get the unit order and store it in the hidden input

        let dropZone = document.querySelector(".dropZone");
    
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

message = [];
function assignStudyHours(){  
    for (let i = 0; i<unitOrder.length; i++){
        while (hoursperUnit[i]>0.0){
            if (hoursPerUnit[i]>=1.0){
                message.push("Study Unit "+(i+1)+" for 1 hr"); 
                hoursPerUnit[i] = hoursPerUnit[i] - 1.0;
            }
            else {
                let a = hoursPerUnit[i]*60.0; //gets mins left
                let b = 60.0-a; //gets minutes needed to study the next Unit (so student studies for a whole hour)
                message.push("Study Unit " +(i+1)+" for "+a+" mins AND study Unit "+(i+2)+" for "+b+" mins");
                hoursPerUnit[i]=0.0;
                hoursPerUnit[i+1] = hoursPerUnit[i+1]-(b*60);
            }
        }
    }
    console.log("message", message);
}

// Call the function to add the event listener to the form
showCourses();
