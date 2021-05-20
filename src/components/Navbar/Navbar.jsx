import React, {useContext} from 'react';
import classes from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {setBackgroundCorn, setBackgroundLight, setBackgroundViolet} from '../../store/appReducer';
import {Button} from '../../common/button';
import {ThemeContext} from './../../store/appReducer'

function Navbar({setBackgroundLight, setBackgroundCorn, setBackgroundViolet}) {
    const theme = useContext(ThemeContext);
    return <div className={classes.navbar} style={{
        backgroundColor: theme.backgroundHeaderNavbar,
    }}>
        <div className={classes.links}>
            <div><NavLink to='/profile'>My profile</NavLink></div>
            <div><NavLink to='/dialogs'>Dialogs</NavLink></div>
            <div><NavLink to='/users'>Users</NavLink></div>
        </div>
        <div className={classes.themeButtons}>
            <div>
                {Button('Violet theme', () => setBackgroundViolet(), false, theme.backgroundButton)}
            </div>
            <div>
                {Button('Corn theme', () => setBackgroundCorn(), false, theme.backgroundButton)}
            </div>
            <div>
                {Button('Light theme', () => setBackgroundLight(), false, theme.backgroundButton)}
            </div>
        </div>
    </div>
}

let mapStateToProps = () => {
    return {}
}

export default connect(mapStateToProps, {setBackgroundLight, setBackgroundCorn, setBackgroundViolet})
(Navbar)