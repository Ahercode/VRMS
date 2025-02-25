import {Modal} from 'react-bootstrap'
import {KTIcon} from "../index.ts";
import {ButtonPair} from "./ButtonPair.tsx";
import React from "react";

type ConfirmPromptProps = {
    show: boolean
    handleClose: () => void
    onConfirm: (id: number | string) => void
    title: string
    messageBefore?: string
    messageAfter?: string
    recordName: string
    deleting: boolean
    id: number | string
}


const ConfirmPrompt: React.FC<ConfirmPromptProps> = (props) => {

    return (
        <Modal
            dialogClassName='modal-dialog modal-dialog-centered mw-400px'
            show={props.show}
            onHide={props.handleClose}
            backdrop={true}
        >
            <div className='modal-header justify-content-between p-4'>
                <div>
                    <h2>
                        {props.title}
                    </h2>
                </div>
                {/* begin::Close */}

                <div className='btn btn-sm btn-icon bg-secondary btn-active-color-primary' onClick={props.handleClose}>
                    <KTIcon className='fs-1 jus' iconName='cross'/>
                </div>
            </div>

            <div className='modal-body py-lg-10 px-lg-10'>
                <div>
                    <p>
                        {props.messageBefore } {props.title.toLocaleLowerCase()} {props.messageAfter} <b>{
                        props.recordName
                    }</b>?
                    </p>
                </div>
            </div>
            <div className='modal-footer justify-content-end p-2'>
                <ButtonPair
                    positiveAction={() => props.onConfirm(props.id)}
                    positiveText={props.title}
                    negativeAction={props.handleClose}
                    negativeText='Cancel'
                    positiveIcon={'trash'}
                    positiveClassName={'btn-danger btn-sm'}
                    positiveLoading={props.deleting}
                    positiveDisabled={props.deleting}
                />
            </div>
        </Modal>
    )
}

export {ConfirmPrompt}
