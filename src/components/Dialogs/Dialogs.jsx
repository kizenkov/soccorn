import React from 'react';
import classes from './Dialogs.module.css';
import {connect} from 'react-redux';
import Dialog from './Dialog/Dialog';
import withAuthRedirect from '../../hocs/withAuthRedirect';
import {compose} from 'redux';
import Messages from './Messages/Messages';
import {sendMessage, setActiveNameDialogs} from '../../store/dialogsReducer';
import {getDialogsPage} from '../../store/dialogsSelectors';

const Dialogs = (props) => {
    return <div className={classes.dialogs}>
        <Dialog dialogsPage={props.dialogsPage}
                setActiveNameDialogs={props.setActiveNameDialogs}
        />
        <Messages dialogsPage={props.dialogsPage}
                  sendMessage={props.sendMessage}
        />
    </div>
}

let mapStateToProps = (state) => {
    return {
        dialogsPage: getDialogsPage(state),
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {setActiveNameDialogs, sendMessage}))
(Dialogs)