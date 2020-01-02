import React, { Component } from 'react';
class Appoimment extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            appoimment:{
                nombre:'',
                dni:'',
                fecha:'',
                hora:'',
                observaciones:''
            },
            error:false
        };
    }

    handleChange=(e)=>{
        this.setState({
            appoimment:{
                ...this.state.appoimment,
                [e.target.name]:e.target.value
            }
        });
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        
        const keys=Object.keys(this.state.appoimment);
        keys.forEach(key=>{
            if(this.state.appoimment[key]===''){
                this.setState({
                    error:true
                });    
            }else{
                this.setState({
                    error:false
                }); 
            }
            
        });

    }
    render() {
        return (
            <div className="card mt-5 py-5">
                <div className="card-body">
                    <h2 className=" card-title tex-center mb-5">
                        Llena el formulario para crear una nueva cita
                    </h2>
                    <form onSubmit={this.handleSubmit}>
                        {/*Comienzo linea de  Formulario*/}
                        <div className="form-group row">
                            <label htmlFor="" className="col-sm4 col-lg-2 col-form-label">
                                Nombre del Paciente
                            </label>

                            <div className="col-sm-8 col-lg-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Paciente"
                                    name="nombre"
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        {/*Fin linea de  Formulario*/}

                        {/*Comienzo linea de  Formulario*/}
                        <div className="form-group row">
                            <label htmlFor="" className="col-sm4 col-lg-2 col-form-label">
                                DNI del Paciente
                            </label>

                            <div className="col-sm-8 col-lg-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Introduce tu Numero de Identificación Nacional"
                                    name="dni"
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        {/*Fin linea de  Formulario*/}

                        {/*Comienzo linea de  Formulario*/}
                        <div className="form-group row">
                            <label htmlFor="" className="col-sm4 col-lg-2 col-form-label">
                                Fecha de la cita
                            </label>

                            <div className="col-sm-8 col-lg-5">
                                <input
                                    type="date"
                                    className="form-control"
                                    placeholder="Introduce la fecha"
                                    name="fecha"
                                    onChange={this.handleChange}
                                />
                            </div>


                            <label htmlFor="" className="col-sm4 col-lg-2 col-form-label">
                                Hora de la cita
                            </label>

                            <div className="col-sm-8 col-lg-2">
                                <input
                                    type="time"
                                    className="form-control"
                                    placeholder="Introduce la hora"
                                    name="hora"
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        {/*Fin linea de  Formulario*/}

                        {/*Comienzo linea de  Formulario*/}
                        <div className="form-group row">
                            <label htmlFor="" className="col-sm4 col-lg-2 col-form-label">
                                Observaciones del Paciente
                            </label>

                            <div className="col-sm-4 col-lg-10">
                                <textarea
                                    className="form-control"
                                    placeholder="Introduce un resumen de la cita"
                                    name="observaciones"
                                    onChange={this.handleChange}
                                >
                                </textarea>
                                
                            </div>
                        </div>
                        {/*Fin linea de  Formulario*/}

                        <input
                            type="submit"
                            className="py-3 mt-2 btn btn-success btn-block"
                            value="Agregar nueva cita"
                        />
                    </form>
                </div>
            </div>
            
        );
    }
}

export default Appoimment;