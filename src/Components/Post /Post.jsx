import React from 'react';

import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import NearMeIcon from '@material-ui/icons/NearMe';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import './PostStyles.css'
import { Avatar } from '@material-ui/core';

const Post =({profilePic, timeStamp, image, username, message})=>{
    return(
        <section className='section-post'>
            <div className='post-top'>
                <Avatar className='post-ava' src={profilePic} />
                <div className='post-info'>
                    <h3>{username}</h3>
                    <p>TimeStamp</p>
                </div>
            </div>
            <div className='post-bottom'>
                <p>{message}</p>
            </div>
            <div className='post-image'>
                <img src={image} alt=''/>
            </div>
            <div className='post-options'>
                <div className="post-option">
                    <ThumbUpIcon />
                    <p>Likes</p>
                </div>
                <div className="post-option">
                    <ChatBubbleIcon />
                    <p>Comment</p>
                </div>
                <div className="post-option">
                    <NearMeIcon />
                    <p>Share</p>
                </div>
                <div className="post-option">
                    <AccountCircleIcon/>
                    <ExpandMoreIcon />
                </div>

            </div>
        </section>
    )
}
export default  Post;