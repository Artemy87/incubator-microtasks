import React, {useState} from 'react';
import './App.css';
import {NewComponent} from "./site01/NewComponent";

type FilterType = 'all' | 'rubles' | 'dollars';

function App() {
    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ]);

    const [filter, setFilter] = useState<FilterType>('all');

    let currentFilter = money;

    if(filter === 'rubles') {
        currentFilter = money.filter(el => el.banknots === 'RUBLS')
    } else if (filter === 'dollars') {
        currentFilter = money.filter(el => el.banknots === 'Dollars')
    }

    const onClickFilterHandler = (filter: FilterType) => {
        setFilter(filter)
    }

    return (
        <NewComponent
            currentFilter={currentFilter}
            onClickFilterHandler={onClickFilterHandler}/>
    );
}

export default App;




// import React from "react";
//
// type NewComponentType = {
//     currentMoney: CurrentMoney[],
//     onСlickFilterHandler: Function
// }
//
// type CurrentMoney = {
//     banknots: string,
//     value: number,
//     number: string
// }
//
// export const NewComponent = (props: NewComponentType) => {
//     return (
//         <div>
//             <ul>
//                 {props.currentMoney.map((el, index) => {
//                     return (
//                         <li key={index}>
//                             <span>{el.banknots} </span>
//                             <span>{el.value} </span>
//                             <span>{el.number}</span>
//                         </li>
//                     )
//                 })
//                 }
//             </ul>
//             <div style={{marginLeft: '35px'}}>
//                 <button onClick={() => props.onСlickFilterHandler('all')}>all</button>
//                 <button onClick={() => props.onСlickFilterHandler('ruble')}>rubles</button>
//                 <button onClick={() => props.onСlickFilterHandler('dollar')}>dollar</button>
//             </div>
//         </div>
//     )
// }
