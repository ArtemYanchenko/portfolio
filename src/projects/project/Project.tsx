import React, {FC} from 'react';
import style from './Project.module.css'

type PropsType = {
    image: string
    title: string
    description: string
    linkDemo: string
    linkGit: string
}

const Project: FC<PropsType> = ({image, title, description, linkDemo,linkGit}) => {
    return (
        <div className={style.project}>
            <div className={style.image}>
                <img src={image} alt={title}/>
            </div>
            <h3 className={style.title}>{title}</h3>
            <div className={style.description}>{description}</div>
            <div className={style.buttonWrapper}>
                <a href={linkDemo} target="_blank">
                    <button>demo</button>
                </a>
                <a href={linkGit} target="_blank">
                    <button>code</button>
                </a>
            </div>
        </div>
    );
};

export default Project;