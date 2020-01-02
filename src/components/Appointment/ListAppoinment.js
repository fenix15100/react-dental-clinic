import React from 'react';

const ListAppoinment = (props) => {
    return (
        <div className="card mt-2 py-5">
            <div className="card-body">
                <h2 className="card-title tex-center">
                    Administra las citas aqui.
                </h2>
                <div className="lista-citas">
                    {props.appoimments.map((value)=>{



                    })}

                </div>
            </div>

        </div>
        
    );
}

export default ListAppoinment;