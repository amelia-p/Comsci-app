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

    let physicsDropZone = document.getElementById("physicsDropZone");
    let comsciDropZone = document.getElementById("comsciDropZone");
    let physics2DropZone = document.getElementById("physics2DropZone");
    let physics3DropZone = document.getElementById("physics3DropZone");
    let bioDropZone = document.getElementById("bioDropZone")
    let aaDropZone = document.getElementById("aaDropZone");
    let artHistoryDropZone = document.getElementById("artHistoryDropZone");
    let calcABDropZone = document.getElementById("calcABDropZone");
    let calcBCDropZone = document.getElementById("calcBCDropZone");
    let chemDropZone = document.getElementById("chemDropZone");
    let chineseDropZone = document.getElementById("chineseDropZone");
    let compGovPolDropZone = document.getElementById("compGovPolDropZone");
    let csprDropZone = document.getElementById("csprDropZone");
    let litDropZone = document.getElementById("litDropZone");
    let apesDropZone = document.getElementById("apesDropZone");
    let euroDropZone = document.getElementById("euroDropZone");
    let frenchDropZone = document.getElementById("frenchDropZone");
    let germanDropZone = document.getElementById("germanDropZone");
    let hugDropZone = document.getElementById("hugDropZone");
    let italianDropZone = document.getElementById("italianDropZone");
    let japaneseDropZone = document.getElementById("japaneseDropZone");
    let latinDropZone = document.getElementById("latinDropZone");
    let macroEconDropZone = document.getElementById("macroEconDropZone");
    let microEconDropZone = document.getElementById("microEconDropZone");
    let musicTheoryDropZone = document.getElementById("musicTheoryDropZone");
    let physics3aDropZone = document.getElementById("physics3aDropZone");
    let precalcDropZone = document.getElementById("precalcDropZone");
    let psychDropZone = document.getElementById("psychDropZone");
    let spanishDropZone = document.getElementById("spanishDropZone");
    let statsDropZone = document.getElementById("statsDropZone");
    let usgovDropZone = document.getElementById("usgovDropZone");
    let apushDropZone = document.getElementById("apushDropZone");
    let worldDropZone = document.getElementById("worldDropZone");


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


        physicsDropZone.style.display = "none";
        comsciDropZone.style.display = "none";
        physics2DropZone.style.display = "none";
        physics3DropZone.style.display = "none";
        bioDropZone.style.display = "none";
        aaDropZone.style.display = "none";
        artHistoryDropZone.style.display = "none";
        calcABDropZone.style.display = "none";
        calcBCDropZone.style.display = "none";
        chemDropZone.style.display = "none";
        chineseDropZone.style.display = "none";
        compGovPolDropZone.style.display = "none";
        csprDropZone.style.display = "none";
        litDropZone.style.display = "none";
        apesDropZone.style.display = "none";
        euroDropZone.style.display = "none";
        frenchDropZone.style.display = "none";
        germanDropZone.style.display = "none";
        hugDropZone.style.display = "none";
        italianDropZone.style.display = "none";
        japaneseDropZone.style.display = "none";
        latinDropZone.style.display = "none";
        macroEconDropZone.style.display = "none";
        microEconDropZone.style.display = "none";
        musicTheoryDropZone.style.display = "none";
        physics3aDropZone.style.display = "none";
        precalcDropZone .style.display = "none";
        psychDropZone.style.display = "none";
        spanishDropZone.style.display = "none";
        statsDropZone.style.display = "none";
        usgovDropZone.style.display = "none";
        apushDropZone.style.display = "none";
        worldDropZone.style.display = "none";


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
            physics2DropZone.style.display = "flex";
            submitButton.style.display = "block";
            days.style.display = "block";
            explanation.style.display = "block";
        }
        else if (selectedCourse === "physics3"){
            physics3Choice.style.display = "flex";
            physics3DropZone.style.display = "flex";
            submitButton.style.display = "block";
            days.style.display = "block";
            explanation.style.display = "block";
        }
        else if (selectedCourse === "physics3a"){
            physics3aChoice.style.display = "flex";
            physics3aDropZone.style.display = "flex";
            submitButton.style.display = "block";
            days.style.display = "block";
            explanation.style.display = "block";
        }
        else if (selectedCourse === "biology"){
            bioChoice.style.display = "flex";
            bioDropZone.style.display = "flex";
            submitButton.style.display = "block";
            days.style.display = "block";
            explanation.style.display = "block";
        }
        else if (selectedCourse === "aa"){
            aaChoice.style.display = "flex";
            aaDropZone.style.display = "flex";
            submitButton.style.display = "block";
            days.style.display = "block";
            explanation.style.display = "block";
        }
        else if (selectedCourse === "artHistory"){
            artHistoryChoice.style.display = "flex";
            artHistoryDropZone.style.display = "flex";
            submitButton.style.display = "block";
            days.style.display = "block";
            explanation.style.display = "block";
        }
        else if (selectedCourse === "calcAB"){
            calcABChoice.style.display = "flex";
            calcABDropZone.style.display = "flex"
            submitButton.style.display = "block";
            days.style.display = "block";
            explanation.style.display = "block";
        }
        else if (selectedCourse === "calcBC"){
            calcBCChoice.style.display = "flex";
            calcBCDropZone.style.display = "flex"
            submitButton.style.display = "block";
            days.style.display = "block";
            explanation.style.display = "block";
        }
        else if (selectedCourse === "chemistry"){
            chemChoice.style.display = "flex";
            chemDropZone.style.display = "flex"
            submitButton.style.display = "block";
            days.style.display = "block";
            explanation.style.display = "block";
        }
        else if (selectedCourse === "chinese"){
            chineseChoice.style.display = "flex";
            chineseDropZone.style.display = "flex"
            submitButton.style.display = "block";
            days.style.display = "block";
            explanation.style.display = "block";
        }
        else if (selectedCourse === "compGovPol"){
            compGovPolChoice.style.display = "flex";
            compGovPolDropZone.style.display = "flex"
            submitButton.style.display = "block";
            days.style.display = "block";
            explanation.style.display = "block";
        }
        else if (selectedCourse === "comsciPrinciples"){
            csprChoice.style.display = "flex";
            csprDropZone.style.display = "flex"
            submitButton.style.display = "block";
            days.style.display = "block";
            explanation.style.display = "block";
        }
        else if (selectedCourse === "lit"){
            litChoice.style.display = "flex";
            litDropZone.style.display = "flex"
            submitButton.style.display = "block";
            days.style.display = "block";
            explanation.style.display = "block";
        }
        else if (selectedCourse === "apes"){
            apesChoice.style.display = "flex";
            apesDropZone.style.display = "flex"
            submitButton.style.display = "block";
            days.style.display = "block";
            explanation.style.display = "block";
        }
        else if (selectedCourse === "euro"){
            euroChoice.style.display = "flex";
            euroDropZone.style.display = "flex"
            submitButton.style.display = "block";
            days.style.display = "block";
            explanation.style.display = "block";
        }
        else if (selectedCourse === "french"){
            frenchChoice.style.display = "flex";
            frenchDropZone.style.display = "flex"
            submitButton.style.display = "block";
            days.style.display = "block";
            explanation.style.display = "block";
        }
        else if (selectedCourse === "german"){
            germanChoice.style.display = "flex";
            germanDropZone.style.display = "flex"
            submitButton.style.display = "block";
            days.style.display = "block";
            explanation.style.display = "block";
        }
        else if (selectedCourse === "hug"){
            hugChoice.style.display = "flex";
            hugDropZone.style.display = "flex"
            submitButton.style.display = "block";
            days.style.display = "block";
            explanation.style.display = "block";
        }
        else if (selectedCourse === "italian"){
            italianChoice.style.display = "flex";
            italianDropZone.style.display = "flex"
            submitButton.style.display = "block";
            days.style.display = "block";
            explanation.style.display = "block";
        }
        else if (selectedCourse === "japanese"){
            japaneseChoice.style.display = "flex";
            japaneseDropZone.style.display = "flex"
            submitButton.style.display = "block";
            days.style.display = "block";
            explanation.style.display = "block";
        }
        else if (selectedCourse === "latin"){
            latinChoice.style.display = "flex";
            latinDropZone.style.display = "flex"
            submitButton.style.display = "block";
            days.style.display = "block";
            explanation.style.display = "block";
        }
        else if (selectedCourse === "macroEcon"){
            macroEconChoice.style.display = "flex";
            macroEconDropZone.style.display = "flex"
            submitButton.style.display = "block";
            days.style.display = "block";
            explanation.style.display = "block";
        }
        else if (selectedCourse === "microEcon"){
            microEconChoice.style.display = "flex";
            microEconDropZone.style.display = "flex"
            submitButton.style.display = "block";
            days.style.display = "block";
            explanation.style.display = "block";
        }
        else if (selectedCourse === "musicTheory"){
            musicTheoryChoice.style.display = "flex";
            musicTheoryDropZone.style.display = "flex"
            submitButton.style.display = "block";
            days.style.display = "block";
            explanation.style.display = "block";
        }
        else if (selectedCourse === "precalc"){
            precalcChoice.style.display = "flex";
            precalcDropZone.style.display = "flex"
            submitButton.style.display = "block";
            days.style.display = "block";
            explanation.style.display = "block";
        }
        else if (selectedCourse === "psych"){
            psychChoice.style.display = "flex";
            psychDropZone.style.display = "flex"
            submitButton.style.display = "block";
            days.style.display = "block";
            explanation.style.display = "block";
        }
        else if (selectedCourse === "spanish"){
            spanishChoice.style.display = "flex";
            spanishDropZone.style.display = "flex"
            submitButton.style.display = "block";
            days.style.display = "block";
            explanation.style.display = "block";
        }
        else if (selectedCourse === "stats"){
            statsChoice.style.display = "flex";
            statsDropZone.style.display = "flex"
            submitButton.style.display = "block";
            days.style.display = "block";
            explanation.style.display = "block";
        }
        else if (selectedCourse === "usgov"){
            usgovChoice.style.display = "flex";
            usgovDropZone.style.display = "flex"
            submitButton.style.display = "block";
            days.style.display = "block";
            explanation.style.display = "block";
        }
        else if (selectedCourse === "apush"){
            apushChoice.style.display = "flex";
            apushDropZone.style.display = "flex"
            submitButton.style.display = "block";
            days.style.display = "block";
            explanation.style.display = "block";
        }
        else if (selectedCourse === "world"){
            worldChoice.style.display = "flex";
            worldDropZone.style.display = "flex"
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
    
        let currentDropZone = selectedCourse === "physics" ? physicsChoice : comsciChoice;
        updateUnitOrder(currentDropZone);
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

