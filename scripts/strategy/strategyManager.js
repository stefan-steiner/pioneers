// General strategy utils for the movement algorithms

import {setCurrentSkill, setCurrentStrategy} from "../mainController.js";
import {FOLLOW_BEST_STRATEGY, MARK_TRAILS_SKILL, NO_SKILL, RANDOM_STRATEGY} from "../utils/constants.js";

let followTrailCheckbox = $("#followTrailCheckbox");

let trailMarkingsCheckbox = $("#trailMarkingsCheckbox");

let trailsSkillBtn = $("#trailMarkings");

let trailsStrategyBtn = $("#followTrail");

let skillTitle = $("#skillTitle");

let strategyTitle = $("#strategyTitle");

export function showTrailsStrategy() {
    trailsSkillBtn.css('visibility', 'visible');
    trailsStrategyBtn.css('visibility', 'visible');
    skillTitle.css('visibility', 'visible');
    strategyTitle.css('visibility', 'visible');
}

trailsSkillBtn.click(function() {
    if (trailMarkingsCheckbox.is(":checked")){
        console.log("Setting skill to mark trails");
        setCurrentSkill(MARK_TRAILS_SKILL);
    } else {
        console.log("Setting skill to none");
        setCurrentSkill(NO_SKILL);
    }
});


trailsStrategyBtn.click(function() {
    if (followTrailCheckbox.is(":checked")){
        console.log("Setting strategy to follow the trail");
        setCurrentStrategy(FOLLOW_BEST_STRATEGY);
    } else {
        console.log("Setting strategy to random");
        setCurrentStrategy(RANDOM_STRATEGY);
    }
});

// Returns the direction to follow the given route
export function chooseFollowRoute(character) {
    console.log(character.id + " following route: " + character.route)
    let currentCoordsString = character.coords[0].toString() + "," + character.coords[1].toString();
    return character.route.get(currentCoordsString);
}
