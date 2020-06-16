import React from 'react'

export default class AddOptions extends React.Component {
    render() {
        return (
            <div>
                <button>Remove All</button>
                <button>Decide For Me!</button>
                <form>
                    <input type="text" name="option" />
                    <button type="submit">Add Option</button>
                </form>
            </div>
        )
    }
}

