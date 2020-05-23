sortList = [];

for (let i = 0; i < 100; i++) {
    sortList.push(i);
}

binarySort = function (list, target) {
    low = 0;
    high = list.length - 1;
    steps = 0;
    while (low <= high) {
        middle = (low + high);
        guess = list[middle];
        if (guess === target) {
            return console.log("Found in " + steps + " steps!")
        } else if (guess > target) {
            high = high - Math.floor((high - low) / 2);
            steps++;
        } else {
            low = high - Math.floor((high - low) / 2);
            steps++;
        }
    }
};