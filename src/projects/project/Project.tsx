import React, {FC} from 'react';
import classes from './Project.module.css'


type PropsType = {
    image:string
    title:string
    description:string

}

const Project:FC<PropsType> = ({image,title,description}) => {
    return (
        <div className={classes.project}>
           <div className={classes.image}></div>
           <span className={classes.title}>{title}</span>
           <p className={classes.description}>{description}</p>
        </div>
    );
};

export default Project;