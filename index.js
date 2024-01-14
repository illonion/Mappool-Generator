const modDetailsContainer = document.getElementById("modDetailsContainer")

// Add a new mod
function addNewMod() {
    const modDetailsIndividualContainer = document.createElement("div")
    modDetailsIndividualContainer.classList.add("modDetailsIndividualContainer")

    const modDetailsIndividualInputMod = document.createElement("input")
    modDetailsIndividualInputMod.classList.add("modDetailsIndividualInput")
    modDetailsIndividualInputMod.setAttribute("type", "text")

    const modDetailsIndividualInputNumber = document.createElement("input")
    modDetailsIndividualInputNumber.classList.add("modDetailsIndividualInput")
    modDetailsIndividualInputNumber.setAttribute("type", "number")

    const removeRowButton = document.createElement("button")
    removeRowButton.classList.add("selectModsPageButtonBold", "removeRowButton")
    removeRowButton.setAttribute("onclick", "removeCurrentMod(this)")
    removeRowButton.innerText = "Remove Mod"

    modDetailsIndividualContainer.append(modDetailsIndividualInputMod, modDetailsIndividualInputNumber, removeRowButton)
    modDetailsContainer.append(modDetailsIndividualContainer)
}

// Remove the current mod with the remove mod button
function removeCurrentMod(button) {
    button.parentNode.parentNode.removeChild(button.parentNode)
}