import React from 'react'

export default function Options(props) {
    let uniqueKey = 0
    return (
        <div>
            {props.options.length === 0 && <p> Hey, Add some options here.</p>}
            {props.options.length === 1 && <p> Lol Just one option. Why do you even need me ?</p>}
            {props.options.length >= 1 && <p> Here are your {props.options.length} options</p>}
            {props.options.map((option) => {
                return (
                    <Option
                        key={uniqueKey++}
                        option={option}
                        removeOne={props.removeOne}
                    />
                )
            })}
        </div>
    )
}

class Option extends React.Component {
    constructor(props) {
        super(props);
        this.removeOne = this.removeOne.bind(this);
    }
    render() {
        return (
            <div>
                <p>{this.props.option} <button onClick={this.removeOne} >x</button></p>

            </div>
        )
    }
    removeOne() {
        const option = this.props.option
        this.props.removeOne(option)
    }

}


