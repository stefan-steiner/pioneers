// Display a message that trails are unlocked

import * as controller from "../mainController.js";
import * as strategyManager from "../strategy/strategyManager.js";
import * as skillManager from "../skill/skillManager.js";

let trailsUnlockedBtnClicked = false;

// Trails unlocked message should be dismissed when the button is clicked
$( "#trailsUnlockedBtn" ).click(function() {
    console.log("Clicked OK - trails unlocked");
    trailsUnlockedBtnClicked = true;
});

// Wait until the trails unlocked message is dismissed
function waitUntilClick() {
    if (trailsUnlockedBtnClicked) {
        $("#blurBackground").css('visibility', 'hidden');
        $("#trailsUnlocked").css('visibility', 'hidden');
        strategyManager.showTrailsStrategy();
        skillManager.showTrailsSkill();
        controller.resumeGame();
    } else {
        window.setTimeout(waitUntilClick, 100);
    }
}

// Show the trails unlocked message
export function showTrailsUnlocked() {
    controller.stopTime();
    $("#blurBackground").css('visibility', 'visible');
    $("#trailsUnlocked").css('visibility', 'visible');
    waitUntilClick();
}