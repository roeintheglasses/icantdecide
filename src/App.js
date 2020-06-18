import React from 'react';
import Header from './components/Header'
import UserActions from './components/UserActions'
import Options from './components/Options'
import AddOptions from './components/AddOptions'
import OptionModal from './components/OptionModal'


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userOptions: ['yaaa', 'yeet'],
      selectedOption: undefined
    }
    this.decideOption = this.decideOption.bind(this);
    this.removeAll = this.removeAll.bind(this);
    this.removeOne = this.removeOne.bind(this);
    this.addOption = this.addOption.bind(this);
    this.decisionOkay = this.decisionOkay.bind(this);
  }



  //Render Function

  render() {
    const appSubtitle = "Let your AI overlords decide what you can't.";

    return (
      <div className="App">
        <Header subTitle={appSubtitle} />
        <UserActions
          hasOptions={this.state.userOptions.length > 0}
          decideOption={this.decideOption}
          removeAll={this.removeAll} />
        <Options options={this.state.userOptions} removeOne={this.removeOne} />
        <AddOptions addOption={this.addOption} />
        <OptionModal selectedOption={this.state.selectedOption} decisionOkay={this.decisionOkay} />
      </div >
    );
  }

  //Component Functions

  componentDidMount() {

    try {
      const json = localStorage.getItem('userOptions')
      const userOptions = JSON.parse(json);
      if (userOptions) {
        this.setState((prevState) => ({ userOptions }));
        console.log("fetching data")
      }
    } catch (err) { }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.userOptions.length !== this.state.userOptions.length) {
      const json = JSON.stringify(this.state.userOptions);
      localStorage.setItem("userOptions", json);
      console.log("saving data");
    }
  }

  componentWillUnmount() {
    console.log("component will unmount")
  }


  //App Functions

  addOption(option) {
    if (!option) {
      return "Please add a valid option."
    } else if (this.state.userOptions.indexOf(option) > -1) {
      return "Option already exists."
    }
    this.setState((prevState) => ({
      userOptions: prevState.userOptions.concat([option])
    }));
  }

  decideOption() {
    const chosenOptionIndex = Math.floor(Math.random() * this.state.userOptions.length);
    this.setState(() => ({ selectedOption: this.state.userOptions[chosenOptionIndex] }))
  }

  removeAll() {
    this.setState(() => ({ userOptions: [] }))
  }

  removeOne(option) {
    console.log(option)
    this.setState((prevState) => ({
      userOptions: prevState.userOptions.filter(userOption => userOption !== option)
    }));

  }

  decisionOkay() {
    console.log("decision okay")
    this.setState((prevState) => ({
      selectedOption: undefined
    }));
  }

}

