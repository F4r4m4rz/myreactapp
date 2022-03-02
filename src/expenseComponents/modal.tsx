import React from 'react';
import './styles/modal.css';

interface IModalContract {
    component: any,
    show: boolean,
    onCloseClick: any,
    title: string
}

function Modal(props: IModalContract){
    return (
        <div className="modal" style={props.show?{display:'block' }: {display:'none'}}>

            <div className="modal-content">
                <span className="close" onClick={props.onCloseClick}>&times;</span>
                <h2>{props.title}</h2>
                {props.component}
            </div>

        </div>
    );
}

export default Modal;