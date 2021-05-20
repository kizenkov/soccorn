import React, {useContext, useState} from 'react';
import classes from './../Profile.module.css';
import Information from './Information';
import InformationEdit from './InformationEdit';
import {Button} from '../../../common/button';
import {ThemeContext} from '../../../store/appReducer';

const Description = ({profile, isOwner, saveProfile, wrongDataProfile}) => {
    const theme = useContext(ThemeContext)
    const [editMode, setEditMode] = useState(false)
    return <div className={classes.description} style={{
        backgroundColor: theme.backgroundContent
    }}>
        {isOwner && editMode === false
        && Button('Edit', () => setEditMode(true), false, theme.backgroundButton)}
        {!editMode && <Information profile={profile}/>}
        {editMode && isOwner && <InformationEdit profile={profile}
                                      saveProfile={(values) => {
                                          saveProfile(values);
                                          setEditMode(false)
                                      }}
                                      backgroundButton={theme.backgroundButton}
        />}
        <div className={classes.error}>{wrongDataProfile}</div>
    </div>
}

export default Description