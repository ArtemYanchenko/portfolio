import React from 'react';
import style from './projects.module.css'
import keyboard from '../common/image/Typing-bro.png'
import network from '../common/image/Post-cuate.png'
import todo from '../common/image/Checklist-rafiki.png'
import counter from '../common/image/Calculator-cuate.png'
import {Title} from '../common/components/title/title';
import {Project} from './project/project';

export const Projects = () => {
    const projects = [
        {title:'Todo',description:'Complex project that using React-hooks, Redux ToolKit, Axios and Rest API.', image:todo,linkDemo:'https://artemyanchenko.github.io/todolist',linkGit:'https://github.com/ArtemYanchenko/1-todolist'},
        {title:'Social Network',description:'Developers social network. Many features still in progress. But you can use base functions of any social network.', image:network,linkDemo:'',linkGit:''},
        {title:'Virtual Keyboard',description:'Virtual keyboard can  be used as an additional input method.', image:keyboard,linkDemo:'https://artemyanchenko.github.io/virtual-keyboard',linkGit:'https://github.com/ArtemYanchenko/virtual-keyboard'},
        {title:'Counter',description:'Lite pet project from increment and decrement number😀', image:counter,linkDemo:'https://artemyanchenko.github.io/counter',linkGit:'https://github.com/ArtemYanchenko/counter'},
    ]

    const mappedProjects = projects.map(el=>
        <Project
            title={el.title}
            description={el.description}
            image={el.image}
            linkDemo={el.linkDemo}
            linkGit={el.linkGit}
        />
    )

    return (
        <div id='projects' className={style.projects}>
            <div className={style.projectsContainer}>
                <Title title='projects' subTitle='my pets projects'/>
                <div className={style.projectContainer}>
                    {mappedProjects}
                </div>
            </div>
        </div>
    );
};
