import React, { useState, useEffect } from 'react';
import BookService from '../services/BookService';
import { Link } from "react-router-dom";
import {Table} from 'react-bootstrap';

const HomeCourt = () => {

    const courtsService = new BookService;
    const [canchas, setCanchas] = useState([]);

    const getAllCourtsFromService = async ()=>{
        try {
            const canchasList = await courtsService.getAllCourts();
            setCanchas(canchasList);
            console.log(canchasList);
        } catch (err) {
            console.log(err);
            return err;
        }
    }

    useEffect(() => {
        getAllCourtsFromService();
    },[])

    return (
        <div className="container">
            <h1>Reserva tu cancha</h1>
            <h3>Acá podras reservar por día y rango de hora</h3>
                <Link className="nav-link" to ="/create">
                    agregar una cancha
                </Link>
            <Table striped bordered hover="dark">
                <thead>
                    <tr>
                        <th>Numero de cancha</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {canchas.length > 0 && canchas.map((item) => (
                            <tr key={item._id} value={item._id}>
                                <th>{item.cancha}</th>
                                {/* <td>{item.type}</td> */}
                                <td>
                                    <div>
                                        <Link to={`/cancha/${item._id}`}>
                                            reservar |
                                        </Link>
                                        <Link to={`/detallecancha/${item._id}`}>
                                            | ver detalle
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    )




}

export default HomeCourt;

