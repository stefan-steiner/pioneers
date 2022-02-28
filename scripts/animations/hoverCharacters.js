// Animation for hovering over characters

export function hoverOnChar(id) {
    $( id ).animate({
        top: '-=5',
        left: '-=5',
        width: '+=10',
        height: '+=10'
    }, 0, "linear", function() {
        // Animation complete.
    });
}

export function hoverOffChar(id) {
    $( id ).animate({
        top: '+=5',
        left: '+=5',
        width: '-=10',
        height: '-=10'
    }, 0, "linear", function() {
        // Animation complete.
    });
}
