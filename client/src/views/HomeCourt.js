import React, { useState, useEffect } from 'react';
import BookService from '../services/BookService';
import { Link } from "react-router-dom";
import {Button} from 'react-bootstrap';

const HomeCourt = () => {

    const courtsService = new BookService;
    const [canchas, setCanchas] = useState([]);

    const getAllCourtsFromService = async ()=>{
        try {
            const canchasList = await courtsService.getAllCourts();
            setCanchas(canchasList);
            //console.log(canchasList);
        } catch (err) {
            console.log(err);
            return err;
        }
    }

    const deleteCancha = async (id)=> { 
        try{
            await courtsService.deleteCancha(id)
            getAllCourtsFromService();
        }
        catch(err){
            return err;
        } 
    }

    useEffect(() => {
        getAllCourtsFromService();
    },[])

    return (
        <div>
                <div className="canchas-container">
                    <h1>Selecciona una cancha</h1>
                    <ul>
                        {
                            canchas.length > 0 ? (
                                canchas.map((cancha) => (
                                        <li key={cancha._id} className="card">
                                            <div className="acctions-container">
                                                Cacha Num {cancha.cancha}
                                                <Link to={`/canchas/${cancha._id}`}>
                                                    <Button variant="primary">Reservar Cancha</Button>
                                                </Link>
                                                    {/* <Button variant="danger" onClick={() => deleteCancha(cancha._id)}>Eliminar Cancha</Button> */}
                                            </div>
                                        </li>
                                    ))
                                    ) : 'No hay canchas para reservar'
                                }
                    </ul>
                </div>
        {/* <div className="container">
        <div className="header-courts mt-3">
            <Link to="/canchauno">
                <Button type="button" class="primary">Cancha Uno</Button>
            </Link>
            <Link to="/canchados">
                <Button type="button" class="primary">Cancha Dos</Button>
            </Link>
            <Link to="/canchatres">
                <Button type="button" class="primary">Cancha Tres</Button>
            </Link>
        </div>
        </div> */}
    </div>
    )
}

export default HomeCourt;

