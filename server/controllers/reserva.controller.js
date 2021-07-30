const Reservas = require('../model/reserva.model');
const Cancha = require('../model/reserva.model');

module.exports.createNewReserva = (req,res) => {
    Reservas.create(req.body)
    .then(newReserva => res.send({reserva: newReserva}))
    .catch(err => res.send({errors: err}));
}

module.exports.createCourt = (req,res) => {
    Reservas.create(req.body)
    .then (newCancha => res.send({canchas: newCancha}))
    .catch(err => res.send({errors: err}));
}

module.exports.updateCancha = (req,res) => {
    //console.log('hola')
    // SampleModel.find( { dates : { $elemMatch: {  date : { $gte: 'DATE_VALUE'}}}})
    // SampleModel.find( { 'dates.date': { $gte: 'DATE_VALUE' } } )
    Cancha.findByIdAndUpdate 
    (req.params.id,
    {
    $push: 
        {"reserva": 
            {fecha: req.body.fecha, horario: req.body.horario}
        }
    },
        {safe: true, upsert: true, new : true}
    )

    .then(updateCancha => res.json({ cancha: updateCancha}))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
}

module.exports.getAllCourts = (req, res) => {
    Reservas.find()
    .then(allCourts => res.json({canchas: allCourts}))
    .catch(err => res.json({canchas: null}));
}

module.exports.getCanchaByID = (req, res) => {
    Cancha.findById(req.params.id)
    .then(singleCancha => res.json({canchaData: singleCancha}))
    .catch(error => res.json({canchaData: null}));
}

module.exports.deleteExistingCourt = (req, res) => {
    Cancha.findByIdAndDelete({_id: req.params.id })
        .then(deleteCancha => res.json({ message: "cancha eliminada" }))
        .catch(err => res.json({ message: "Algo salió mal", error: err }));
};
