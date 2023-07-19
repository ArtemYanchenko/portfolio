import React from 'react';
import style from './Skills.module.css'
import Skill from './skill/Skill';
import {ReactLogo} from '../common/image/icons/reactLogo';
import {ReduxLogo} from '../common/image/icons/reduxLogo';
import {JavascriptLogo} from '../common/image/icons/javascriptLogo';
import {TypescriptLogo} from '../common/image/icons/typescriptLogo';
import {HtmlLogo} from '../common/image/icons/htmlLogo';
import {CssLogo} from '../common/image/icons/cssLogo';
import {NextdotjsLogo} from '../common/image/icons/nextdotjsLogo';
import {GitLogo} from '../common/image/icons/gitLogo';
import {JestLogo} from '../common/image/icons/jestLogo';
import {StorybookLogo} from '../common/image/icons/storybookLogo';
import {PostmanLogo} from '../common/image/icons/postmanLogo';
import {SwaggerLogo} from '../common/image/icons/swaggerLogo';
import {Title} from '../common/components/title/title';


const Skills = () => {
    return (
        <div id='skills' className={style.skills}>
            <div className={style.skillsContainer}>
                <Title title='skills' subTitle='my tech skills'/>
                {/*<div className={style.titleWrapper}>*/}
                {/*    <h2 className={style.title}>SKILLS</h2>*/}
                {/*    <p className={style.subTitle}>my tech skills</p>*/}
                {/*</div>*/}
                <div className={style.skillContainer}>
                    <Skill title={'React'}><ReactLogo/></Skill>
                    <Skill title={'Redux'}><ReduxLogo/></Skill>
                    <Skill title={'Javascript'}><JavascriptLogo/></Skill>
                    <Skill title={'Typescript'}><TypescriptLogo/></Skill>
                    <Skill title={'HTML'}><HtmlLogo/></Skill>
                    <Skill title={'CSS'}><CssLogo/></Skill>
                    <Skill title={'NextJS'}><NextdotjsLogo/></Skill>
                    <Skill title={'GIT'}><GitLogo/></Skill>
                    <Skill title={'JEST'}><JestLogo/></Skill>
                    <Skill title={'StoryBook'}><StorybookLogo/></Skill>
                    <Skill title={'Postman'}><PostmanLogo/></Skill>
                    <Skill title={'Swagger'}><SwaggerLogo/></Skill>
                </div>
            </div>
        </div>
    );
};

export default Skills;