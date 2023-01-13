const mongoose = require ("mongoose");
const { Schema, model } = mongoose;
const crypto = require("crypto");

const secret = "Thisisacompanysecret0";
// const sha256Hasher = crypto.createHmac("sha256", secret);
// const hash = sha256Hasher.update(this.password);

const userSchema = new Schema({
  firstName:{
    type : String,
    required: true
  },
  lastName:{
    type : String,
    required: true
   
  },
  email:{
    type : String,
    required: true,
    unique: true
  },
  password:{
    type : String,
    required: true,
    minLength: 6
  }
});

// userSchema.pre("save", async function(next) {
//   const sha256Hasher =  crypto.createHmac("sha256", secret);
//   this.password =  sha256Hasher.update(this.password);
//   next();
// });

userSchema.statics.login = async function(email, password) {
  const user = await this.findOne({ email });
  if (user) {
    // const auth = await this.compare(password, user.password);
    // if (auth) {
      return user;
    }
  //   throw Error('incorrect password');
  // }
  throw Error('incorrect email')
};


const ProductModel = model("user", userSchema);
module.exports = ProductModel;
