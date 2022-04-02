import ModalAnimated from "./components/modalAnimated";
import Button from 'react-bootstrap/Button';
import React, {useState} from 'react';
import s from './app.module.scss'

function App() {
    const [showModal, setShowModal] = useState(false)
  return (
   <div>

       <div className={s.centeredButtonBox}>
           Bootstrap button:
           <Button variant="secondary" onClick={()=>{setShowModal(!showModal)}}>Animated modal block</Button>
       </div>
       {showModal ? <ModalAnimated  setShowModal={setShowModal} showModal={showModal}/> : null}


   </div>
  );
}

export default App;
