

import React, {useEffect, useState} from 'react';
import classes from './MainPhoto.module.css';

interface Position {
    x: number;
    y: number;
}

const MainPhoto: React.FC = () => {
    const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

    const handleMouseMove = (event: MouseEvent) => {
        const x = event.clientX;
        const y = event.clientY;
        const newX = (window.innerWidth / 2 - x) / 10;
        const newY = (window.innerHeight / 2 - y) / 10;
        setPosition({ x:newX, y:newY});

    };
    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        console.log(position)
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [position]);
    return (
            <div className={classes.image}>
                {/*<img src="../../common/myAvatar.png" alt="Image"/>*/}
                <div className={classes.imageOverlay} style={{
                    backgroundPosition: `calc(50% + ${position.x / 10}px) calc(50% + ${position.y / 10}px)`
                }}></div>
            </div>
    );
};

export default MainPhoto;
