import React from 'react';
import TopicList from 'components/TopicList';
import FavBadge from './FavBadge';

import '../styles/TopNavigationBar.scss';

const NavgationBar = () => {
    return (

        <div className='header'>
            <div className='icon'>
                <i class="fa-thin fa-hand-holding-hand"></i>
            </div>
            <h1> skillSync</h1>
        </div>

    );
};

export default NavgationBar;