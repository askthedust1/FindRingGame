import React from 'react';

interface ICountTryProps {
    number: number;
}

const CountTry: React.FC<ICountTryProps> = props => {

    return (
        <div className="try">Количество попыток: {props.number}</div>
    );
};

export default CountTry;