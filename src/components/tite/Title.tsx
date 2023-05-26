import React from 'react';
import './Title.css';

interface ITitleProps {
    text: string;
}

const Title: React.FC<ITitleProps> = props => {

    return (
        <div className="win">{props.text}</div>
    );
};

export default Title;