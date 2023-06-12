import React from 'react';
import Header from './header/Header';
import Main from './main/Main';
import Skills from './skills/Skills';
import Projects from './projects/Projects';
import classes from './App.module.css';

function App() {
    return (
        <div className={classes.app}>
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>

        </div>
    );
}

export default App;
