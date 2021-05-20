import React from 'react';
import classes from './Users.module.css';
import {connect} from 'react-redux';
import User from './User';
import {followThunk, getUsersThunk, unfollowThunk} from '../../store/usersReducer';
import {Paginator} from '../../common/Paginator';
import Loading from '../../common/Loading';
import {
    getCurrentPage,
    getIsDisable,
    getPageSize,
    getTotalCount,
    getUsers
} from '../../store/usersSelectors';
import {getIsAuth, getIsFetching} from '../../store/authSelectors';
import {ThemeContext} from './../../store/appReducer'

class Users extends React.Component {
    static contextType = ThemeContext;
    componentDidMount() {
        this.props.getUsersThunk();
    }

    getUsers = (page) => {
        this.props.getUsersThunk(page, this.props.pageSize);
    }

    follow = (userId) => {
        this.props.followThunk(userId);
    }

    unfollow = (userId) => {
        this.props.unfollowThunk(userId);
    }

    render() {
        let usersList = this.props.users.map(u => <User key={u.id}
                                                        id={u.id}
                                                        photo={u.photos.small}
                                                        name={u.name}
                                                        followed={u.followed}
                                                        follow={this.follow}
                                                        unfollow={this.unfollow}
                                                        isDisable={this.props.isDisable}
                                                        isAuth={this.props.isAuth}
        />)

        return <div className={classes.users} style={{
            backgroundColor: this.context.backgroundContent}}>
            {this.props.isFetching && <Loading/>}

            <Paginator {...this.props}
                       getUsers={this.getUsers}/>
            {usersList}
        </div>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        totalCount: getTotalCount(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        isDisable: getIsDisable(state),
        isAuth: getIsAuth(state),
    }
}

export default connect(mapStateToProps,
    {followThunk, unfollowThunk, getUsersThunk})(Users);