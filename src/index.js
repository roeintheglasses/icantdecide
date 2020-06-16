import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';


const app = {
  title: `I can't decide`,
  subtitle: `Let your AI overlords decide what you can't.`,
  options: []
}

const formSubmit = (e) => {
  e.preventDefault();

  const option = e.target.option.value;
  if (option) {
    app.options.push(option)
  }
  console.log(app.options);
  App();

}

const removeAll = () => {
  app.options = [];
  App();
}

const decide = () => {
  const rnadoNum = Math.floor(Math.random() * app.options.length);
  alert(app.options[rnadoNum]);
}

function App() {
  let uniqueKey = 0;

  const template = (
    <div>
      <h1>{app.title}</h1>
      <p>{app.subtitle}</p>
      <p>{app.options.length > 0 ? `You got these ${app.options.length} options` : 'Nothing to decide here.'}</p>
      <p></p>
      <ol>{app.options.map(option => {
        return <li key={uniqueKey++}>{option}</li>
      })}
      </ol>
      <button disabled={!app.options.length} onClick={removeAll}>Remove All</button>
      <button disabled={!app.options.length} onClick={decide}>Decide For Me!</button>
      <form onSubmit={formSubmit}>
        <input type="text" name="option" />
        <button type="submit">Add Option</button>
      </form>
    </div>
  )
  ReactDOM.render(
    template,
    document.getElementById('root')
  );
}

App()