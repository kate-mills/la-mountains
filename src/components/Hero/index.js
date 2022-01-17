import React from "react"
import BackgroundImage from "gatsby-background-image"
import Nav from './Nav'


const HeroSection = ({ img, children }) => {
  return (
    <BackgroundImage className="hero-bg" fluid={img}>
      <div className="hero-topbar">
        <Nav/>
      </div>
      {children}
    </BackgroundImage>
  )
}

export default HeroSection
