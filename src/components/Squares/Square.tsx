import React from 'react';
import './square.css'

interface ISquareProps {
    onChangeSquare: React.MouseEventHandler<Element>;
    squareClass: string;
    ring: string;
    hide: string;
}

const Square: React.FC<ISquareProps> = props => {

    return (
        <div onClick={props.onChangeSquare} className={props.squareClass}><div className={props.ring} id={props.hide}></div></div>
    );
};

export default Square;