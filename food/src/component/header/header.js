import React from 'react'
import { Link } from 'react-router-dom'
import './header.scss'

const Header = () => {
    return (
        <div className='header'>
            <Link to ="/home"><div className='logo'> Movie App</div></Link>
            <div className='user-image'>
                <img src={require('../../images/user.png')} alt="" />


            </div>
        </div>
    )
}

export default Header