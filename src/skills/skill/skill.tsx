import React, {FC, ReactNode} from 'react';
import style from './skill.module.css'

type Props = {
    title: string
    children: ReactNode
}


export const Skill: FC<Props> = ({title, children}) => {
    return (
        <div className={style.skill}>
            <div className={style.logo}>
                {children}
            </div>
            <h3>{title}</h3>

        </div>
    );
};
