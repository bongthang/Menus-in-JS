var contentEle = document.body.querySelector(".content");

function makeHome() {
  contentEle.innerHTML = "";
  var headEle = document.createElement("h1");
  headEle.innerHTML = "Home Page";
  contentEle.appendChild(headEle);
}

function makeAbout() {
  contentEle.innerHTML = "";
  var headEle = document.createElement("h1");
  var botEle = document.createElement("h3");
  headEle.innerHTML = "About";
  botEle.innerHTML = "Bong";
  contentEle.appendChild(headEle);
  contentEle.appendChild(botEle);
}

function makeInteract() {
  contentEle.innerHTML = "";
  var headEle = document.createElement("h1");
  headEle.innerHTML = "Interact";
  contentEle.appendChild(headEle);
  var incEle = document.createElement("button");
  incEle.textContent = "Increase Counter";
  contentEle.appendChild(incEle);
  var inpEle = document.createElement("input");
  inpEle.id = "number";
  inpEle.value = "0";
  contentEle.appendChild(inpEle);
  incEle.addEventListener("click", function(){
   increase();
  });
}
function increase() {
  var value = parseInt(document.getElementById("number").value);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById("number").value = value;
  
}

document.body.querySelector(".homeButt").addEventListener("click", function () {
  makeHome();
});

document.body
  .querySelector(".aboutButt")
  .addEventListener("click", function () {
    makeAbout();
  });
document.body
  .querySelector(".interactButt")
  .addEventListener("click", function () {
    makeInteract();
  });