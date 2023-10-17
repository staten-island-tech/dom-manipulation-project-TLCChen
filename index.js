const DOMSelectors = {
  button: document.getElementById("btn"),
  text: document.getElementById("text"),
  point: document.querySelectorAll(".point"),
  pt1: document.querySelector("#pt1"),
  box: document.getElementById("big-black-box"),
};

function blackText(back, note) {
  back.style.backgroundColor = "purple";
  note.textContent = "This is now a purple box.";
  note.style.fontSize = "60px";
  note.style.color = "blue";
}

DOMSelectors.button.addEventListener("click", function () {
  blackText(DOMSelectors.box, DOMSelectors.text);
});

function changeLi() {
  DOMSelectors.point.forEach((show) => console.log(show));
}
changeLi();
