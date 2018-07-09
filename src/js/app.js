
const coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", dropDownText);
}

function dropDownText() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}

// -------------------------------------------------------------------

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// ------------------------------------------

