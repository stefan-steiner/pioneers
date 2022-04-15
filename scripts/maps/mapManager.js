// Generate the game map

import * as constants from "../utils/constants.js";

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
}

// Add trail markings in a selected color
export function generateTrailMarkings(color) {
    for (let r = 0; r < constants.MAP_ROWS; r++) {
        for (let c = 0; c < constants.MAP_COLUMNS; c++) {
            displayTrailMarkings(r, c, color);
        }
    }
}

// Create trail markings in all directions on a space
function displayTrailMarkings(row, column, color) {
    let directions = constants.DIRECTIONS;
    let directionsLength = directions.length;
    for (let d = 0; d < directionsLength; d++) {
        let top;
        let topInt;
        let left;
        let leftInt;
        let width;
        let height;
        switch (directions[d]) {
            case constants.LEFT:
                topInt = 20 + (constants.SPACE_SIZE * row) + 20;
                leftInt = 150 + (constants.SPACE_SIZE * column);
                width = '30px';
                height = '10px';
                break;
            case constants.RIGHT:
                topInt = 20 + (constants.SPACE_SIZE * row) + 20;
                leftInt = 150 + (constants.SPACE_SIZE * column) + 20;
                width = '30px';
                height = '10px';
                break;
            case constants.UP:
                topInt = 20 + (constants.SPACE_SIZE * row);
                leftInt = 150 + (constants.SPACE_SIZE * column) + 20;
                width = '10px';
                height = '30px';
                break;
            case constants.DOWN:
                topInt = 20 + (constants.SPACE_SIZE * row) + 20;
                leftInt = 150 + (constants.SPACE_SIZE * column) + 20;
                width = '10px';
                height = '30px';
                break;
        }
        top = topInt.toString() + 'px';
        left = leftInt.toString() + 'px';
        let marker = $(document.createElement('div'));
        marker.css('position', 'absolute');
        marker.css('width', width);
        marker.css('height', height);
        marker.css('top', top);
        marker.css('left', left);
        marker.css('visibility', 'hidden');
        marker.css('background-color', color);
        marker.attr('id', 'trailMark-' + row + '-' + column + '-' + directions[d]);
        marker.appendTo('#map-start');
    }

}