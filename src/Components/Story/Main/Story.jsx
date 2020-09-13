import React from 'react';

import ran1 from '../../../assets/ran1.jpeg'
import ran2 from '../../../assets/ran2.jpg'
import ran3 from '../../../assets/ran3.jpeg'
import ran4 from '../../../assets/ran4.jpeg'

import SingleStory from '../Base/SingleStory'

import './Styles.css'


export default function MainStory  ()  {
    return(
        <div className='story-row'>
            <SingleStory
            image={ran1}
            profileSrc={ran1}
            title='Mohamed Desouky'
            />
             <SingleStory
            image={ran2}
            profileSrc={ran2}
            title='Mohamed Desouky'
            />
             <SingleStory
            image={ran3}
            profileSrc={ran3}
            title='Mohamed Desouky'
            />
             <SingleStory
            image={ran4}
            profileSrc={ran4}
            title='Mohamed Desouky'
            />
        </div>
    )
}
