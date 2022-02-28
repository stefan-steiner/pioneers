// Character class

export default class Character {
    constructor(class_name, population, coords, alive) {
        this.class_name = class_name;
        this.id = '#' + class_name + population.toString()
        this.coords = coords;
        this.alive = alive;

        $('<div/>',{
            id: class_name + population.toString(),
            class: this.class_name,
        }).appendTo('#starting-spot');

    }

    kill() {
        this.alive = false;
        $(this.id).css('background-color', 'darkred');
    }
}