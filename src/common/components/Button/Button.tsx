import React from 'react';
import s from './Button.module.css'
import {Link} from 'react-scroll';
import style from '../../../nav/Nav.module.css';

type PropsType = {
    title: string
    src: string
}
const Button = (props: PropsType) => {
    return (
        <Link to={props.src} activeClass={style.active} spy={true} smooth={true} offset={-70} duration={500}>
            <button className={s.btn}>
                {props.title}
            </button>
        </Link>
    );
};

export default Button;