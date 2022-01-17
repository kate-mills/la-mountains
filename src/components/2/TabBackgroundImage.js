import React from "react"
import BackgroundImage from "gatsby-background-image"

const TabBackgroundImage = ({ img }) => {
  return (
    <BackgroundImage className="tab-bg-image" fluid={img}/>
  )
}

export default TabBackgroundImage
