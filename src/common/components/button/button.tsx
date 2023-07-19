import React from 'react';
import s from './button.module.css'
import {Link} from 'react-scroll';
import style from '../../../nav/nav.module.css';

type PropsType = {
    title: string
    src: string
}
export const Button = (props: PropsType) => {
    return (
        <Link to={props.src} activeClass={style.active} spy={true} smooth={true} offset={-70} duration={500}>
            <button className={s.btn}>
                {props.title}
            </button>
        </Link>
    );
};
