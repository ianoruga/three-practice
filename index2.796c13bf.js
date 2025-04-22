let lists = document.querySelectorAll(".list"); // Select all draggable items
let answerBoxes = document.querySelectorAll(".Answer_box1 > div"); // Select all b1, b2, b3, etc.
let choiceBox = document.querySelector(".Choices_box"); // Choices container
let checkButton = document.getElementById("checkButton");
let resultMessage = document.querySelector(".resultMessage");
// Define correct placements (box ID -> correct item ID)
let correctAnswers = {
    "b1": "c6",
    "b2": "c5",
    "b3": "c1",
    "b4": "c2",
    "b5": "c4",
    "b6": "c3"
};
// Enable dragging for each list item
lists.forEach((list)=>{
    list.addEventListener("dragstart", function(e) {
        e.dataTransfer.setData("text/plain", e.target.id); // Store dragged item ID
    });
});
// Enable dropping into each answer box (b1, b2, b3, etc.)
answerBoxes.forEach((box)=>{
    box.addEventListener("dragover", function(e) {
        e.preventDefault(); // Allow drop
    });
    box.addEventListener("drop", function(e) {
        e.preventDefault();
        let draggedId = e.dataTransfer.getData("text/plain"); // Get dragged item ID
        let draggedElement = document.getElementById(draggedId);
        if (draggedElement) box.appendChild(draggedElement); // Drop into specific box (b1, b2, etc.)
    });
});
// Enable dropping back to the choice box
choiceBox.addEventListener("dragover", function(e) {
    e.preventDefault(); // Allow drop
});
choiceBox.addEventListener("drop", function(e) {
    e.preventDefault();
    let draggedId = e.dataTransfer.getData("text/plain"); // Get dragged item ID
    let draggedElement = document.getElementById(draggedId);
    if (draggedElement) choiceBox.appendChild(draggedElement); // Move back to choices
});
checkButton.addEventListener("click", function() {
    let allCorrect = true;
    resultMessage.style.display = 'flex';
    answerBoxes.forEach((box)=>{
        let correctItemId = correctAnswers[box.classList[0]];
        let placedItem = box.querySelector(".list");
        if (placedItem && placedItem.id === correctItemId) placedItem.style.background = "lightgreen";
        else {
            placedItem.style.backgroundColor = "red";
            allCorrect = false;
        }
    });
    resultMessage.innerHTML = allCorrect ? "\u2705 All answers are correct!" : "\u274C Some answers are incorrect. Try again!";
});

//# sourceMappingURL=index2.796c13bf.js.map
