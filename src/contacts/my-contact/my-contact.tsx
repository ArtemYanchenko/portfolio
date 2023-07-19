import React, {FC} from 'react';
import style from './my-contact.module.css'

type Props = {
    title: string;
    info: string;
}

export const MyContact:FC<Props> = ({title,info}) => {
    return (
        <div className={style.myContactsItem}>
            <h3 className={style.contactsTitleInfo}>{title}</h3>
            <span className={style.contactsDescInfo}>{info}</span>
        </div>
    );
};
