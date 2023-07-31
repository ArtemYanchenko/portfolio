import React, {useState} from 'react';
import {Link} from 'react-scroll';
import style from './nav.module.css'
import burger from '../common/image/icons/icons-header/burger.svg'

export const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };
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
        <>
            <div className={style.burgerBtn} onClick={handleToggle}>
                <img src={burger} alt="burger" />
            </div>
            <div className={isOpen ? style.nav : style.navClose}>
                {mappedLinks}
            </div>
        </>

    );
};