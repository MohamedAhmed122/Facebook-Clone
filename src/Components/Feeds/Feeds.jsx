import React from 'react';
import MainStory from '../Story/Main/Story'

import './Styles.css'
import MessageCenter from '../MessageCenter/MessageCenter';

const Feeds =()=>{
    return(
        <div className='feeds'>
            <MainStory />
            <MessageCenter />
        </div>
    )
}
export default Feeds