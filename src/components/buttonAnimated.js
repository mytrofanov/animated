import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import s from './style/buttonAnimated.module.scss'
import {useSpring, animated, config} from '@react-spring/web'

const ButtonAnimated = () => {
    const [state, toggle] = useState(true)
    const { x } = useSpring({
        from: { x: 0 },
        x: state ? 1 : 0,
        config: { config: config.gentle },
    })
    const propStyles = useSpring({
        opacity: x.to({ range: [1, 0], output: [0.3, 1] }),
        scale: x.to({
            range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
            output: [1, 0.97, 0.7, 1.3, 0.8, 1.6, 1.03, 1],
    })
    })

    return (
        <div className={s.container} onClick={() => toggle(!state)}>
        <animated.div className={s.buttonAnimatedBlock} style={propStyles} >
            <Button variant="success" size={"lg"} >Animated Button</Button>
        </animated.div>
        </div>
    );
};

export default ButtonAnimated;
