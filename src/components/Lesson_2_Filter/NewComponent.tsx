import React from "react";
import {FilterType} from "./AppLesson2";

type NewComponentType = {
    currentFilter: CurrentMoney[],
    onClickFilterHandler: (filter:FilterType)=> void
}

type CurrentMoney = {
    banknots: string,
    value: number,
    number: string
}

export const NewComponent = (props: NewComponentType) => {
    return (
        <div>
            <ul>
                {props.currentFilter.map((el, index) => {
                    return (
                        <li key={index}>
                            <span>{el.banknots} </span>
                            <span>{el.value} </span>
                            <span>{el.number}</span>
                        </li>
                    )
                })
                }
            </ul>
            <div style={{marginLeft: '35px'}}>
                <button onClick={() => props.onClickFilterHandler('all')}>all</button>
                <button onClick={() => props.onClickFilterHandler('rubles')}>rubles</button>
                <button onClick={() => props.onClickFilterHandler('dollars')}>dollar</button>
            </div>
        </div>
    )
}