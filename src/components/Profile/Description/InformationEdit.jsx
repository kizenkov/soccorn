import React from 'react';
import classes from './../Profile.module.css';
import {Field, Formik} from "formik";
import * as yup from "yup";
import {Button} from "../../../common/button";

const InformationEdit = (props) => {
    const validationSchema = yup.object().shape({
        fullName: yup.string().required(' Field is required'),
        aboutMe: yup.string().required(' Field is required')
    })
    return <div>
        <Formik
            initialValues={props.profile}
            validateOnBlur
            onSubmit={(values) => {
                props.saveProfile(values);
            }}
            validationSchema={validationSchema}>
            {({
                  values, errors, touched, handleChange,
                  handleBlur, handleSubmit
              }) => (
                <form>
                    {Button('Save profile', handleSubmit, false, props.backgroundButton, 'submit')}
                    <br/>
                    <b>Full name: </b><input name='fullName' onChange={handleChange} onBlur={handleBlur} value={values.fullName}/>
                    {touched.fullName && errors.fullName && <span className={classes.error}>{errors.fullName}</span>}<br/>
                    <b>About me: </b><input name='aboutMe' onChange={handleChange} onBlur={handleBlur} value={values.aboutMe}/>
                    {touched.aboutMe && errors.aboutMe && <span className={classes.error}>{errors.aboutMe}</span>}<br/>
                    <br/>
                    <b>My contacts: </b><br/>
                    <div className={classes.contacts}>
                        <span>facebook: </span><input name='contacts.facebook' onChange={handleChange}
                                                     value={values.contacts.facebook}/>
                        <br/>
                        <span>github: </span><input name='contacts.github' onChange={handleChange}
                                                   value={values.contacts.github}/><br/>
                        <span>instagram: </span><input name='contacts.instagram' onChange={handleChange}
                                                      value={values.contacts.instagram}/><br/>
                        <span>mainLink: </span><input name='contacts.mainLink' onChange={handleChange}
                                                     value={values.contacts.mainLink}/><br/>
                        <span>twitter: </span><input name='contacts.twitter' onChange={handleChange}
                                                    value={values.contacts.twitter}/><br/>
                        <span>vk: </span><input name='contacts.vk' onChange={handleChange} value={values.contacts.vk}/><br/>
                        <span>website: </span><input name='contacts.website' onChange={handleChange}
                                                    value={values.contacts.website}/><br/>
                        <span>youtube: </span><input name='contacts.youtube' onChange={handleChange}
                                                    value={values.contacts.youtube}/><br/>
                    </div>
                    <b>Looking for a job: </b> <Field name={'lookingForAJob'} type={'checkbox'}/><br/>
                    <b>My skills: </b> <textarea name='lookingForAJobDescription' onChange={handleChange}
                                                                value={values.lookingForAJobDescription}></textarea>
                </form>
            )}
        </Formik>
    </div>
}

export default InformationEdit