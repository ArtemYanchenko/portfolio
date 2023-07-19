import React from 'react';
import {Header} from './header/header';
import {Main} from './main/main';
import {Projects} from './projects/projects';
import style from './app.module.css';
import {Contacts} from './contacts/contacts';
import {Skills} from './skills/skills';

export const App = () => {
    return (
        <div className={style.app}>
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Contacts/>
        </div>
    );
}

