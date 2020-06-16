import React from 'react';
import Header from './components/Header'
import Decide from './components/Decide'
import Option from './components/Options'
import AddOptions from './components/AddOptions'


function App() {
  return (
    <div className="App">
      <Header />
      <Decide />
      <Option />
      <AddOptions />
    </div >
  );
}

export default App;


// const formSubmit = (e) => {
//   e.preventDefault();

//   const option = e.target.option.value;
//   if (option) {
//     app.options.push(option)
//   }
//   console.log(app.options);
//   App();

// }

// const removeAll = () => {
//   app.options = [];
//   App();
// }

// const decide = () => {
//   const rnadoNum = Math.floor(Math.random() * app.options.length);
//   alert(app.options[rnadoNum]);
// }
