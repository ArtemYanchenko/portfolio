import React from 'react';
import style from './app.module.css';
import {Header} from './header/header';
import {Main} from './main/main';
import {Projects} from './projects/projects';
import {Contacts} from './contacts/contacts';
import {Skills} from './skills/skills';
import {Footer} from './footer/footer';

export const App = () => {
    return (
        <div className={style.app}>
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

