import './App.css';
import React from 'react';
import ModalRef from './Components/ModalRef/ModalRef';
import ModalState from './Components/ModalState/ModalState';

function App() {
    const modalRef = React.useRef(null);
    const [isModalOpen, setModal] = React.useState(false);
    const [currentValue, setValue] = React.useState('Something')
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        const input = document.querySelector('.input');
        if (currentValue === 'hack') {
            input.disabled = true;
            input.style.backgroundColor = 'red';
        } else if (currentValue === 'done') {
            input.disabled = true;
            input.style.backgroundColor = 'transparent';
        } else {
            input.style.backgroundColor = 'transparent';
            input.disabled = false;
        }
    }, [currentValue])

    return (
        <main>
            <div className="container">
                <button className="modal__button" onClick={()=>{modalRef.current.classList.add('modal--active')}}>Open with useRef</button>
                <button className="modal__button" onClick={()=>{setModal(true)}}>Open with useState</button>
                <div className="input__section">
                    <input type="text" className="input" placeholder='Write' onChange={(evt)=>{
                        setValue(evt.target.value.trim())
                    }}/>
                    <button className="reset" onClick={()=>{
                        const input = document.querySelector('.input');
                        input.value = null;
                        setValue('');
                    }}>Reset</button>
                </div>
                <div className="counter__section">
                    <p className="counter">{count}</p>
                    <button className='counter__button' onClick={()=>{
                        setCount(count+1);
                    }}>+</button>
                    <button className="counter__reset" onClick={()=>{
                        setCount(0)
                    }}>Reset</button>
                </div>

                <ModalRef ref={modalRef}/>
                <ModalState isModalOpen={isModalOpen} setModal={setModal} />
            </div>
        </main>
    )
}

export default App;
