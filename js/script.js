const choosePersone = document.querySelector(".view .row"),
    choosePersonebButton = document.querySelectorAll(".view .ok"),
    rightChecked = document.querySelector(".true"),
    falseChecked = document.querySelector(".false");

choosePersonebButton.forEach(chooseBtn => {
    chooseBtn.addEventListener("click", () => {
        chooseBtn.classList.add("load")
            // choosePersone.style.position = "absolute"
        rightChecked.style.position = "relative"
        rightChecked.style.display = "flex"
    })
})