import React from 'react';

function ModalState({isModalOpen, setModal}) {
    return (
        <div className={`modal ${isModalOpen ? 'modal--active' : ''}`} onClick={(evt) => {
            if (evt.target.matches('.modal')) {
                setModal(false);
            }
        }}>
            <div className="modal__inner">
                <h3 className="modal__ref">
                    Modal Ref
                </h3>

                <button className="modal__close" onClick={()=>{setModal(false)}}>&times;</button>
            </div>
        </div>
    )
}

export default ModalState;