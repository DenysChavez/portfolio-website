const section = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controls");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");

console.log(allSections);

function pageTransition() {
    //button clicked active class: add a class with the name "active-bn" and delete the name of "active-bn" class to the other classes
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener("click", function() {
            let currentBtn = document.querySelectorAll(".active-btn");
            currentBtn[0].className = currentBtn[0].className.replace("active-btn", "");
            this.className += " active-btn";
        })
    }

    //Sections Active class: 
    allSections.addEventListener("click", (e) => {
        const id = e.target.dataset.id;
        if (id) {
            //remove selected from the other btns
            sectBtn.forEach((btn) => {
                btn.classList.remove("active")
            })
            e.target.classList.add("active");

            //hide other sections
            section.forEach((section) => {
                section.classList.remove("active");
            })

            const element = document.getElementById(id);
            element.classList.add("active");
        }
    })

    const themeBtn = document.querySelector(".theme-btn");
    themeBtn.addEventListener("click", () => {
        let element = document.body;
        element.classList.toggle("light-mode")
    })
}

pageTransition();