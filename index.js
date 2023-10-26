const DOMSelectors = {
  button: document.querySelector(".buttonClass"),
  removing: document.querySelector(".btn"),
  text: document.getElementById("text"),
  box: document.querySelector(".box"),
  input: document.querySelector(".text1"),
  image: document.querySelector(".text2"),
  card: document.querySelectorAll(".card"),
};
function click() {
  DOMSelectors.button.addEventListener("click", function (stop) {
    black(DOMSelectors.box);
    stop.preventDefault();
    create();
    clear();
    preventDefault();
  });
}

function blackText(back, note) {
  back.style.backgroundColor = "purple";
  note.textContent = "This is now a purple box.";
  note.style.fontSize = "60px";
  note.style.color = "blue";
}

function black(color) {
  color.style = "border: .2rem solid black";
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
}

click();

function disappear() {
  console.log("I am going to be removed.");
}
document.querySelector(".btn").addEventListener("click", function () {
  cat = DOMSelectors.card;
  cat.remove();
});

document.querySelectorAll(".btn").forEach((call) =>
  call.addEventListener("click", function () {
    console.log("Removed");
  })
);

function deleteMan() {}
