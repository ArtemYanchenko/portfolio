import React from 'react';
import style from './Projects.module.css'
import Project from './project/Project';

const Projects = () => {
    return (
        <div id='projects' className={style.projects}>
            <div className={style.projectsContainer}>
                <h2 className={style.title}>
                    My projects
                </h2>
                <div className={style.projectContainer}>
                    <Project title={'Todo'} description={'description'} image={''}/>
                    <Project title={'Social Network'} description={'description'} image={''}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;