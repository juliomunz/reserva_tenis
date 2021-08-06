import React, { useState } from 'react';
import logo from '../assets/tennis_clay.png';
import {Form, Button} from 'react-bootstrap';
import BookService from '../services/BookService'
import { useHistory, useParams, Link } from "react-router-dom";
import axios from 'axios';
import * as moment from 'moment';


const ReservarCancha = () => {
    const history = useHistory()
    const bookService = new BookService();
    const { id } = useParams();
    const [courtForm, setCourtForm] = useState({
        horario: '',
        fecha: moment().format("yyyy/MM/dd"),
    })

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (id) {
        bookService.updateCancha(id, courtForm);
        //history.push("/");
        } else {
            axios.post('http://localhost:8000/api/reserva/new', courtForm)
            .then(() => history.push("/Home"))
            .catch(err => console.log(err))
        }
    }

    return (
        <>
        <div className="container-back">
                <Link to="/home">
                    <Button variant="primary">Volver al Home</Button>
                </Link>
        </div>
        <div className="container-courts">
                <p>Hola, selecciona un día y una hora disponible para jugar tenis</p>
        </div>
                <img src={logo} alt="Logo" />
            <Form onSubmit={onSubmitHandler}>
                <div className="container-option">
                <Form.Group>
                    <Form.Label>Selecciona el día</Form.Label>
                    <Form.Control id="fecha "name="fecha" type="date" value={courtForm.fecha} onChange={(e) => setCourtForm({ ...courtForm, [e.target.name]: e.target.value })} />
                </Form.Group>
                <Form.Label>Selecciona la hora</Form.Label>
                    <select id="horario" name="horario" value={courtForm.horario} onChange={(e) => setCourtForm({ ...courtForm, [e.target.name]: e.target.value })} >
                        <option value="0">Horarios disponibles</option>
                        <option value="ochoam">08 a 9:30 AM</option>
                        <option value="diezam">10 a 11:30 AM</option>
                        <option value="mediodia">12 a 13:30 PM</option>
                        <option value="dospm">14 a 15:30 PM</option>
                        <option value="cuatropm">16 a 17:30 PM</option>
                        <option value="seispm">18 a 19:30 PM</option>
                    </select>
                </div>
            <Button variant="primary" type="submit">
                        Reservar Cancha
            </Button>
            </Form>
        </>
    )
}

export default ReservarCancha