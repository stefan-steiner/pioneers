// Main class

import {generateMap} from "./map.js";
import {startExploring} from "./explore.js";

// Set up the game
$( document ).ready(function() {
    console.log("Generating the game map");
    map = generateMap();
});

// Start the characters
$( "#go_button" ).click(function() {
    console.log("Starting the characters");
    startExploring();
});

// Pause the game
$( "#stop_button" ).click(function() {
    console.log("Pause the game");
    timeAdvancing = false;
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

// Populations
let goblinPop = 0;

export function increaseGoblinPop() {
    goblinPop += 1;
}

export function getGoblinPop() {
    return goblinPop;
}