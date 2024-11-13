import mongoose from 'mongoose'
import { isGoodPassword } from '../utils/validators.js';

//definomos la coleccion de usuario (tabla en relacional)
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 20,
        minlength: 2,
        trim: true,
        lowercase: true,
    },
    lastName: {
        type: String,
        required: true,
        maxlength: 20,
        minlength: 2,
        trim: true,
        lowercase: true,
    },
    email: {
        type: String,
        required: true,
        maxlength: 30,
        minlength: 8,
        trim: true,
        lowercase: true,
        match: /^\S+@\S+\.\S+$/,
        unique: true,
    },
    age: {
        type: Number,
        required: true,
        min: 16,
        max: 110,
    },
    registrationDate: {
        type: Date,
        default: Date.now(),
    },
    
    password: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                return isGoodPassword(value);
            },
            message: "Error de comprobacion de longitud de contraseña",
        },
    },
});

export default mongoose.model("user", userSchema);