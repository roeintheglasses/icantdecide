import React from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#root')


export default function OptionModal(props) {

    return (
        <Modal
            isOpen={!!props.selectedOption}
            onRequestClose={props.decisionOkay}
            contentLabel="Selected Option"
            closeTimeoutMS={200}
            className="modal"
        >
            <h3 className="modal__title">Selected Option</h3>
            {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
            <button className="button" onClick={props.decisionOkay}> Okay </button>
        </Modal>
    )
}

