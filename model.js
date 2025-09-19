const appDiv = document.getElementById('appDiv')


const greetings = ["Need a ride?", "Dude where is my money?", "Heey friieeend"]
let coolness = 50;
let correctGreeting = "";

let previousCarPart = null

const stereo = {
    displayName: 'stereo',
    coolness: 15
}
const spikeMat = {
    displayName: 'spikeMat',
    coolness: -70
}
const spoiler = {
    displayName: 'spoiler',
    coolness: 25
}
const brokenWindow = {
    displayName:'brokenWindow',
    coolness: -80
}

const carParts = [stereo, spikeMat, spoiler, brokenWindow]
const carInventory = []


let progress = 50;