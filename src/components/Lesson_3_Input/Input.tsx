// Отдельный переиспользуемый компонент-input

import React, {KeyboardEvent, ChangeEvent} from 'react';

type InputPropsTitle = {
    title:string
    setTitle:(title:string) => void
    addMessage:(title:string)=>void
}

export const Input = (props: InputPropsTitle) => {

    const onChangeInputHandler = (e:ChangeEvent<HTMLInputElement>) => {
        props.setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e:KeyboardEvent<HTMLInputElement>) => {
        e.key === 'Enter' && props.addMessage(props.title)
    }

    return (
        <input type="text"
            value={props.title}
            onChange={onChangeInputHandler}
            onKeyPress={onKeyPressHandler}
        />
    );
};