import React from 'react';
import {Header} from './header/Header';
import {Main} from './main/main';
import {Projects} from './projects/projects';
import style from './App.module.css';
import {Contacts} from './contacts/contacts';
import {Skills} from './skills/Skills';

const App = () => {
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

export default App;
