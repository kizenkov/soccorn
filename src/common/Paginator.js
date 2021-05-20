import React, {useContext, useState} from 'react';
import classes from '../components/Users/Users.module.css';
import {Button} from './button';
import {ThemeContext} from '../store/appReducer';

export const Paginator = ({getUsers, currentPage, totalCount, pageSize}) => {
    const theme = useContext(ThemeContext);

    let pagePortion = 10;
    let [numberOfPagePortion, setNumberOfPagePortion] = useState(1);
    let totalPage = Math.ceil(totalCount / pageSize);
    let leftBorderOfPortion = numberOfPagePortion * pagePortion - (pagePortion - 1);
    let rightBorderOfPortion = totalPage / pagePortion && numberOfPagePortion * pagePortion;
    if (numberOfPagePortion === Math.ceil(totalPage / pagePortion)) {
        rightBorderOfPortion = totalPage
    }

    let pages = [];
    for (let i = leftBorderOfPortion; i <= rightBorderOfPortion; i++) {
        pages.push(i);
    }
    let pageList = pages.map(p => <div className={classes.pages} key={p}><span
        onClick={() => getUsers(p)}
        className={p === currentPage ? classes.currentPage : null}>{p}</span></div>)

    return <div className={classes.paginator}>
        <div>
            {Button('☚', () => setNumberOfPagePortion(numberOfPagePortion - 1),
                numberOfPagePortion === 1, theme.backgroundButton)}
            {pageList}
            {Button('☛', () => setNumberOfPagePortion(numberOfPagePortion + 1),
                numberOfPagePortion === Math.ceil(totalPage / pagePortion), theme.backgroundButton)}
        </div>
    </div>;
}