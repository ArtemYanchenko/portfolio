import React, {useEffect, useState} from 'react';
import style from './header.module.css'
import {Nav} from '../nav/nav';
import {ToggleDarkMode} from '../common/components/toggle-dark-mode/toggle-dark-mode';

export const Header = () => {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScroll(window.scrollY > 40);
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const headerClasses = [style.header];

    if (scroll) {
        headerClasses.push(style.scroll);
    }

    return (
        <header className={headerClasses.join(' ')}>
            <div className={style.headerName}>Artem Yanchenko</div>
            <div className={style.navToggleWrapper}>
                <ToggleDarkMode/>
                <Nav/>
            </div>
        </header>
    );
};
