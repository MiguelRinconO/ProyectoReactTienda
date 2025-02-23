const  mongoose = require('mongoose');
const  bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({ 
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    isAdmin:{
        type: Boolean,
        default:false
    },
},
    {timestamps: true }
);

//validar contraseña

userSchema.methods.matchPassword= async function(enterPassword){
    return await bcrypt.compare(enterPassword,this.password);
}

// hash contraseña
userSchema.pre('save',async function(next){
    if(!this.isModified('password')){
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt);
})

module.exports = mongoose.model("User", userSchema);