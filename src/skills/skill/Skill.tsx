import React, {FC, ReactNode} from 'react';
import classes from './Skill.module.css'

type PropsType = {
    title: string
    children: ReactNode
}


const Skill: FC<PropsType> = ({title, children}) => {
    return (
        <div className={classes.skill}>
            <div className={classes.logo}>
                {children}
            </div>
            <h3>{title}</h3>

        </div>
    );
};

export default Skill;