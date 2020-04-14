function compareArray(arr1, arr2) {

    if (typeof(arr1) == 'undefined' || typeof(arr2) == 'undefined') { return "Please input an array" };
    if (typeof(arr1) != 'object' || typeof(arr2) != 'object') { return "Please input an array" };
    if ((arr1.length <= 0) || (arr2.length <= 0)) { return 'Please give arrays with elements' }
    arr1 = arr1.sort();
    arr2 = arr2.sort();

    for (i = 0; i < arr1.length; i++) {
        return (arr1[i] === arr2[i]) ? true : false;
    }
}
module.exports = {
    compareArray
}