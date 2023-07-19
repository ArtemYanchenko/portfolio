import React from 'react';
import style from './Projects.module.css'
import Project from './project/Project';
import keyboard from '../common/image/Typing-bro.png'
import network from '../common/image/Post-cuate.png'
import todo from '../common/image/Checklist-rafiki.png'
import counter from '../common/image/Calculator-cuate.png'

const Projects = () => {
    return (
        <div id='projects' className={style.projects}>
            <div className={style.projectsContainer}>
                <div className={style.titleWrapper}>
                    <h2 className={style.title}>PROJECTS</h2>
                    <p className={style.subTitle}>my pets projects</p>
                </div>
                <div className={style.projectContainer}>
                    <Project title={'Todo'} description={'Complex project that using React-hooks, Redux ToolKit, Axios and Rest API'} image={todo} link={''}/>
                    <Project title={'Social Network'} description={'Developers social network. Many features still in progress. But you can use base functions of any social network'} image={network} link={''}/>
                    <Project title={'Virtual KB'} description={'description'} image={keyboard} link={'https://artemyanchenko.github.io/virtual-keyboard'}/>
                    <Project title={'Counter'} description={'description'} image={counter} link={'https://artemyanchenko.github.io/counter/'}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;