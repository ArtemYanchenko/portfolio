import React, {FC} from 'react';
import style from './Project.module.css'

type PropsType = {
    image:string
    title:string
    description:string
}

const Project:FC<PropsType> = ({image,title,description}) => {
    return (
        <div className={style.project}>
           <div className={style.image}>
               <a href="#" className={style.button}>Посмотреть</a>
           </div>
           <span className={style.title}>{title}</span>
           <p className={style.description}>{description}</p>
        </div>
    );
};

export default Project;