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
  const container = document.getElementById("container");
  const child = container.children[0];
  container.removeChild(child);
}

function addItem() {
  let container = document.getElementById("container");
  const newItem = document.createElement("div");
  newItem.className = "box";
  container.appendChild(newItem);
}
