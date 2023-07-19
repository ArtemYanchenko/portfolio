import React from 'react';
import style from './Skills.module.css'
import Skill from './skill/Skill';
import {ReactLogo} from '../common/image/icons/icons-skills/reactLogo';
import {ReduxLogo} from '../common/image/icons/icons-skills/reduxLogo';
import {JavascriptLogo} from '../common/image/icons/icons-skills/javascriptLogo';
import {TypescriptLogo} from '../common/image/icons/icons-skills/typescriptLogo';
import {HtmlLogo} from '../common/image/icons/icons-skills/htmlLogo';
import {CssLogo} from '../common/image/icons/icons-skills/cssLogo';
import {NextdotjsLogo} from '../common/image/icons/icons-skills/nextdotjsLogo';
import {GitLogo} from '../common/image/icons/icons-skills/gitLogo';
import {JestLogo} from '../common/image/icons/icons-skills/jestLogo';
import {StorybookLogo} from '../common/image/icons/icons-skills/storybookLogo';
import {PostmanLogo} from '../common/image/icons/icons-skills/postmanLogo';
import {SwaggerLogo} from '../common/image/icons/icons-skills/swaggerLogo';
import {Title} from '../common/components/title/title';

export const Skills = () => {
    const skills = [
        {title: 'React', logo: ReactLogo},
        {title: 'Redux', logo: ReduxLogo},
        {title: 'Javascript', logo: JavascriptLogo},
        {title: 'Typescript', logo: TypescriptLogo},
        {title: 'HTML', logo: HtmlLogo},
        {title: 'CSS', logo: CssLogo},
        {title: 'NextJS', logo: NextdotjsLogo},
        {title: 'GIT', logo: GitLogo},
        {title: 'JEST', logo: JestLogo},
        {title: 'StoryBook', logo: StorybookLogo},
        {title: 'Postman', logo: PostmanLogo},
        {title: 'Swagger', logo: SwaggerLogo},
    ]
    const mappedSkills = skills.map(el => <Skill title={el.title}>
        <el.logo/>
    </Skill>)

    return (
        <div id="skills" className={style.skills}>
            <div className={style.skillsContainer}>
                <Title title="skills" subTitle="my tech skills"/>
                <div className={style.skillContainer}>
                    {mappedSkills}
                </div>
            </div>
        </div>
    );
};
