// Отдельный переиспользуемый компонент-кнопка, который принимает name

import React, {FC} from 'react';

type ButtonPropsType = {
    name:string
    addMessage:() => void
}

export const Button: FC<ButtonPropsType> = (props) => {
    return (
        <button onClick={() => props.addMessage()}>
            {props.name}
        </button>
    );
};
