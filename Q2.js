function sum(arrayofnum, targetnum) {
    for (let i = 0; i < arrayofnum.length; i++) {
        for (let j = 0; j < arrayofnum.length; j++) {
            if ((arrayofnum[i] + arrayofnum[j] === targetnum) && arrayofnum[i] !== arrayofnum[j]) {
                return [arrayofnum[i], arrayofnum[j]];
            }
        }
    }
    return 'Does not exist.';
}