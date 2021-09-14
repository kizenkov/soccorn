import React from 'react';
import classes from './Profile.module.css';
import Description from "./Description/Description";
import Posts from './Posts/Posts';
import Avatar from './Avatar/Avatar';
import {connect} from 'react-redux';
import {
    getProfileAndStatusThunk,
    updateStatusThunk,
    sendPost, savePhoto, saveProfile, incrementLike,
} from '../../store/profileReducer';
import {withRouter} from 'react-router-dom';
import Loading from '../../common/Loading';
import withAuthRedirect from '../../hocs/withAuthRedirect';
import {compose} from 'redux';
import {getPosts, getProfile, getStatus, getWrongDataAva, getWrongDataProfile} from '../../store/profileSelectors';
import {getId, getIsFetching} from '../../store/authSelectors';

class Profile extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.userId;
        }
        if (!userId) return
        this.props.getProfileAndStatusThunk(userId);
    }

    updateStatus = (status) => {
        this.props.updateStatusThunk(status);
    }

    render() {
        return <div className={classes.profile}>
            {this.props.isFetching && <Loading/>}
            <Avatar photo={this.props.profile.photos.large}
                    fullName={this.props.profile.fullName}
                    updateStatus={this.updateStatus}
                    status={this.props.status}
                    userId={this.props.userId}
                    isOwner={!this.props.match.params.userId}
                    savePhoto={this.props.savePhoto}
                    wrongDataAva={this.props.wrongDataAva}
            />
            <Description profile={this.props.profile}
                         isOwner={!this.props.match.params.userId}
                         saveProfile={this.props.saveProfile}
                         wrongDataProfile={this.props.wrongDataProfile}
            />
            <Posts posts={this.props.posts}
                   photo={this.props.profile.photos.large}
                   sendPost={this.props.sendPost}
                   backgroundContent={this.props.backgroundContent}
                   incrementLike={this.props.incrementLike}
            />
        </div>
    }
}

let mapStateToProps = (state) => {
    return {
        posts: getPosts(state),
        profile: getProfile(state),
        status: getStatus(state),
        isFetching: getIsFetching(state),
        userId: getId(state),
        wrongDataAva: getWrongDataAva(state),
        wrongDataProfile: getWrongDataProfile(state),
    }
}

export default compose(
    withAuthRedirect,
    withRouter,
    connect(mapStateToProps,
        {sendPost, getProfileAndStatusThunk, updateStatusThunk, savePhoto, saveProfile, incrementLike}))
(Profile)
