import React, {useEffect, useState} from 'react';
import style from './Header.module.css'
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
        <div className={headerClasses.join(' ')}>
            <Nav/>
            <ToggleDarkMode/>
        </div>
    );
};
