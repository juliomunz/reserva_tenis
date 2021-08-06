import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useParams, useHistory, Link} from "react-router-dom";
import BookService from '../services/BookService';
import * as moment from 'moment';

const DetalleCancha = () => {

    const { id } = useParams()
    const canchasService = new BookService();
    const [cancha, setCancha] = useState([]);
    const [reserva, setReserva] = useState([]);
    const history = useHistory();

    const getSingleCanchaFromService = async () => {
        try {
            const singleCancha = await canchasService.getOneSigleCancha(id);
            setCancha(singleCancha);
            console.log(singleCancha);
        } catch (err) {
            return err;
        }
    }

    useEffect(() => {
        getSingleCanchaFromService();
    }, [])


    return (
        <div className="container">
            <h1>Estas mirando horarios y días reservados de la cancha</h1>
            <Table>
                <thead>
                    <tr>
                        <th>Cancha</th>
                        <th>Horario</th>
                        <th>Fecha</th>
                    </tr>
                </thead>
                <tbody>
                    {cancha.length > 0 && cancha.map((item, idx, arr) => 
                        (
                            <tr key={item._id} value={reserva._id}>
                                console.log('item'])
                                <td>{item.cancha}</td>
                                <td>{item.reserva}</td>
                                <td>{moment(item.fecha).format("DD/MM/yyyy")}</td>
                            </tr>
                        )
                        )
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default DetalleCancha;