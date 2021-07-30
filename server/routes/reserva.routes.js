const  ReservaController = require('../controllers/reserva.controller')

module.exports = app => {
    //app.get('/api/reservas', ReservaController.getAllCourts);
    app.get('/api/canchas', ReservaController.getAllCourts);
    app.get('/api/cancha/:id', ReservaController.getCanchaByID);
    app.put('/api/cancha/update/:id', ReservaController.updateCancha);
    app.post('/api/reserva/new', ReservaController.createNewReserva);
    app.post('/api/cancha/new', ReservaController.createCourt);
    app.delete('/api/cancha/delete/:id', ReservaController.deleteExistingCourt);
}