import React from 'react';
import MainStory from '../Story/Main/Story'
import Post from '../Post /Post'
import ran1 from '../../assets/ran1.jpeg'
import post from '../../assets/post.jpg'

import './Styles.css'
import MessageCenter from '../MessageCenter/MessageCenter';

const Feeds =()=>{
    return(
        <div className='feeds'>
            <MainStory />
            <MessageCenter />
            <Post 
            profilePic={ran1}
            image={post}
            message='Wow, it is Working!'
            username='Mohamed Desouky'
            />
            <Post 
            profilePic={ran1}
            
            message='Wow, it is Working!'
            username='Mohamed Desouky'
            />
           
        </div>
    )
}
export default Feeds