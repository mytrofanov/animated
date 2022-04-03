import ModalAnimated from "./components/modalAnimated";
import Button from 'react-bootstrap/Button';
import React, {useState} from 'react';
import s from './app.module.scss'
import ButtonAnimated from "./components/buttonAnimated";
import ClickAnimated from "./components/clickAnimated";

function App() {
    const [showModal, setShowModal] = useState(false)
  return (
   <div>

       <div className={s.centeredButtonBox}>
           Bootstrap button:
           <Button variant="secondary" onClick={()=>{setShowModal(!showModal)}}>Animated modal block</Button>
       </div>
       {showModal ? <ModalAnimated  setShowModal={setShowModal} showModal={showModal}/> : null}
        <ButtonAnimated/>
       <ClickAnimated/>
   </div>
  );
}

export default App;
