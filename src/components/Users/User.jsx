import React, {useContext} from 'react';
import classes from './Users.module.css';
import {NavLink} from 'react-router-dom';
import userIcon from './../../images/userIcon.jpg';
import {Button} from '../../common/button';
import {ThemeContext} from '../../store/appReducer';

const User = (props) => {
    const theme = useContext(ThemeContext);
    return <div className={classes.user}>
        <div className={classes.inline}>
            <NavLink to={`/profile/${props.id}`}><img src={props.photo || userIcon} alt={'userIcon'}/></NavLink>
        </div>

        <div className={classes.inline + ' ' + classes.description}>
            <div><b>{props.name}</b></div>
        </div>
        {props.isAuth
            ? <div className={classes.button}>
                {props.followed
                    ? Button('UNFOLLOW', () => props.unfollow(props.id), props.isDisable.some(el => el === props.id), theme.backgroundButton)
                    : Button('FOLLOW', () => props.follow(props.id), props.isDisable.some(el => el === props.id), theme.backgroundButton)
                }
            </div>
            : null
        }
        <hr/>
    </div>
}

export default User;