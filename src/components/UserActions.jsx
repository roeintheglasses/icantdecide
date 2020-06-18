import React from 'react'

export default function UserActions(props) {

    return (
        <div>
            <button disabled={!props.hasOptions} onClick={props.decideOption}>What should I do ?</button>

            <button disabled={!props.hasOptions} onClick={props.removeAll}>Remove All</button>
        </div>
    )

}
