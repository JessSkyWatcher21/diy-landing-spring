console.log('Hello World, this is my me!');

const editables = document.querySelectorAll("[contenteditable]");

// save edits
editables.forEach(el => {
  el.addEventListener("blur", () => {
    localStorage.setItem("dataStorage-" + el.id, el.innerHTML);
  })
});

// once on load
for (var key in localStorage) {
  if (key.includes("dataStorage-")) {
    const id = key.replace("dataStorage-","");
    document.querySelector("#" + id).innerHTML = localStorage.getItem(key);
  }
}