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

  componentDidMount(){
    const data = localStorage.getItem('appoimments');
    if(data){
      this.setState({
        appoimments:JSON.parse(data)
      })
    }

  }

  componentDidUpdate(){
    const data =[...this.state.appoimments];
    localStorage.setItem('appoimments',
                          JSON.stringify(data)
                        );
  }
  
  createAppoitment=(appoitment)=>{
    const appoi = [...this.state.appoimments,appoitment];
    this.setState({
      appoimments:appoi
    });
  }

  destroyAppoiment=(id)=>{
    const actualappoiments = [...this.state.appoimments];
    const filteredappoiments = actualappoiments.filter((obj)=>obj.id!==id)

    this.setState({
      appoimments:filteredappoiments
    })
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
            destroyAppoiment={this.destroyAppoiment}
          />
        </div>

      </div>
      
    );
  }
}

export default App;
