import React from 'react'

export default class Options extends React.Component {
    render() {
        return (
            <div>
                <p>Here are all of the options</p>
                <Option />
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                <p>Option Component</p>
            </div>
        )
    }
}
