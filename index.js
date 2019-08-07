import React from 'react';
import ReactDOM from 'react-dom';

class HelloMessage extends React.Component {
  constructor(props) {
      super(props);
      this.state = {value: 'one'};
      this.handleUpChange = this.handleUpChange.bind(this);
      this.handleDownChange = this.handleDownChange.bind(this);
  }
  
  handleUpChange() {
    if(this.state.value === 'one'){
      this.setState({value: 'two'})
    }
    if(this.state.value === 'two'){
      this.setState({value: 'three'})
    }
  }
  handleDownChange(){
    if(this.state.value === 'three'){
      this.setState({value: 'two'})
    }
    if(this.state.value === 'two'){
      this.setState({value: 'one'})
    }
  }

  render() {
    var value = this.state.value;
    let button1 = null;
    let button2 = null;
    if (value === 'one') {
      button1 = <button onClick={this.handleUpChange}>up</button>;
    } 
    if(value === 'two'){
      button1 = <button onClick={this.handleUpChange}>up</button>;
      button2 = <button onClick={this.handleDownChange}>down</button>;
    }
    if (value === 'three') {
      button2 = <button onClick={this.handleDownChange}>down</button>;
    } 
   
      return <div>  
      {button1}
      {button2}
      <h1>{value}</h1>
      </div>
  }
}
ReactDOM.render(
  <HelloMessage />,
  document.getElementById('root')
);