// Main class

import {generateMap} from "./map.js";
import {initGoblin, explore, go} from "./explore.js";

let gameLoaded = false;
let gameStarted = false;

// Set up the game
$( document ).ready(function() {
    console.log("Generating the game map");
    map = generateMap();
    console.log("Map has been generated");
    gameLoaded = true;
});

// Start or resume the game
$( "#start_button" ).click(function() {
    if (!gameLoaded) {
        console.log("The game has not finished loading");
    } else if (!gameStarted) {
        console.log("Starting the game");
        startTime();
        initGoblin();
        explore();
        console.log("The game has been started");
        gameStarted = true;
    } else {
        console.log("Resuming the game");
        startTime();
        for (let i = 0; i < goblins.length; i++) {
            let goblin = goblins[i];
            console.log("Resuming goblin: " + goblin.id);
            go(goblin);
        }
        explore();
    }
});

// Pause the game
$( "#stop_button" ).click(function() {
    console.log("Pausing the game");
    stopTime();
});

// Game board
let map = [];

export function getMap() {
    return map;
}

// Time
let timeAdvancing = false;

export function startTime() {
    timeAdvancing = true;
}

export function stopTime() {
    timeAdvancing = false;
}

export function getTimeAdvancing() {
    return timeAdvancing;
}

let currYear = 0;

export function advanceYear() {
    currYear += 1;
}

export function getCurrYear() {
    return currYear;
}

let timeSpeed = 200;

export function setTimeSpeed(speed) {
    timeSpeed = speed;
}

export function getTimeSpeed() {
    return timeSpeed;
}

// Characters

let goblins = []

let goblinPop = 0;

export function addGoblin(goblin) {
    goblins.push(goblin)
    goblinPop += 1;
}

export function getGoblinPop() {
    return goblinPop;
}