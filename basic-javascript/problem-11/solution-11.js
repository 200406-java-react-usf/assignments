function equiArr(input1, input2, onError) {
    if (!Array.isArray(input1) || !Array.isArray(input2)) {
        onError('Bad array request');
        return;
    }
    if (input1.lenght == input2.lenght) {
        let arr1 = input1.sort();
        let arr2 = input2.sort();
        for (i = 0; i <= arr1.length - 1; i++) {
            if (arr1[i] !== arr2[i]) {
                return false;
            }
        }
        return true;
    }
}
module.exports = equiArr;