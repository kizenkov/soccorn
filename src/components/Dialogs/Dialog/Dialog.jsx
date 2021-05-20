import React, {useContext} from 'react';
import classes from './../Dialogs.module.css';
import {ThemeContext} from '../../../store/appReducer';

const Dialog = ({dialogsPage, setActiveNameDialogs}) => {
    const theme = useContext(ThemeContext);
    let showMessages = (name) => {
        setActiveNameDialogs(name)
    }
    return <div className={classes.dialog} style={{
        backgroundColor: theme.backgroundContent,
    }}>
        {Object.keys(dialogsPage.dialogs).map(name => (
            <div key={name}
                 className={dialogsPage.activeNameDialogs === name ? classes.activeName : null}>
                <p onClick={() => showMessages(name)}><b>{name}</b></p>
            </div>))}
    </div>
}

export default Dialog;