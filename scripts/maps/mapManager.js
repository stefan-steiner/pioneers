// Generate the game map

import * as constants from "../utils/constants.js";

// Map Properties

// Display a space of certain type
function displaySpace(type, row, column) {
    let space = $(document.createElement('img'));
    space.attr('src', 'resources/' + type + '.png');
    let top = 20 + (constants.SPACE_SIZE * row);
    let left = 150 + (constants.SPACE_SIZE * column);
    space.css('position', 'absolute');
    space.css('width', constants.SPACE_SIZE.toString() + 'px');
    space.css('top', top.toString() + 'px');
    space.css('left', left.toString() + 'px');
    space.appendTo('#map-start');
    generateTrailMarkings(row, column);
}

// Randomly generate a game map
export function generateMap() {
    let result = [];
    for (let r = 0; r < constants.MAP_ROWS; r++) {
        result.push([]);
        for (let c = 0; c < constants.MAP_COLUMNS; c++) {
            let spaceType;
            // Starting space and adjacent spaces should be safe
            if ((c == 6 || c == 7 || c == 8)
                && (r == 13 || r == 14)) {
                spaceType = constants.GRASS;
            } else {
                let numTypes = constants.SPACE_TYPES.length;
                let rand = Math.floor(Math.random() * numTypes);
                spaceType = constants.SPACE_TYPES[rand];
            }
            result[r].push(spaceType);
            displaySpace(spaceType, r, c);
        }
    }
    return result;
}

// Create trail markings for every space but hide them
function generateTrailMarkings(row, column) {
    let marker = $(document.createElement('div'));
    let top = 20 + (constants.SPACE_SIZE * row) + 20;
    let left = 150 + (constants.SPACE_SIZE * column) + 20;
    marker.css('position', 'absolute');
    marker.css('width', '10px');
    marker.css('height', '10px');
    marker.css('top', top.toString() + 'px');
    marker.css('left', left.toString() + 'px');
    marker.css('visibility', 'hidden');
    marker.css('background-color', 'white');
    marker.attr('id', 'trailMark-' + row + '-' + column);
    marker.css('left', left.toString() + 'px');
    marker.appendTo('#map-start');
}