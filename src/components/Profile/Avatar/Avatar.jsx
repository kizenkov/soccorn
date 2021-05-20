import React, {useContext} from 'react';
import classes from './../Profile.module.css';
import userIcon from './../../../images/userIcon.jpg'
import Status from './Status';
import {ThemeContext} from '../../../store/appReducer';

const Avatar = (props) => {
    const theme = useContext(ThemeContext)
    const mainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }
    return <div className={classes.avatar} style={{
        backgroundColor: theme.backgroundContent,
    }}>
        <img src={props.photo || userIcon} alt={'userIcon'}/>
        {props.isOwner && <div className={classes.uploadPhoto}>
            <label htmlFor='filePicker' style={{backgroundColor: theme.backgroundButton}}>
                Upload photo
            </label>
            <input id='filePicker' type={'file'} onChange={mainPhotoSelected}/>
        </div>}
        <div className={classes.error}>{props.wrongDataAva}</div>
        <h2>{props.fullName}</h2>
        <Status updateStatus={props.updateStatus}
                status={props.status}
                isOwner={props.isOwner}
        />
    </div>
}

export default Avatar