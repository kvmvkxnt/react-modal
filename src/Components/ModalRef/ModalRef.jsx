import React from 'react';

const ModalRef = React.forwardRef((_, ref) => {
    return (
        <div className='modal' ref={ref} onClick={(evt) => {
            if (evt.target.matches('.modal')) {
                ref.current.classList.remove('modal--active')
            }
        }}>
            <div className="modal__inner">
                <h3 className="modal__ref">
                    Modal Ref
                </h3>

                <button className="modal__close" onClick={()=> {
                    ref.current.classList.remove('modal--active')
                }}>&times;</button>
            </div>
        </div>
    )
})

export default ModalRef;