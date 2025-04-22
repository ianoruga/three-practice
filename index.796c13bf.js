let lists = document.getElementsByClassName(".list");
let answerBox = document.querySelector(".Answer_box1");
let choiceBox = document.querySelector(".Choices_box");
for (list of lists)list.addEventListener('dragstart', function(e) {
    let selected = e.target;
    answerBox.addEventListener("dragover", function(e) {
        e.preventDefault();
    });
    answerBox.addEventListener("drop", function(e) {
        answerBox.appendChild(selected);
        selected = null;
    });
});

//# sourceMappingURL=index.796c13bf.js.map
