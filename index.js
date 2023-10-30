const DOMSelectors = {
  button: document.querySelector(".buttonClass"),
  removing: document.querySelectorAll(".btn"),
  text: document.getElementById("text"),
  box: document.querySelector(".box"),
  input: document.querySelector(".text1"),
  image: document.querySelector(".text2"),
  card: document.querySelector(".card"),
};
function click() {
  DOMSelectors.button.addEventListener("click", function (stop) {
    black(DOMSelectors.box);
    stop.preventDefault();
    create();
    clear();
    disappear();
  });
}

function blackText(back, note) {
  back.style.backgroundColor = "purple";
  note.textContent = "This is now a purple box.";
  note.style.fontSize = "60px";
  note.style.color = "blue";
}

function black(color) {
  color.style = "border: .01rem solid black";
  color.style.opacity = "1";
}

function clear() {
  DOMSelectors.input.value = "";
  DOMSelectors.image.value = "";
}

function create() {
  let bigBox = document.querySelector(".box");
  bigBox.insertAdjacentHTML(
    "beforeend",
    `<div class="card">
      <h2 class="fontSize">${DOMSelectors.input.value}</h2>
      <img src="${DOMSelectors.image.value}" alt="cat">
      <button class="btn">Remove</button>
    </div>`
  );
  // bigBox.lastChild.addEventListener("click", function () {
  //   this.remove();
  // });
}

function disappear() {
  deleteThis = document.querySelectorAll(".btn");
  deleteThis.forEach((thisCard) =>
    thisCard.addEventListener("click", function () {
      this.parentElement.remove();
    })
  );
}

click();
