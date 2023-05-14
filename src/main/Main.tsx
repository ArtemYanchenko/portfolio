import React from 'react';
import classes from './Main.module.css';

const Main = () => {
    return (
        <div className={classes.mainBlock}>
            <div className={classes.mainContainer}>
                <div className={classes.text}>
                    <span>Привет!</span>
                    <h1>Меня зовут Артём Янченко</h1>
                    <p>Я FrontEnd разработчик</p>
                </div>
                <div className={classes.photo}></div>
            </div>
        </div>
    );
};

export default Main;