import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import s from './style/buttonAnimated.module.scss'
import {config, useSpring, animated,} from "react-spring";

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
            output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
    })
    })

    return (
        <animated.div className={s.buttonAnimatedBlock} style={propStyles} onClick={() => toggle(!state)}>
            <Button variant="success" size={"lg"} >Animated Button</Button>
        </animated.div>
    );
};

export default ButtonAnimated;
