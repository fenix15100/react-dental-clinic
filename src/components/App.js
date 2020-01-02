import React,{ Component } from 'react';
import './App.css';
import './../third-party-styles/bootstrap.min.css';
import Header from './Header/Header';
import NewAppointment from './Appointment/NewAppoinment';
import ListAppoinment from './Appointment/ListAppoinment';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      appoimments:[]
     };
  }

  createAppoitment=(appoitment)=>{
    const appoi = [...this.state.appoimments,appoitment];
    this.setState({
      appoimments:appoi
    });
  }

  render() {
    const title = 'Administración de citas Clinica Dental';
    return (
      <div className="container">
        <Header
          titulo={title}
        />
        <div className="col-md10 mx-auto">
          <NewAppointment
            createAppoitment={this.createAppoitment}
          />
        </div>

        <div className="mt-5 col-md10 mx-auto">
          <ListAppoinment
            appoimments={this.state.appoimments}
          />
        </div>

      </div>
      
    );
  }
}

export default App;
