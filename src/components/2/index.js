import React from "react"
import BackgroundImage from "gatsby-background-image"
import Navbar from './Navbar'

const SectionTwo  = ({ text, tab1, tab2 }) => {
  return (
    <div id="team">
      <div className="two-text-bg">
        <BackgroundImage fluid={text} className="two-text-img"/>
      </div>
      <Navbar tab1={tab1} tab2={tab2}/>
    </div>
  )
}
export default SectionTwo
