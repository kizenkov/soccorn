import React from 'react';
import classes from './../Profile.module.css';

const Information = (props) => {
    return <div className={classes.information}>
        <b>About me:</b> {props.profile.aboutMe} <br/>
        <b>My contacts:</b><br/>
        <div>
            <span>facebook:</span> {props.profile.contacts.facebook}<br/>
            <span>github:</span> {props.profile.contacts.github}<br/>
            <span>instagram:</span> {props.profile.contacts.instagram}<br/>
            <span>mainLink:</span> {props.profile.contacts.mainLink}<br/>
            <span>twitter:</span> {props.profile.contacts.twitter}<br/>
            <span>vk:</span> {props.profile.contacts.vk}<br/>
            <span>website:</span> {props.profile.contacts.website}<br/>
            <span>youtube:</span> {props.profile.contacts.youtube}<br/>
        </div>
        <b>lookingForAJob:</b> {props.profile.lookingForAJob ? 'yes' : 'no'}<br/>
        {props.profile.lookingForAJob && <div><b>lookingForAJobDescription:</b> {props.profile.lookingForAJobDescription}</div>}
    </div>
}

export default Information