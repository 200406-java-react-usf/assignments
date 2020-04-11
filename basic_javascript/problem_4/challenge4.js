function testSearch(input) {
    if (typeof(input) != 'string')
        return "Input incorrect. Please put in a string"

    input = input.toLowerCase();
    return input.replace(/\b(test)\b/gi, '')
}
module.exports = {
    testSearch
}