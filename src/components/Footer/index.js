import React from "react"
import logo from '../../images/Footer-Logo.png'

const Footer = () => {
  return (
    <footer className="footer" style={{height: '74px'}}>
      <span className="footer-image">
        <img src={logo} alt=""/>
      </span>
      <span className="footer-copyright">
        <span>COPYRIGHT 2016. ALL RIGHTS RESERVED.</span>
      </span>
    </footer>
  )
}
export default Footer
