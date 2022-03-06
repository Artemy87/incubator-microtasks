import React from "react";

type NewComponentType = {
    currentFilter: CurrenFilterType[],
    onClickFilterHandler: Function
}

type CurrenFilterType = {
    banknots: string,
    value: number,
    number: string,
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
                    )})
                }
            </ul>
            <div style={{marginLeft: '35px'}}>
                <button onClick={() => props.onClickFilterHandler('all')}>all</button>
                <button onClick={() => props.onClickFilterHandler('rubles')}>rubles</button>
                <button onClick={() => props.onClickFilterHandler('dollars')}>dollars</button>
            </div>
        </div>
    )
}