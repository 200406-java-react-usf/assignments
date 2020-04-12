const string4Api = require('./solution4Api');
const String = require('./solution-4');
const stringData = require('./solution4DB');

let string = new String('This is a test.');
string4Api.addNewString(string, addedString => {
    string4Api.getAllStrings(strings => {
        console.log(strings)});
});

// let user = new User(0, 'test', 'test', 'test', 'test', 'test', new Date('01/01/2000'));
// userApi.addNewUser(user, addedUser => {
//     userApi.getAllUsers(users => console.log(users));
// });