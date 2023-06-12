import React from 'react';
import classes from './Main.module.css';
import Image from './MainPhoto/MainPhoto';
import Typed from "react-typed";

const Main = () => {
    return (
        <div className={classes.mainBlock}>
            <div className={classes.mainContainer}>
                <div className={classes.text}>
                    <h4>Hey! I'm</h4>
                    {/*<h1>Меня зовут Артём Янченко</h1>*/}
                    {/*<p>Я FrontEnd разработчик</p>*/}
                    <div>
                        <Typed className={classes.typingText}
                            strings={[
                                "I'm Artem Yanchenko",
                                "I'm FrontEnd Developer",
                                "I'm Software Engineer"
                            ]}
                            typeSpeed={100}
                            backSpeed={50}
                            loop
                        />
                    </div>
                </div>
                <div className={classes.photo}>
                    <Image/>
                </div>
            </div>
        </div>
    );
};

export default Main;