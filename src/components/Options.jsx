import React from 'react'

export default function Options(props) {
    let uniqueKey = 0
    return (
        <div>
            <div className="widget-header">
                {props.options.length === 1 && <h3 className="widget-header__title"> Lol Just one option. Why do you even need me ?</h3>}
                {props.options.length !== 1 && <h3 className="widget-header__title">Your Options</h3>}
                <button className="button button--link" onClick={props.removeAll}>Remove All</button>
            </div>
            {props.options.length === 0 && <p className="widget__message"> Hey, Add some options here.</p>}
            {props.options.map((option, index) => {
                return (
                    <Option
                        key={uniqueKey++}
                        option={option}
                        removeOne={props.removeOne}
                        index={index + 1}
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
            <div className="option">
                <p className="option__text">{this.props.index}.  {this.props.option}</p>
                <button className="button button--link" onClick={this.removeOne} >X</button>
            </div>
        )
    }
    removeOne() {
        const option = this.props.option
        this.props.removeOne(option)
    }

}


