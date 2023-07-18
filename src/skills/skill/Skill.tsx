import React, {FC} from 'react';
import classes from './Skill.module.css'

type PropsType = {
    logo: string
    title: string
    // description: string
}


const Skill: FC<PropsType> = ({logo, title}) => {
    return (
        <div className={classes.skill}>
            <div className={classes.logo}>
            </div>
            <h3>{title}</h3>
            <div className={classes.description}></div>
        </div>
    );
};

export default Skill;