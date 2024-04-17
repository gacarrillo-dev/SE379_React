import Modal from "./Modal.";
import {useState} from 'react';

const Todo = () => {
    const [showModal, setShowModal] = useState(false);

    const onDismissModal = () => {
        setShowModal(false);
    }
    return (
        <>
            <div className="card">
                <div className="card-content">
                    <h2>Learn React</h2>
                    <button onClick={()=> setShowModal(true)} className="btn">Done</button>
                </div>
            </div>
            { showModal && <Modal dismissModal={onDismissModal}/>}
        </>
    );
};

export default Todo