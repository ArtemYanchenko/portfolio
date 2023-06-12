import React, { useState, useEffect } from 'react';

function AnimatedText() {
    const [text, setText] = useState('Привет! Я Артем');
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setVisible(prev => !prev);
        }, 500);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (visible) {
            setTimeout(() => {
                setText(prev => prev + 'П');
            }, 1000);
        } else {
            setTimeout(() => {
                setText(prev => prev.slice(0, -1));
            }, 200);
        }
    }, [visible]);

    return <h1>{text}</h1>;
}

export default AnimatedText;