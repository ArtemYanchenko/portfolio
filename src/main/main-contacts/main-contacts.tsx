import React from 'react';
import s from './main-contacts.module.css'
import {SvgGit} from '../../common/image/icons/icons-contacts/svgGit';
import {SvgLink} from '../../common/image/icons/icons-contacts/svgLink';
import {SvgInst} from '../../common/image/icons/icons-contacts/svgInst';
import {SvgTeleg} from '../../common/image/icons/icons-contacts/svgTeleg';

export const MainContacts = () => {
    const links = [
        {link: 'https://github.com/ArtemYanchenko', logo: SvgGit},
        {link: '#', logo: SvgLink},
        {link: 'https://www.instagram.com/tema.yanchenko', logo: SvgInst},
        {link: 'https://t.me/tematemofeev', logo: SvgTeleg},
    ]

    const mappedLinks = links.map(el =>
        <a href={el.link} className={s.link} target="_blank">
            <el.logo/>
        </a>)

    return (
        <aside className={s.contactsWrapper}>
                {mappedLinks}
        </aside>
    );
};
