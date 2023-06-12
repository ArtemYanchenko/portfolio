import React, {useEffect, useState} from 'react';
import classes from './Header.module.css'
import style from '../common/components/Container.module.css'
import Nav from '../nav/Nav';

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
        </div>
    );
};

export default Header;