function showCourses() {
    let loginForm = document.getElementById("loginForm");
    let physicsChoice = document.getElementById("physicsUnits");
    let comsciChoice = document.getElementById("csUnits");
    
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();  
        
        let selectedCourse = document.getElementById("courses").value;
        
        physicsChoice.style.display = "none";
        comsciChoice.style.display = "none";
        
        if (selectedCourse === "physics") {
            physicsChoice.style.display = "block";
            makeDraggable("physicsUnits");
        } else if (selectedCourse === "comsci") {
            comsciChoice.style.display = "block";
            makeDraggable("csUnits");
        }
    });
}

function makeDraggable(parentId) {
    let parent = document.getElementById(parentId);
    let children = parent.getElementsByClassName('draggable');
    for (let i = 0; i < children.length; i++) {
        dragElement(children[i]);
    }
}

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    elmnt.onmousedown = function(e) {
      e.preventDefault();
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;
    };
  
    function elementDrag(e) {
      e.preventDefault();
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
  
    function closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
    }
}

// Call the function to add the event listener to the form
showCourses();
