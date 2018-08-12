import React, { Component } from 'react';

// class App extends Component {
//   render() {
//     const text = 'hi';
//     return (
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input type="text" onChange={(e) => {console.log(e)} }/>
//       </React.Fragm  ent>
//     );
//   }
// }

const App = () => (<Counter ></Counter>);
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }
  handlePlusButton = () => {
    this.setState({count: this.state.count +1});
  };
  handleMinusButton = () => {
    this.setState({count: this.state.count -1});
  };
  render() {
    return(
      <React.Fragment>
        <div>{ this.state.count }</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </React.Fragment>
    )
  }
};

export default App;
