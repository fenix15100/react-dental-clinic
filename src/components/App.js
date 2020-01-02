import React,{ Component } from 'react';
import './App.css';
import './../third-party-styles/bootstrap.min.css';
import Header from './Header/Header'
import Appoitment from './Appointment/Appoimment'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    const title = 'Administración de citas Clinica Dental';
    return (
      <div className="container">
        <Header
          titulo={title}
        />
        <div className="col-md10 mx-auto">
          <Appoitment/>
        </div>

      </div>
      
    );
  }
}

export default App;
