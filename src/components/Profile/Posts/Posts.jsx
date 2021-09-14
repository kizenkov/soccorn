import React, {useContext, useState} from 'react';
import classes from './../Profile.module.css';
import Post from './Post/Post';
import {createSendArea} from '../../../common/helpers';
import {ThemeContext} from '../../../store/appReducer';

const Posts = ({posts, sendPost, incrementLike, photo}) => {
    const theme = useContext(ThemeContext)
    let postsElement = [...posts].reverse().map(p => <Post key={p.id} postMessage={p.postMessage}
                                                           id={p.id}
                                                           photo={photo}
                                                           likesCount={p.likesCount}
                                                           incrementLike={incrementLike}
        />
    )
    const [post, setPost] = useState('');
    const changePost = (e) => {
        setPost(e.currentTarget.value)
    }
    const sendPostText = () => {
        sendPost(post);
        setPost('')
    }

    return <div className={classes.posts} style={{
        backgroundColor: theme.backgroundContent,
        transition: '0.5s'
    }}>
        <div>
            <h3>My posts</h3>
        </div>
        <div className={classes.sendArea}>
            {createSendArea(changePost, post, sendPostText, theme.backgroundButton)}
        </div>
        <div>
            {postsElement}
        </div>
    </div>
}

export default Posts