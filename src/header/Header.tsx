import React, {useEffect, useState} from 'react';
import classes from './Header.module.css'
import Nav from '../nav/Nav';
import ToogleDarkMode from '../common/components/ToggleDarkMode/ToogleDarkMode';

const Header = () => {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScroll(window.scrollY > 40);
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const headerClasses = [classes.header];

    if (scroll) {
        headerClasses.push(classes.scroll);
    }

    return (
        <div className={headerClasses.join(' ')}>
            <Nav/>
            <ToogleDarkMode/>
        </div>
    );
};

export default Header;