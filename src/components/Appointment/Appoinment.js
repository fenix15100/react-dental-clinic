import React from 'react';

const Appoinment = ({appoinment,destroyAppoiment}) => {

    return (
        <div className="media mt-3">
            <div className="media-body">
                <h3 className="mt-0">Nombre: {appoinment.nombre}</h3>
                <p className="card-text">DNI: {appoinment.dni}</p>
                <p className="card-text">Fecha: {appoinment.fecha}</p>
                <p className="card-text">Hora: {appoinment.hora}</p>
                <p className="card-text">Observaciones: {appoinment.observaciones}</p>
                <p className="card-text">ID: {appoinment.id}</p>
                <button 
                    className="btn btn-danger"
                    onClick={()=>destroyAppoiment(appoinment.id)}
                > Eliminar Cita
                </button>
            </div>
           
        </div>
        
    );
}

export default Appoinment;