// Generates question "you meet friend, say hello?"
function startFriendQuest(){
    let html = /*HTML*/ 
    `<div class="GreetingsDiv">you run into a friend, how would you like to greet them?</div>`;
    // Shows 3 greetings from greetings[]
    // only one is correct
    correctGreeting = greetings[0];

    html += "";
    for (let i = 0; i< greetings.length; i++){
    html += /*HTML*/
    `<button onclick="selectGreeting('${greetings[i]}')">${greetings[i]}</button>`;
    }

    return html
}

// #region
function selectGreeting(selected){
    if (selected == correctGreeting){
      alert('Tommel opp👍')
      checkOutCar(true);
    }
    else {
      alert('Tommel ned 👎')
      checkOutCar(false);
    }
}
//#endregion


// #region CarPart Generation
function generateCarPart() {
    let html = '';

    filteredParts = carParts.filter(part => part !== previousCarPart)
    randomCarPart = filteredParts[Math.floor(Math.random() * filteredParts.length)];

    html += /*HTML*/ 
    `
    <button onclick="addToCar(randomCarPart)"><img class="carPartImage" src="IMAGES/${randomCarPart.displayName}.png"></button>
    <button onclick="rejectCarPart(randomCarPart)">Man i dont want that shit!</button>
    `
    return html
}

function addToCar(selectedCarPart) {
    previousCarPart = selectedCarPart
    carInventory.push(selectedCarPart)
    carParts.splice(carParts.indexOf(selectedCarPart), 1)
    console.log(carInventory)

    generateCarPart()
    updateView()
}

function rejectCarPart(selectedCarPart) {
    previousCarPart = selectedCarPart

    generateCarPart();
    updateView()
}
// #endregion

// #region Coolness Meter
function fillBar() {
    const reactionModifier = 2
    if (progress < 100 && progress > 0) {
      progress = carInventory.reduce((sum, part) => sum + part.coolness, 0);
      coolness += progress
      document.getElementById("ometer").style.width = progress + "%";
    }
    if (progress >= 0) {
      alert('You Lose!')
    }
    else {
      alert('You Win!')
    }
}

function emptyBar() {
    const reactionModifier = -2
    if (progress < 100 && progress > 0) {
      progress = carInventory.reduce((sum, part) => sum + part.coolness, 0);
      coolness -= progress
      document.getElementById("ometer").style.width = progress + "%";
    }
    if (progress >= 0) {
      alert('You Lose!')
    }
    else {
      alert('You Win!')
    }
}

function checkOutCar(Positive) {
    clearInterval(fillBar)
    clearInterval(emptyBar)
    if (Positive) {
      setInterval(fillBar, 6000); // Øker 1% hvert 100ms
    }
    else {
      setInterval(emptyBar, 6000); // Minker 1% hvert 100ms
    }
}
//#endregion

//setInterval(fillBar, 100); // øker 1% hvert 100ms