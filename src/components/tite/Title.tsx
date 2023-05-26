import React from 'react';

interface ITitleProps {
    text: string;
}

const Title: React.FC<ITitleProps> = props => {

    return (
        <div className="win">{props.text}</div>
    );
};

export default Title;