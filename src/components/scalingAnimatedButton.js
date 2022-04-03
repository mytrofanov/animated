import React, { useRef, useState } from "react";
import { useSpring, animated, config } from "@react-spring/web";
import s from './style/scalingAnimatedButton.module.scss'

const calc = (x, y, rect) => [
    -(y - rect.top - rect.height / 2) / 5,
    (x - rect.left - rect.width / 2) / 5,
    1.4
];
const trans = (x, y, s) =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export default function ScalingAnimatedButton() {
    const ref = useRef(null);
    const [xys, set] = useState([0, 0, 1]);

    const props = useSpring({ xys, config: config.gentle});

    return (
        <div className={s.ccardMain} ref={ref}>
            <animated.button
                className={s.ccard}
                style={{ transform: props.xys.to(trans) }}
                onMouseLeave={() => set([0, 0, 1])}
                onMouseMove={(e) => {
                    const rect = ref.current.getBoundingClientRect();
                    set(calc(e.clientX, e.clientY, rect));
                }}
            >Scaling Button
            </animated.button>

        </div>
    );
}
