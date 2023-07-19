import React, {useEffect, useState} from 'react';
import style from './ToggleDarkMode.module.css';

const ToggleDarkMode = () => {
    const [isChecked, setIsChecked] = useState(true);
    const switchInput = React.createRef<HTMLInputElement>()
    function toggleTheme() {
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
            <input id="checkbox" ref={switchInput} className={style.checkbox} type="checkbox" checked={isChecked} onChange={toggleTheme}/>
            <label className={style.switch} htmlFor="checkbox">

                <svg width="30px" height="30px" viewBox="0 0 512.00 512.00" xmlns="http://www.w3.org/2000/svg"
                     fill="#fff" stroke="#fff" stroke-width="0.00512">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC"
                       stroke-width="7.168000000000001"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path fill={isChecked ? '#fff' : "#252525"}
                              d="M294.8 26.57L238 60.37l7.8 13.17L281 52.59 270.8 118l6.3 10.6L336 93.53l-7.8-13.17-37.3 22.14L301 37.12l-6.2-10.55zM147.1 60.55A224 224 0 0 0 32 256a224 224 0 0 0 224 224 224 224 0 0 0 214.9-161.2A208 208 0 0 1 320 384a208 208 0 0 1-208-208 208 208 0 0 1 35.1-115.45zm244.5 52.05l-6.9 16.5 44.1 18.4-68.3 35.9-5.5 13.2 73.7 30.8 6.9-16.5-46.7-19.5 68.3-35.9 5.5-13.2-71.1-29.7zm-115 64l-97.8 35 8.1 22.7 60.6-21.7-35.4 97.9 6.5 18.1L320 292.4l-8.1-22.7-64.2 23 35.4-97.9-6.5-18.2z"></path>
                    </g>
                </svg>
            </label></div>
    );
}

export default ToggleDarkMode;