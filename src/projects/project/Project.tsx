import React, {FC} from 'react';
import style from './Project.module.css'
import Button from '../../common/components/Button/Button';

type PropsType = {
    image: string
    title: string
    description: string
    link: string
}

const Project: FC<PropsType> = ({image, title, description, link}) => {
    return (
        <div className={style.project}>
            <div className={style.image}>
                <img src={image} alt=""/>
            </div>
            <span className={style.title}>{title}</span>
            <p className={style.description}>{description}</p>
            <a href={link} target='_blank'>
                <button>demo</button>
            </a>
        </div>
    );
};

export default Project;