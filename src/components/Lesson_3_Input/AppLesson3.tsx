import React, {useState} from 'react';
import {Input} from "./Input";
import {Button} from "./Button";

import './App.css';
import {FullInput} from "./FullInput";


function App() {
    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])
    let [title, setTitle] = useState('');

    const addMessage = (title:string) => {
        let newMessage = {message: title};
        setMessage([newMessage, ...message])
    }

    const onClickButtonHandler = () => {
        addMessage(title)
        setTitle('')
    }

    return (
        <div className="App">
            <FullInput addMessage={addMessage}/>
            <Input title={title} setTitle={setTitle} addMessage={addMessage} />
            <Button name={'+'} addMessage={onClickButtonHandler}/>


            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })
            }
        </div>
    );
}

export default App;
