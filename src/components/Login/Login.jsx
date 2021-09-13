import React, {useContext, useRef} from 'react';
import classes from '../Login/Login.module.css';
import * as yup from 'yup';
// import {Formik, Field} from 'formik';
import {connect} from 'react-redux';
import {logined} from '../../store/authReducer';
import {Redirect} from 'react-router-dom';
import {createField} from '../../common/helpers';
import {Button} from '../../common/button';
import {ThemeContext} from '../../store/appReducer';
import {getCaptchaUrl, getIsAuth, getWrongData} from '../../store/authSelectors';

const Login = ({isAuth, wrongData, captchaUrl, logined}) => {
    const theme = useContext(ThemeContext);
    // const validationSchema = yup.object().shape({
    //     login: yup.string().required('Field is required'),
    //     password: yup.string().required('Field is required'),
    //     confirmPassword: yup.string().oneOf([yup.ref('password')], 'Wrong confirm password').required('Field is required'),
    // })
    const login = useRef();
    const password = useRef();
    const rememberMe = useRef();

    function check(e) {
        e.preventDefault();
        logined(login.current.value, password.current.value)
    }

    return <div className={classes.login}>
        {isAuth && <Redirect to={'/profile'}/>}
        {/*<Formik*/}
        {/*    initialValues={{*/}
        {/*        login: '',*/}
        {/*        password: '',*/}
        {/*        confirmPassword: '',*/}
        {/*        rememberMe: false,*/}
        {/*        captcha: null*/}
        {/*    }}*/}
        {/*    validateOnBlur*/}
        {/*    onSubmit={(values) => {*/}
        {/*        logined(values.login, values.password, values.rememberMe, values.captcha)*/}
        {/*    }}*/}
        {/*    validationSchema={validationSchema}>*/}
        {/*    {({*/}
        {/*          values, errors, touched,*/}
        {/*          handleChange, handleBlur,*/}
        {/*          isValid, handleSubmit, dirty*/}
        {/*      }) => (*/}
        {/*        <div className={classes.form}>*/}
        {/*            <div className={classes.fieldWithValidate}>*/}
        {/*                {createField('login', handleChange, handleBlur, 'login',*/}
        {/*                    values.input)}*/}
        {/*                {touched.login && errors.login && <span>{errors.login}</span>}*/}
        {/*            </div>*/}
        {/*            <div className={classes.fieldWithValidate}>*/}
        {/*                {createField('password', handleChange, handleBlur, 'password',*/}
        {/*                    values.password, 'password')}*/}
        {/*                {touched.password && errors.password && <span>{errors.password}</span>}*/}
        {/*            </div>*/}
        {/*            <div className={classes.fieldWithValidate}>*/}
        {/*                {createField('confirmPassword', handleChange, handleBlur, 'confirm password',*/}
        {/*                    values.confirmPassword, 'password')}*/}
        {/*                {touched.confirmPassword && errors.confirmPassword && <span>{errors.confirmPassword}</span>}*/}
        {/*            </div>*/}
        {/*            <div className={classes.rememberMe}>*/}
        {/*                Remember me <Field name={'rememberMe'} type={'checkbox'} />*/}
        {/*            </div>*/}

        {/*            <div className={classes.error}>*/}
        {/*                {wrongData ? <span>{wrongData}</span> : null}*/}
        {/*                {captchaUrl*/}
        {/*                    ? <div><img src={captchaUrl} alt='captcha'/><br/>*/}
        {/*                        {createField('captcha', handleChange, null, 'Enter code',*/}
        {/*                            values.captcha)}</div>*/}
        {/*                    : null}*/}
        {/*            </div>*/}

        {/*            <div>*/}
        {/*                {Button('Log in', handleSubmit, !isValid && !dirty, theme.backgroundButton, 'submit')}*/}
        {/*            </div>*/}
        {/*        </div>*/}
        {/*    )}*/}
        {/*</Formik>*/}
        <form className='container'>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Login</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                       ref={login}/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" ref={password}/>
            </div>
            {/*<div className="mb-3 form-check ">*/}
            {/*    <input type="checkbox" className="form-check-input" id="exampleCheck1" ref={rememberMe}/>*/}
            {/*    <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>*/}
            {/*</div>*/}
            <button className="btn btn-primary" onClick={check}>Log in</button>
        </form>

        <div className={classes.error}>
            {wrongData ? <span>{wrongData}</span> : null}
            {captchaUrl
                ? <div><img src={captchaUrl} alt='captcha'/><br/>
                    {/*{createField('captcha', handleChange, null, 'Enter code',*/}
                    {/*    values.captcha)}*/}
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