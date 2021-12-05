let showOrder = [];
let imena = localStorage.getItem("members").split(",");
imena.pop();
shuffle(imena);
imena.push(imena[0]);
console.log(imena);

let currentMember = 0;
for (let i = 0; i < imena.length - 1; i++) {
  showOrder.push(i);
}
shuffle(showOrder);
console.log(showOrder);
//initial:
let nextArrow = document.getElementById("nextArrow");
let resultPerson = document.getElementById("resultPerson");
let currentPerson = document.getElementById("currentPerson");
currentPerson.innerHTML = imena[showOrder[currentMember]];

function startLoadingAnimation() {
  let snowflake = document.getElementById("snowflake");
  let instructions = document.querySelector(".instructions");
  let results = document.querySelector(".resultDiv");
  let button = document.getElementById("startAnimationButton");
  snowflake.addEventListener("transitionend", () => {
    snowflake.style.display = "none";
    results.style.display = "block";
  });
  snowflake.style.opacity = "1";
  instructions.style.display = "none";
  button.style.display = "none";
  snowflake.style.transform = "rotateY(800deg)";
}

let symbols = ["#", "%", "?", "$", "*"];
function insertRandomSymbols() {
  resultPerson.removeAttribute("onclick");
  let n = 0;
  let textChanging = setInterval(() => {
    shuffle(symbols);
    resultPerson.innerHTML = symbols.join("");
    n++;
    if (n >= 15) {
      clearInterval(textChanging);
      showSecretSanta();
    }
  }, 100);
}

function showSecretSanta() {
  let formattedName = formatName(imena[showOrder[currentMember] + 1]);
  resultPerson.innerHTML = formattedName;
  currentMember++;
  nextArrow.style.display = "initial";
  if (currentMember == imena.length - 1) {
    nextArrow.setAttribute("onclick", "window.location.href = '/'");
    console.log("dosta bi bilo!");
  }
}

function nextPerson() {
  currentPerson.innerHTML = imena[showOrder[currentMember]];
  resultPerson.innerHTML = symbols.join("");
  resultPerson.setAttribute("onclick", "insertRandomSymbols()");
  nextArrow.style.display = "none";
}

// shuffle:
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function formatName(name) {
  if (
    name[name.length - 1].toLowerCase() == "e" ||
    name[name.length - 1].toLowerCase() == "i" ||
    name[name.length - 1].toLowerCase() == "o" ||
    name[name.length - 1].toLowerCase() == "u"
  ) {
    name = name.split("");
    name[name.length - 1] = "u";
    name = name.join("");
  } else if (name[name.length - 1].toLowerCase() == "a") {
    name = name.split("");
    name[name.length - 1] = "i";
    name = name.join("");
  } else {
    name += "u";
  }
  return name;
}
