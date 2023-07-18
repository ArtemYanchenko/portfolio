import React, {FC, ReactNode} from 'react';
import style from './Skill.module.css'

type PropsType = {
    title: string
    children: ReactNode
}


const Skill: FC<PropsType> = ({title, children}) => {
    return (
        <div className={style.skill}>
            <div className={style.logo}>
                {children}
            </div>
            <h3>{title}</h3>

        </div>
    );
};

export default Skill;