import React from 'react';
import style from './Main.module.css';
import MainPhoto from './MainPhoto/MainPhoto';
import Typed from 'react-typed';
import Button from '../common/components/Button/Button';
import MainContacts from './MainContacts/MainContacts';

const Main = () => {
    return (
        <div id="main" className={style.mainBlock}>
            <div className={style.mainContainer}>
                <MainContacts/>
                <div className={style.text}>
                    <h4>Hello world !</h4>
                    <div>
                        <Typed className={style.typingText}
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
                    <p>based in <span className={style.textLocation}>Moscow,Russia.</span></p>
                    <div className={style.buttonWrapper}>
                        <Button title={'Hire me'} src={'contacts'}/>
                        <Button title={'view my works'} src="projects"/>
                    </div>
                </div>
                <div className={style.photo}>
                    <MainPhoto/>
                </div>
            </div>
        </div>
    );
};

export default Main;