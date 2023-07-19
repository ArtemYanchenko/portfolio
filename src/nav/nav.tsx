import React from 'react';
import {Link} from 'react-scroll';
import style from './nav.module.css'

export const Nav = () => {
    const links = ['main', 'skills', 'projects', 'contacts']

    const mappedLinks = links.map(el =>
        <Link
            to={el}
            activeClass={style.active}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
        >{el}
        </Link>)

    return (
        <div className={style.nav}>
            {mappedLinks}
        </div>
    );
};