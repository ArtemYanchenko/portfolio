import React from 'react';
import s from './Button.module.css'

type PropsType = {
    title: string
    src: string
}
const Button = (props: PropsType) => {
    return (
        <a href={props.src}>
            <button className={s.btn}>
                {props.title}
            </button>
        </a>
    );
};

export default Button;