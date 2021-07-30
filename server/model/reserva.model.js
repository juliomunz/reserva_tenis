const mongoose = require ('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

const ReservaSchema = new mongoose.Schema({
        fecha: {
            type: Date,
            required: [true, 'la fecha es requerida'],
        },
        horario: {
            type: [String],
            required: [true, 'solo puedes seleccionar un horario por día']
        },
    }
    // {timestamps: true}
)

const Reservas = mongoose.model('Reservas', ReservaSchema);
module.exports = Reservas;
ReservaSchema.plugin(uniqueValidator);

const CanchaSchema = new mongoose.Schema({
        cancha: {
            type: Number,
            required:[true, 'necesitas seleccionar una cancha']
        },
        reserva: [ReservaSchema]
})

const Cancha = mongoose.model('Cancha', CanchaSchema);
module.exports = Cancha;

// const CreditStoreSchema = new mongoose.Schema({
//     store: {
//         type: String,
//         unique: false,
//         required: [true, "Tienda debe tener un nombre"],
//         minlength: [3, "Email debe tener mínimo 3 caracteres"]
//     },
//     amount: {
//         type: Number,
//         unique: false,
//         min: [0, "No puede tener menos de $0 en créditos"]
//     }
// })

// const UserSchema = new mongoose.Schema({
//     email: {
//         type: String,
//         unique: true,
//         required: [true, "Usuario debe tener registrar un email"],
//         minlength: [3, "Email debe tener mínimo 3 caracteres"]
//     },
//     credit: [CreditStoreSchema]
// })
//UserSchema.plugin(uniqueValidator);
//const User = mongoose.model('User', UserSchema);
//module.exports = User;
