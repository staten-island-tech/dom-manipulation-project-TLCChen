const DOMSelectors = {
  button: document.getElementById("btn"),
  text: document.getElementById("text"),
  point: document.querySelectorAll(".point"),
  pt1: document.querySelector("#pt1"),
  box: document.getElementById("big-black-box"),
  input: document.querySelector(".bob"),
  image: document.querySelector(".cake"),
};

function blackText(back, note) {
  back.style.backgroundColor = "purple";
  note.textContent = "This is now a purple box.";
  note.style.fontSize = "60px";
  note.style.color = "blue";
}

function clear() {
  DOMSelectors.input.value = "";
  DOMSelectors.image.value = "";
}

let list = document.querySelector("ul");
DOMSelectors.button.addEventListener("click", function () {
  // blackText(DOMSelectors.box, DOMSelectors.text);

  list.insertAdjacentHTML(
    "beforeend",
    `<img src="${DOMSelectors.image.value}" alt="Cake">
    <li>${DOMSelectors.input.value}</li>`
  );

  clear();
  preventDefault();
});
