import React from "react"
import BackgroundImage from "gatsby-background-image"
import MyCarousel from './carousel'

const Carousel = ({ img, imgList=[], children }) => {
  return (
    <BackgroundImage className="carousel-bg" fluid={img}>
      <MyCarousel/>
    </BackgroundImage>
  )
}

export default Carousel
