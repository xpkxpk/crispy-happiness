import React from 'react'
import Link from 'gatsby-link'
import './Header.css'


const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderContent">
      <Link to="/"><img src={require('../images/SolarWise_Logo.svg')} width="140px"/></Link>
      <div className="MenuItems">
        <Link to="/">About</Link>  
        <Link to="/">Solar 101</Link>  
        <Link to="/">Estimator</Link>  
        <Link to="/">Contact us</Link> 
      </div>
      
    </div>
  </div>
)

export default Header
