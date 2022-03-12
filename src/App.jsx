import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import ModalRef from './Components/ModalRef/ModalRef';
import ModalState from './Components/ModalState/ModalState';

function App() {
    const modalRef = React.useRef(null);
    const [isModalOpen, setModal] = React.useState(false);

    return (
        <main>
            <div className="container">
                <button className="modal__button" onClick={()=>{modalRef.current.classList.add('modal--active')}}>Open with useRef</button>
                <button className="modal__button" onClick={()=>{setModal(true)}}>Open with useState</button>

                <ModalRef ref={modalRef}/>
                <ModalState isModalOpen={isModalOpen} setModal={setModal} />
            </div>
        </main>
    )
}

export default App;
