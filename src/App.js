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

const App = () => {
  const profiles = [
    {name: 'taro', age: '18'},
    {name: 'hanako'}
  ];
  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index} />
        })
      }
    </div>
  )
};
const User = (props) => {
  return <div>{props.name}, {props.age}</div>
};

User.defaultProps = {
  age: 1
}

export default App;
