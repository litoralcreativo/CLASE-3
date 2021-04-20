function changeJustify(index) {
  let container = document.getElementById("container");
  container.style.justifyContent = index;
}

function chengeDirection(index) {
  let container = document.getElementById("container");
  container.style.flexDirection = index;
}

function changeAlign(index) {
  let container = document.getElementById("container");
  container.style.alignItems = index;
}

function wrap(index) {
  let container = document.getElementById("container");
  container.style.flexWrap = index;
}

function removeItem() {
  let container = document.getElementById("container");
  container.removeChild(container.firstChild);
}

function addItem() {
  let container = document.getElementById("container");
  const newItem = document.createElement("div");
  newItem.className = "box";
  container.appendChild(newItem);
}
