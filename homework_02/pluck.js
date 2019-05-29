

Array.prototype.pluck = function (flag) {
    // console.log(this);
    if (flag) {
        setImmediate(() => {
            console.log(Math.max(...this));
        });

    } else if (!flag) {
        setTimeout(() => {
            console.log(Math.min(...this));
        });
    }
}

console.log('start');
[1, 2, 3, 4, 5, 6, 7, 8].pluck(true);
[1, 2, 3, 4, 5, 6, 7, 8].pluck(false);
console.log('end');

