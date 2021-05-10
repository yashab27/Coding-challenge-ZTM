function cleanRoom(arr) {
    arr.sort(function(a, b) {
        return a - b;
    });
    let cleanArray = [
        [],
        []
    ];
    let counter = -1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i - 1] !== arr[i]) {
            if (typeof arr[i] === 'number') {
                cleanArray[0].push(arr[i]);
            } else {
                cleanArray[1].push(arr[i]);
            }
            counter++;
        } else {
            if (typeof arr[i] === 'number') {
                cleanArray[0][counter] = Array.from(cleanArray[0][counter]).concat(arr[i]);
            } else {
                cleanArray[0][counter] = Array.from(cleanArray[1][counter]).concat(arr[i]);
            }
        }
    }
    if (cleanArray[1].length === 0) {
        cleanArray.pop([1]);
    }
    if (cleanArray[0].length === 0) {
        cleanArray.pop([0]);
    }
    return cleanArray;
}