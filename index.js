const DOMSelectors = {
  button: document.getElementById("btn"),
  text: document.getElementById("text"),
  point: document.querySelectorAll(".point"),
  pt1: document.querySelector("#pt1"),
  box: document.getElementById("big-black-box"),
  input: document.querySelector(".bob"),
};

function blackText(back, note) {
  back.style.backgroundColor = "purple";
  note.textContent = "This is now a purple box.";
  note.style.fontSize = "60px";
  note.style.color = "blue";
}

list = document.querySelector("ul");
DOMSelectors.button.addEventListener("click", function () {
  blackText(DOMSelectors.box, DOMSelectors.text);
  hahahaha = 5;
  list.insertAdjacentHTML(
    "beforeend",
    `<li>${DOMSelectors.input.value}</li>`
    // `<img src="https://www.hollywoodreporter.com/wp-content/uploads/2023/04/Matthew-Lawrence-getty-77271072-H-2023.jpg?w=1296" alt="hjedhf">`
  );
  DOMSelectors.input.value = "";
});

function changeLi() {
  DOMSelectors.point.forEach((show) => console.log(show));
}
changeLi();
