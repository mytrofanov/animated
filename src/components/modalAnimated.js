import React from 'react';
import s from './style/modalAnimated.module.scss'
import {useSpring, animated, config } from 'react-spring'
import {CloseButton} from "react-bootstrap";

const ModalAnimated = ({setShowModal,showModal}) => {
    const props = useSpring({
        // rotation 360 deg:
        // from: {
        //     y: '100%',
        //     rotateZ: 0, opacity: 0 },
        // to: { y: '50%',
        //     rotateZ: 360, opacity: 1 },

        from: {
            y: '100vh', opacity: 0 },
        to: { y: '0vh', opacity: 1 },
        config: config.gentle

    })

    return (
        <animated.div style={props} className={s.animatedModalBlock}>
            <CloseButton
                aria-label="Hide"
                onClick={()=>{setShowModal(!showModal)}}
                className={s.closeButton} />
            Animated Modal Block.
            Animated with: https://react-spring.io/common/props#props
        </animated.div>
    );
};

export default ModalAnimated;
