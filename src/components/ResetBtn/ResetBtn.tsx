import React from 'react';
import './ResetBtn.css';

interface IResetBtnProps {
    resetGame: React.MouseEventHandler;
}

const ResetBtn: React.FC<IResetBtnProps> = (props) => {


    return (
        <button className='reset' onClick={props.resetGame}>Reset</button>
    );
};

export default ResetBtn;