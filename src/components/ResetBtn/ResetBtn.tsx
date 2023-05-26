import React from 'react';

interface IResetBtnProps {
    resetGame: React.MouseEventHandler;
}

const ResetBtn: React.FC<IResetBtnProps> = (props) => {


    return (
        <button className='reset' onClick={props.resetGame}>Reset</button>
    );
};

export default ResetBtn;