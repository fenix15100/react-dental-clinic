import React,{ Component } from 'react';
import './App.css';
import './../third-party-styles/bootstrap.min.css';
import Header from './Header/Header'
import Appoitment from './Appointment/Appoimment'

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
          <Appoitment
            createAppoitment={this.createAppoitment}
          />
        </div>

      </div>
      
    );
  }
}

export default App;
