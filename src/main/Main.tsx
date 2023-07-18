import React from 'react';
import classes from './Main.module.css';
import MainPhoto from './MainPhoto/MainPhoto';
import Typed from 'react-typed';
import Button from '../common/components/Button/Button';
import MainContacts from './MainContacts/MainContacts';

const Main = () => {
    return (
        <div id="main" className={classes.mainBlock}>
            <div className={classes.mainContainer}>
                <MainContacts/>
                <div className={classes.text}>
                    <h4>Hello world !</h4>
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
                    <div className={classes.buttonWrapper}>
                        <Button title={'Hire me'} src={'contacts'}/>
                        <Button title={'view my works'} src="projects"/>
                    </div>
                </div>
                <div className={classes.photo}>
                    <MainPhoto/>
                </div>
            </div>
        </div>
    );
};

export default Main;