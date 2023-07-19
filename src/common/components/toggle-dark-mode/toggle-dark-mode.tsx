import React, {useEffect, useState} from 'react';
import style from './toggle-dark-mode.module.css';
import {SvgToggle} from '../../image/icons/icons-toggle/svgToggle';

export const ToggleDarkMode = () => {
    const [isChecked, setIsChecked] = useState(true);
    const switchInput = React.createRef<HTMLInputElement>()
    const toggleTheme = () => {
        setIsChecked(!isChecked);
    }

    useEffect(() => {
        if (!switchInput.current?.checked) {
            document.documentElement.style.setProperty('--bg-color', '#10172a');
            document.documentElement.style.setProperty('--bgSecondary-color', '#1E293B');
            document.documentElement.style.setProperty('--text-color', '#fff');
            document.documentElement.style.setProperty('--blackWhite', '#000');
        } else {
            document.documentElement.style.setProperty('--bg-color', '#fff');
            document.documentElement.style.setProperty('--bgSecondary-color', '#F9FAFB');
            document.documentElement.style.setProperty('--text-color', '#161c2d');
            document.documentElement.style.setProperty('--blackWhite', '#fff');
        }
    }, [isChecked]);

    return (
        <div className={style.toogleWrapper}>
            <input
                type="checkbox"
                id="checkbox"
                className={style.checkbox}
                ref={switchInput}
                checked={isChecked}
                onChange={toggleTheme}/>
            <label className={style.switch} htmlFor="checkbox">
                <SvgToggle isChecked={isChecked}/>
            </label></div>
    );
}
