import React from 'react'

export default function Decide(props) {

    return (
        <div>
            <button className="bigButton" disabled={!props.hasOptions} onClick={props.decideOption}>What should I do ?</button>
        </div>
    )

}
