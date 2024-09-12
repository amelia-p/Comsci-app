function showCourses() {
    let loginForm = document.getElementById("loginForm");
    let physicsChoice = document.getElementById("physicsChoice");
    let compsciChoice = document.getElementById("compsciChoice");
    
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();  
        
        let selectedCourse = document.getElementById("courses").value;
        
        physicsChoice.style.display = "none";
        compsciChoice.style.display = "none";
        
        if (selectedCourse === "physics") {
            physicsChoice.style.display = "block";
        } else if (selectedCourse === "compsci") {
            compsciChoice.style.display = "block";
        }
    });
}

// Call the function to add the event listener to the form
showCourses();

