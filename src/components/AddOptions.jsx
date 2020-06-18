import React from 'react'

export default class AddOptions extends React.Component {
    constructor(props) {
        super(props);
        this.addOption = this.addOption.bind(this);
        this.state = {
            error: undefined
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p className="addOptionError">{this.state.error}</p>}
                <form className="addOption" onSubmit={this.addOption}>
                    <input placeholder="Enter option here" className="addOption__input" type="text" name="option" />
                    <button className="button">Add Option</button>
                </form>
            </div>
        )
    }

    addOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.addOption(option);
        this.setState(() => ({ error }));
        if (!error) {
            e.target.elements.option.value = '';
        }
    }

}

