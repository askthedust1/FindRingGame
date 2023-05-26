import React from "react";
import Square from "./Square";
import {ISquare} from "../../types";
import './square.css'

interface IProps {
    items: ISquare[];
    clicked: (id: number) => void;
}


const Squares: React.FC<IProps> = ({items, clicked}) => {
    return (
        <div>
            {items.map(item => {
                return <Square
                    key={item.id}
                    squareClass={item.clicked ? 'test' : 'square'}
                    onChangeSquare={() => clicked(item.id)}
                    ring={item.hasItem ? 'ring' : ''}
                    hide={item.clicked && item.hasItem ? ' ' : 'hide'}
                />
            })}
        </div>
    );
};

export default Squares;