import React from 'react';
import classes from './../../Profile.module.css';
import like from './../../../../images/heart.png'

const Post = ({id, postMessage, likesCount, incrementLike}) => {
    return <div className={classes.post}>
        <img
            src='https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW5mb3JtYXRpb24lMjB0ZWNobm9sb2d5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
            alt='icon'/>
        <div className={classes.like}>
            <div><img src={like} onClick={() => incrementLike(id)} alt='like'/></div>
            {likesCount} likes
        </div>
        {postMessage}
    </div>
}

export default Post