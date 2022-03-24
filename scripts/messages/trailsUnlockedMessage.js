// Display a message that trails are unlocked

import * as controller from "../mainController.js";
import * as strategyManager from "../strategy/strategyManager.js";

let trailsUnlockedBtnClicked = false;

$( "#trailsUnlockedBtn" ).click(function() {
    console.log("Clicked OK - trails unlocked");
    trailsUnlockedBtnClicked = true;
});

function waitUntilClick() {
    if (trailsUnlockedBtnClicked) {
        $("#blurBackground").css('visibility', 'hidden');
        $("#trailsUnlocked").css('visibility', 'hidden');
        strategyManager.showTrailsStrategy();
        controller.resumeGame();
    } else {
        window.setTimeout(waitUntilClick, 100);
    }
}

export function showTrailsUnlocked() {
    controller.stopTime();
    $("#blurBackground").css('visibility', 'visible');
    $("#trailsUnlocked").css('visibility', 'visible');
    waitUntilClick();
}