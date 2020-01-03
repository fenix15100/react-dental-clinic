import React from 'react';
import Appoinment from './Appoinment'

const ListAppoinment = ({appoimments,destroyAppoiment}) => {
    const listappoi =[...appoimments];
    return (
        <div className="card mt-2 py-5">
            <div className="card-body">
                {listappoi.length>0
                    ?<h2 className="card-title tex-center">Administra las citas aqui:</h2>
                    :<h2 className="card-title tex-center">No hay citas:</h2>
                }
                
                <div className="lista-citas">
                {listappoi.map((value)=>(
                            <Appoinment
                                key={value.id}
                                appoinment={value}
                                destroyAppoiment={destroyAppoiment}
                            />
                    ))} 
                </div>
            </div>

        </div>
        
    );
}

export default ListAppoinment;