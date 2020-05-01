const mongoose = require("mongoose");
const bcrpyt = require("bcryptjs");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {type: String, required: true},
    password: {type: String, required: true, select: false},
    name: {type: String, required: true}
});

UserSchema.methods.encryptPassword = async password => {
    const salt = await bcrpyt.genSalt(5);
    const hash = await bcrpyt.hash(password, salt);
    return hash;
};

UserSchema.methods.validPassword = async function(candidatePassword){
    const result = await bcrpyt.compare(candidatePassword, this.password);
    return result;
}

module.exports = mongoose.model("user", UserSchema);