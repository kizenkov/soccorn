import React, {useEffect, useState} from 'react';
import {withRouter} from 'react-router-dom';
import classes from './../Profile.module.css';

const Status = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    let activateEditMode = () => {
        setEditMode(true);
    }

    let deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status);
    }

    let changeStatus = (e) => {
        setStatus(e.currentTarget.value);
    }

    return <div className={classes.status}>
        {!editMode && <span className={props.isOwner ? classes.myStatus : null}
                            onClick={props.isOwner ? activateEditMode : null}>Status: {props.status}
        </span>}
        {editMode && <div>
            <input autoFocus={true}
                   onBlur={deactivateEditMode}
                   onChange={changeStatus}
                   value={status}/>
        </div>}
    </div>
}

export default withRouter(Status);