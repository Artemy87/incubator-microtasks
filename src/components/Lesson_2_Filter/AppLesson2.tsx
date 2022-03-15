import React, {useState} from "react";
import {NewComponent} from "./NewComponent";

export type FilterType = 'rubles' | 'dollars' | 'all'

export const AppLesson2 = () => {
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

    let  onClickFilterHandler = (filter: FilterType) => {
        setFilter(filter)
    }

    return (
        <NewComponent
            currentFilter={currentFilter}
            onClickFilterHandler={onClickFilterHandler}/>
    );
}