import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component{
  state = {
    lat:null,
    errorMessage:''
  };

  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      (position)=>{
        //call setState to update the app component after setting a new value in the state object property for position.
        this.setState({lat:position.coords.latitude});
      },
      (err)=>{
        //call setState to update the apap component after receiving an error message in the sztate object property for err.
        this.setState({errorMessage:err.message});
      }
    );
  }

  render(){
    if(this.state.errorMessage && !this.state.lat){
      return<div>Error: {this.state.errorMessage}</div>;
    }
    if(!this.state.errorMessage && this.state.lat){
      return <SeasonDisplay lat={this.state.lat}/>
    }
    return (
      <div>
        <Spinner />
      </div>
    );
  }
}

//Take the component and show it on the screen
ReactDOM.render(
  <App/>,document.querySelector('#root')
);
