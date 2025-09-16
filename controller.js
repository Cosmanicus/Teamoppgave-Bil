
// Updates html variable with two buttons inside moveCarButtons[]
// Then calls updateview
// Then 
function createButton() {
    let holdButtons = []
    
    for (let i = 0; i < moveCarButtons.length; i ++) {
        let direction = moveCarButtons[i];
        html += /*HTML*/
        `<button class="moveCarButton" id="holdButton${direction}"></button>`;
    }

    updateView();
    for (let i = 0; i < moveCarButtons.length; i++) {
        let direction = moveCarButtons[i];
        holdButtons[i] = document.getElementById(`holdButton${direction}`);
        let button = holdButtons[i];
        holdButtonInterval(button, direction);
    }

    console.log(html);
    console.log(holdButtons)

    html = '';
}

// button Interval function
function holdButtonInterval(heldButton, directionButton) {
    let heldButtonInterval = null;
    heldButton.addEventListener('mousedown', () => {
                heldButtonInterval = setInterval(() => {
                    console.log(`button ${directionButton} is being held!`)
                }, 50);
            });
            
            heldButton.addEventListener('mouseup', () => {
                clearInterval(heldButtonInterval);
                console.log(`Button ${directionButton} was released!`)
            });

            heldButton.addEventListener('mouseleave', () => {
                clearInterval(heldButtonInterval);
                console.log(`Button ${directionButton} was left!`)
            });
}
