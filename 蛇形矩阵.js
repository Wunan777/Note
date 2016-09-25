var arr = [];
for (var i = 0, len = 16; i < len; i++) {
    arr.push(i);
}
/////////////////////////////////

var N = Math.sqrt(arr.length);
var finalArray = [];

for (var i = 0; i < N; i++) {
    var tempArray = [];
    for (var j = N * i + 1, len = N * i + 5; j < len; j++) {
        tempArray.push(j);
    }
    finalArray.push(tempArray);
}

var steped = {};
var res = [];
fn(0, 0, 'right');

function fn(x, y, direction) {

    if (direction === '') {
        console.log(res);
        return ;
    }

    recodeStep(x, y);

    var x = parseInt(x);
    var y = parseInt(y);

    if (direction === 'right') {
        if (isValid(x, y + 1)) {
            fn(x, y + 1, direction);
        }
        else {
            direction = changeDirection(x, y);
            fn(x, y, direction);
        }
    }
    else if(direction === 'down') {
        if (isValid(x + 1, y)) {
            fn(x + 1, y, direction);
        }
        else {
            direction = changeDirection(x, y);
            fn(x, y, direction);
        }
    }
    else if(direction === 'left') {
        if (isValid(x, y - 1)) {
            fn(x, y - 1, direction);
        }
        else {
            direction = changeDirection(x, y);
            fn(x, y, direction);
        }
    }
    else if(direction === 'up') {
        if (isValid(x - 1, y)) {
            fn(x - 1, y, direction);
        }
        else {
            direction = changeDirection(x, y);
            fn(x, y, direction);
        }
    }

}

function changeDirection(x, y) {

    var x = parseInt(x);
    var y = parseInt(y);
    if (isValid(x, y + 1)) {
        return 'right';
    }
    if (isValid(x + 1, y)) {
        return 'down';
    }
    if (isValid(x, y - 1)) {
        return 'left';
    }
    if (isValid(x - 1, y)) {
        return 'up';
    }
    return '';

}

function recodeStep(x, y) {
    if (isNotsteped(x, y)) {

        var x = x + '';
        var y = y + '';
        steped[x + y] = true;

        res.push({
            pos: (x) + '-' + (y),
            value: finalArray[x][y]
        });
    }

}

function isNotsteped(x, y) {
    return !steped[x + '' + y];
}

function isValid(x, y) {

    if (x >= 0 && y >= 0 && x < N && y < N && isNotsteped(x, y)) {
        return true;
    }
    return false;
}