import React, {useContext} from 'react';
import classes from './Header.module.css';
import corn from '../../images/corn.png'
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {logouted} from '../../store/authReducer';
import {ThemeContext} from './../../store/appReducer'
import {getIsAuth} from '../../store/authSelectors';


function Header({isAuth, logouted}) {
    const theme = useContext(ThemeContext);
    return <div className={classes.header} style={{
        backgroundColor: theme.backgroundHeaderNavbar
    }}>
        <NavLink to='/'><img src={corn} alt={'corn'} className={classes.headerImg}/></NavLink>
        {isAuth
            ? <div className={classes.login}>
                <span onClick={logouted}>Log out</span>
            </div>
            : <NavLink to='/login' className={classes.login}>Login</NavLink>}
    </div>
}

let mapStateToProps = (state) => {
    return {
        isAuth: getIsAuth(state),
    }
}

export default connect(mapStateToProps, {logouted})(Header)