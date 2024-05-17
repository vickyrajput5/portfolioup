import React from 'react'
import { Link } from 'react-scroll'
import { menu, socialHandles } from '../../data'
import './Footer.css'
export const Footer = () => {
  return (
    <div id='footer'>
      <div className="section__wrapper">
        <ul className="nav__link__container">
          {
             menu.map((list, index)=>(
              <Link 
              activeClass='active'
              className='tab__item name nav__link'
              to={list.name.toLowerCase}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              key={index}
              >
                {list.name}
              </Link>
            ))
          }
        </ul>
        <div className="social__handles__container">
          {
            socialHandles.map((list, index)=>(
              <a href={list.link} className='icon__container social__handles' target='_blank' key={index} rel="noreferrer">{list.icon}</a>
            ))
          }
        </div>
        <div className="copyright__container">
          <h3>Copyright &copy; ALl right reserved - | 2024</h3>
          <p className="text__muted">Build with Love By Muhammad Waqar Rajput</p>
        </div>
      </div>
    </div>
  )
}

