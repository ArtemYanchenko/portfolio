import React from 'react';
import style from './footer.module.css'

export const Footer = () => {
    return (
        <footer className={style.footerContainer}>
            <div className={style.footerWrapper}>
                <p>
                    © 2023 Artem. Design with ❤️
                </p>
            </div>
        </footer>
    );
};
