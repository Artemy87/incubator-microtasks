import React, {ChangeEvent, FC, useState} from 'react';


export type FullInputPropsTask = {
    addMessage: (title:string)=>void
}

export const FullInput: FC<FullInputPropsTask> = (props) => {

    const [title, setTitle] = useState('');

    const onChangeInputHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value);
    }
    const onClickButtonHandler = () => {
        props.addMessage(title);
        setTitle('')
    }

    return (
        <div>
            <input value={title} type="text" onChange={onChangeInputHandler}/>
            <button onClick={onClickButtonHandler}>+</button>
        </div>
    );
};