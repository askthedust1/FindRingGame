import React from 'react';

interface ISquareProps {
    onChangeSquare: React.MouseEventHandler<Element>;
    squareClass: string;
}

const Square: React.FC<ISquareProps> = props => {

    return (
        <div onClick={props.onChangeSquare} className={props.squareClass}></div>
    );
};

export default Square;