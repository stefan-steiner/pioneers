// Display a prompt to choose your civilization

import * as controller from "../mainController.js";
import {GOBLIN, WIZARD, CIVILIZATIONS} from "../utils/constants.js";



let currentCiv = 0

export function showChooseCiv() {
    $("#blurBackground").css('visibility', 'visible');
    $("#chooseCiv").css('visibility', 'visible');
    displayWizard();
    waitUntilClick();
}

let chooseCivSelectButtonClicked = false;

$( "#chooseCivSelectButton" ).click(function() {
    console.log("Clicked Select - picked civilization: ", CIVILIZATIONS[currentCiv]);
    controller.setCivilization(CIVILIZATIONS[currentCiv])
    hideCiv(CIVILIZATIONS[currentCiv]);
    chooseCivSelectButtonClicked = true;
});

function waitUntilClick() {
    if (chooseCivSelectButtonClicked) {
        $("#blurBackground").css('visibility', 'hidden');
        $("#chooseCiv").css('visibility', 'hidden');
        controller.startGame();
    } else {
        window.setTimeout(waitUntilClick, 100);
    }
}

let goblinImg = $("#goblinImg");
let goblinLabel = $("#civNameGoblin");


// display Goblin
function displayGoblin() {
    goblinImg.css('visibility', 'visible');
    goblinLabel.css('visibility', 'visible');
}

// hide Goblin
function hideGoblin() {
    goblinImg.css('visibility', 'hidden');
    goblinLabel.css('visibility', 'hidden');
}

let wizardImg = $("#wizardImg");
let wizardLabel = $("#civNameWizard");


// display Wizard
function displayWizard() {
    wizardImg.css('visibility', 'visible');
    wizardLabel.css('visibility', 'visible');
}

function hideWizard() {
    wizardImg.css('visibility', 'hidden');
    wizardLabel.css('visibility', 'hidden');
}

$( "#chooseCivNextButton ").click(function () {
    rotateCiv(true);
});

$( "#chooseCivPrevButton ").click(function () {
    rotateCiv(false);
});

function rotateCiv(next) {
    let prevCiv = currentCiv;
    if (next) {
        if (currentCiv == CIVILIZATIONS.length - 1) {
            currentCiv = 0;
        } else {
            currentCiv += 1;
        }
    } else {
        if (currentCiv == 0) {
            currentCiv = CIVILIZATIONS.length - 1;
        } else {
            currentCiv -= 1;
        }
    }
    hideCiv(CIVILIZATIONS[prevCiv]);
    let display = CIVILIZATIONS[currentCiv];
    switch (display) {
        case GOBLIN:
            displayGoblin();
            break;
        case WIZARD:
            displayWizard();
            break;
    }
}

function hideCiv(civ) {
    switch (civ) {
        case GOBLIN:
            hideGoblin();
            break;
        case WIZARD:
            hideWizard();
            break;
    }
}