import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
    {name: 'taro', age: 18},
    {name: 'hanako', age: 3}
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

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
};

export default App;
