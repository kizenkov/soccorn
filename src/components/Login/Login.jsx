import React, {useContext, useRef} from 'react';
import classes from '../Login/Login.module.css';
import {connect} from 'react-redux';
import {logined} from '../../store/authReducer';
import {Redirect} from 'react-router-dom';
import {Button} from '../../common/button';
import {ThemeContext} from '../../store/appReducer';
import {getCaptchaUrl, getIsAuth, getWrongData} from '../../store/authSelectors';

const Login = ({isAuth, wrongData, captchaUrl, logined}) => {
    const theme = useContext(ThemeContext);
    const login = useRef();
    const password = useRef();
    const rememberMe = useRef();
    const captcha = useRef();

    function check(e) {
        e.preventDefault();
        logined(login.current.value, password.current.value, rememberMe.current.checked, captchaUrl && captcha.current.value)
    }

    return <div className={classes.login}>
        {isAuth && <Redirect to={'/profile'}/>}

        <form className='container' onSubmit={check}>
            <div className='mb-3'>
                <label className='form-label'>Login</label>
                <input type='text' className='form-control text-center' ref={login}/>
            </div>
            <div className='mb-3'>
                <label className='form-label'>Password</label>
                <input type='password' className='form-control text-center' ref={password}/>
            </div>
            <div className='mb-3'>
                <label className='form-label'>Remember me</label>
                <input type='checkbox' ref={rememberMe}/>
            </div>
            {Button('Log in', null, false, theme.backgroundButton, 'submit')}
        </form>

        <div className={classes.error}>
            {wrongData ? <span>{wrongData}</span> : null}
            {captchaUrl
                ? <div><img src={captchaUrl} alt='captcha'/><br/>
                    <input placeholder='Enter code' ref={captcha}/>
            </div>
                : null}
        </div>
    </div>
}

let mapStateTProps = (state) => {
    return {
        isAuth: getIsAuth(state),
        wrongData: getWrongData(state),
        captchaUrl: getCaptchaUrl(state),
    }
}

export default connect(mapStateTProps,
    {
        logined
    }
)(Login);