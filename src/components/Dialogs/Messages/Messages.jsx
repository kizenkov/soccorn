import React, {useContext, useState} from 'react';
import classes from './../Dialogs.module.css';
import {createSendArea} from '../../../common/helpers';
import {ThemeContext} from '../../../store/appReducer';

const Messages = ({dialogsPage, sendMessage}) => {
    const theme = useContext(ThemeContext);
    const [message, setMessage] = useState('');
    const changeMessage = (e) => {
        setMessage(e.currentTarget.value)
    }
    const sendMessageText = () => {
        sendMessage(message, dialogsPage.activeNameDialogs);
        setMessage('')
    }
    return <div className={classes.messages}>

        <div className={classes.message} style={{
            backgroundColor: theme.backgroundContent
        }}>
            {!dialogsPage.activeNameDialogs && <div className={classes.choosingDialog}>⇦⇦⇦ Choose dialog</div>}
            {dialogsPage.activeNameDialogs ?
                <div>
                    {dialogsPage.dialogs[dialogsPage.activeNameDialogs].map(message => {
                        return <div key={message.id}
                                    className={(message.whoWrite === 'me') ? classes.messageFromMe : null}>
                            {message.dialogMessage}
                        </div>
                    })}
                </div> : null}
        </div>
        <div className={classes.sendArea} style={{
            backgroundColor: theme.backgroundContent
        }}>
            {createSendArea(changeMessage, message, sendMessageText, theme.backgroundButton)}
        </div>
    </div>
}

export default Messages;