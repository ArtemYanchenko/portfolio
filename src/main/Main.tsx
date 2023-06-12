import React from 'react';
import classes from './Main.module.css';
import MainPhoto from './MainPhoto/MainPhoto';
import Typed from 'react-typed';
import Button from '../common/components/Button/Button';

const Main = () => {
    return (
        <div className={classes.mainBlock}>
            <div className={classes.mainContainer}>
                <div className={classes.text}>
                    <h4>Hey!</h4>
                    <div>
                        <Typed className={classes.typingText}
                               strings={[
                                   'I\'m Artem Yanchenko',
                                   'I\'m FrontEnd Developer',
                                   'I\'m Software Engineer'
                               ]}
                               typeSpeed={100}
                               backSpeed={50}
                               loop
                        />
                    </div>
                    <p>based in <span className={classes.textLocation}>Moscow,Russia.</span></p>
                    <Button title={'Hire me'} src={'#'}/>
                </div>
                <div className={classes.photo}>
                    <MainPhoto/>
                </div>
            </div>
        </div>
    );
};

export default Main;