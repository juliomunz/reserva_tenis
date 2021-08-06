import axios from 'axios';

export default class BookService {

    constructor() {}

    async createNewReserva(reserva) {
        try {
            const newReserva = await axios.post(`http://localhost:8000/api/reserva/new`, reserva);
            console.log(newReserva)
                    return newReserva.data.reserva;
                }
        catch (err) 
        {
            return err.response;
        }
    }

    async createCancha(cancha) {
        try {
            const newCancha = await axios.post(`http://localhost:8000/api/cancha/new`, cancha);
            console.log(newCancha)
                    return newCancha.data.cancha;
                }
        catch (err) 
        {
            return err.response;
        }
    }
    
    async getAllCourts() {
         try {
            const canchasList = await axios.get('http://localhost:8000/api/canchas');
            return canchasList.data.canchas
        } catch (error) {
            return error;
        }
    }
    
    async deleteCancha(id) {
        try{
            const deleteCancha = await axios.delete(`http://localhost:8000/api/cancha/delete/${id}`)
            return deleteCancha.data.canchaDeleted;
        } catch(err) {
            return err;
        }
    }

    async getOneSigleCancha(id) {
        try {
            //console.log(id)
            const cancha = await axios.get(`http://localhost:8000/api/cancha/${id}`)
            return cancha.data.cancha;
        } catch(err) {
            return err;
        }
    };

    async updateCancha(id, cancha) {
        try {
            const updateCancha = await axios.put(`http://localhost:8000/api/cancha/update/${id}`, cancha)
            return updateCancha.data.cancha;
        } catch(err) {
            return err;
        }
    }



}