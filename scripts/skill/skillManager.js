// Class that holds skill utils

import {setCurrentSkill} from "../mainController.js";
import {MARK_TRAILS_SKILL, NO_SKILL} from "../utils/constants.js";

let skillTitle = $("#skillTitle");

let trailMarkingsCheckbox = $("#trailMarkingsCheckbox");

let trailsSkillBtn = $("#trailMarkings");

// Display the mark trails skill option
export function showTrailsSkill() {
    trailsSkillBtn.css('visibility', 'visible');
    skillTitle.css('visibility', 'visible');
}

// When the mark trails checkbox is clicked set that as the current skill
trailsSkillBtn.click(function() {
    if (trailMarkingsCheckbox.is(":checked")){
        console.log("Setting skill to mark trails");
        setCurrentSkill(MARK_TRAILS_SKILL);
    } else {
        console.log("Setting skill to none");
        setCurrentSkill(NO_SKILL);
    }
});