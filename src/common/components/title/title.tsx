import React, {FC} from 'react';
import style from './title.module.css'

type Props = {
    title:string
    subTitle:string
}

export const Title:FC<Props> = ({title,subTitle}) => {
    return (
        <div className={style.titleWrapper}>
            <h2 className={style.title}>{title}</h2>
            <p className={style.subTitle}>{subTitle}</p>
        </div>
    );
};
