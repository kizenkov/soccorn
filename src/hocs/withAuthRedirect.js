import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    }
}

const withAuthRedirect = (Component) => {
    class withAuthRedirectComponent extends React.Component {
        render() {
            return <div>
                {!this.props.isAuth && <Redirect to={'/login'}/>}
                <Component {...this.props} />
            </div>
        }
    }
    return connect(mapStateToProps, {})(withAuthRedirectComponent)
}

export default withAuthRedirect;