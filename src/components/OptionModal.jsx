import React from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#root')


export default function OptionModal(props) {

    return (
        <Modal
            isOpen={!!props.selectedOption}
            contentLabel="Selected Option"
        >
            <h3>
                {props.selectedOption && <p>{props.selectedOption}</p>}
            </h3>
            <button onClick={props.decisionOkay}> Okay </button>
        </Modal>
    )
}

