// Main class

import * as mapManager from "./maps/mapManager.js";
import * as constants from "./utils/constants.js";
import * as trailsUnlockedMessage from "./messages/trailsUnlockedMessage.js";
import * as characterManager from "./characterManager.js";
import * as chooseCivMessage from "./messages/chooseCivMessage.js";

let gameLoaded = false;
let gameStarted = false;

let startButton = $( "#start_button" );
let resumeButton = $( "#resume_button" );
let pauseButton = $("#pause_button");


// Set up the game
$( document ).ready(function() {
    console.log("Generating the game map");
    map = mapManager.generateMap();
    console.log("Map has been generated");
    gameLoaded = true;
});

// Execute the game
export async function runGame() {
    while(getTimeAdvancing()) {
        advanceYear();
        let year = getCurrYear()
        $("#curr_year").text(year);
        if (year % 20 === 0) {
            characterManager.initGoblin();
        }
        if (year === 30) { // Change to 30
            trailsUnlockedMessage.showTrailsUnlocked();
        }
        await new Promise(r => setTimeout(r, getTimeSpeed()));
    }
}

// Start button logic
startButton.click(function() {
    if (!gameLoaded) {
        console.log("The game has not finished loading");
    } else {
        startButton.css('visibility', 'hidden');
        pauseButton.css('visibility', 'visible');
        chooseCivMessage.showChooseCiv();
    }
});

// Start button logic
resumeButton.click(function() {
    resumeButton.css('visibility', 'hidden');
    pauseButton.css('visibility', 'visible');
    resumeGame();
});

// Selected Civilization
let selectedCiv = constants.WIZARD;

export function setCivilization(civ) {
    selectedCiv = civ;
}

export function getCivilization() {
    return selectedCiv;
}

// Start the game
export function startGame() {
    startTime();
    characterManager.initGoblin();
    console.log("The game has been started 1");
    runGame();
    console.log("The game has been started 2");
    gameStarted = true;
}


export function resumeGame() {
    console.log("Resuming the game");
    startTime();
    for (let i = 0; i < goblins.length; i++) {
        let goblin = goblins[i];
        console.log("Resuming goblin: " + goblin.id);
        characterManager.go(goblin);
    }
    runGame();
}

// Pause the game
pauseButton.click(function() {
    console.log("Pausing the game");
    resumeButton.css('visibility', 'visible');
    pauseButton.css('visibility', 'hidden');
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

// Strategy

let currentStrategy = constants.RANDOM_STRATEGY;

export function setCurrentStrategy(strategy) {
    currentStrategy = strategy;
}

export function getCurrentStrategy() {
    return currentStrategy;
}

// Character that has moved the furthest

let overallBestRow = 0;

export function getBestRow() {
    return overallBestRow;
}

export function setBestRow(row) {
    overallBestRow = row;
}

let bestCharacter = null;

export function getBestCharacter() {
    return bestCharacter;
}

export function setBestCharacter(character) {
    bestCharacter = character;
}

// Skills

let currentSkill = constants.NO_SKILL;

export function getCurrentSkill() {
    return currentSkill;
}

export function setCurrentSkill(skill) {
    currentSkill = skill;
}

