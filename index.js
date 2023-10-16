DOMSelectors = {
  form: document.getElementById("form"),
  nameInput: document.getElementById("name-input"),
  titleInput: document.getElementById("title-input"),
  imageInput: document.getElementById("image-input"),
  objects: document.getElementById("objects"),
};
DOMSelectors.form.addEventListener("submit", function () {
  event.preventDefault();
  addNewElement();
  setRemoveButtons();
  resetInputs();
});

function addNewElement() {
  p = DOMSelectors.nameInput.value;
  h2 = DOMSelectors.titleInput.value;
  image = DOMSelectors.imageInput.value;
  DOMSelectors.objects.insertAdjacentHTML(
    "afterbegin",
    `<div class="object">
                <h2>${h2}</h2>
                <p>${p}</p>
                <img class="object-image" src="${image}">
                <br>
                <button class="remove-button">Remove</button>
        </div>`
  );
}

function setRemoveButtons() {
  const buttons = document.querySelectorAll(".remove-button");
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      this.parentElement.remove();
    });
  });
}

function resetInputs() {
  DOMSelectors.nameInput.value = "";
  DOMSelectors.titleInput.value = "";
  DOMSelectors.imageInput.value = "";
}
