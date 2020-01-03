import React from 'react';

const Appoinment = (props) => {

    return (
        <div className="media mt-3">
            <div className="media-body">
                <h3 className="mt-0">Nombre: {props.appoinment.nombre}</h3>
                <p className="card-text">DNI: {props.appoinment.dni}</p>
                <p className="card-text">Fecha: {props.appoinment.fecha}</p>
                <p className="card-text">Hora: {props.appoinment.hora}</p>
                <p className="card-text">Observaciones: {props.appoinment.observaciones}</p>
                <p className="card-text">ID: {props.appoinment.id}</p>
                <button 
                    className="btn btn-danger"
                    onClick={()=>props.destroyAppoiment(props.appoinment.id)}
                > Eliminar Cita
                </button>
            </div>
           
        </div>
        
    );
}

export default Appoinment;