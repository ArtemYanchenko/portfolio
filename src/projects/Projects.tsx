import React from 'react';
import classes from './Projects.module.css'
import Project from './project/Project';

const Projects = () => {
    return (
        <div className={classes.projects}>
            <div className={classes.projectsContainer}>
                <h2 className={classes.title}>
                    My projects
                </h2>
                <div className={classes.projectContainer}>
                    <Project title={'Todo'} description={'description'} image={''}/>
                    <Project title={'Social Network'} description={'description'} image={''}/>
                    <Project title={'Social Network'} description={'description'} image={''}/>
                    <Project title={'Social Network'} description={'description'} image={''}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;