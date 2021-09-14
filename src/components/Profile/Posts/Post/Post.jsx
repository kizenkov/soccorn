import React from 'react';
import classes from './../../Profile.module.css';
import like from './../../../../images/heart.png';
import userIcon from './../../../../images/userIcon.jpg'

const Post = ({id, postMessage, likesCount, incrementLike, photo}) => {
    return <div className={classes.post}>
        <img
            src={photo || userIcon}
            alt='icon'/>
        <div className={classes.like}>
            <div><img src={like} onClick={() => incrementLike(id)} alt='like'/></div>
            {likesCount} likes
        </div>
         { postMessage}
    </div>
}

export default Post