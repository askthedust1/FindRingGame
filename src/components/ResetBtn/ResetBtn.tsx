import React from 'react';
import Square from "../square/Square";

interface IResetBtnProps {
    resetGame: React.MouseEventHandler;
}

const ResetBtn: React.FC<IResetBtnProps> = (props) => {


    return (
        <button className='reset' onClick={props.resetGame}>Reset</button>
    );
};

export default ResetBtn;