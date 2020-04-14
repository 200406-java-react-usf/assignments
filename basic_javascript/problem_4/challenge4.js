function testSearch(input) {
    if (typeof(input) != 'string')
        return "Input incorrect. Please put in a string"

    return input.replace(/test/g, '');
}
module.exports = {
    testSearch
}