import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const Header = () => {


    const RenderSubMenu = () => {
        return(
            <ul className='submenu'>
                <li>
                    <Link to='/about/profile'>פרופיל החברה</Link>
                </li>
                <li>
                    <Link to='/about/manager'>הנהלה וצוות החברה</Link>
                </li>
                <li>
                    <Link to='/about/etcode'>קוד אתי</Link>
                </li>
                <li>
                    <Link to='/about/quality'>אישורים ואבטחת איכות</Link>
                </li>
            </ul>
        )
    }

        return (
            <header dir='rtl' className='navigation flex'>
                <ul className='flex'>
                    <li><NavLink exact activeClassName='selected' to='/'>עמוד הבית</NavLink></li>
                    <li className='dropdown'><NavLink activeClassName='selected' to='/about'>אודות</NavLink> <RenderSubMenu/></li>
                    <li><NavLink activeClassName='selected' to='/activity'>תחומי פעילות</NavLink></li> 
                    <li><NavLink activeClassName='selected' to='/terminals'>מסופים</NavLink></li>
                    <li><NavLink activeClassName='selected' to='/news'>חדשות</NavLink></li>
                    <li><NavLink activeClassName='selected' to='/contact'>חדשות</NavLink></li>
                </ul>
            </header>
        )

}

export default Header;