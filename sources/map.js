module.exports = function (instructions) {
    var x = 5;
    var y = 5;

    if (!instructions || !instructions.length)
        return [x, y];

    instructions.map(function (instruction) {
        switch (instruction) {
            case 'n':
                y--;
                break;
            case 's':
                y++;
                break;
            case 'e':
                x++;
                break;
            case 'w':
                x--;
                break;
        }
    });

    return [x, y];
};
