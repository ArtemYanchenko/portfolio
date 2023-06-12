import React from 'react';
import classes from './Nav.module.css'

const Nav = () => {
    return (
        <div className={classes.nav}>
            <a href="" className={classes.navLink}>Main</a>
            <a href="" className={classes.navLink}>About</a>
            <a href="" className={classes.navLink}>Skills</a>
            <a href="" className={classes.navLink}>Projects</a>
            <a href="" className={classes.navLink}>Contact Me</a>
        </div>
    );
};

export default Nav;
