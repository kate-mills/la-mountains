import React from "react"
import img10 from '../../images/Carousel-Thumbnails/ten-a.jpg'
import img8 from '../../images/Carousel-Thumbnails/eight-a.jpg'

const MyCarousel = ()=>{
  return (
    <div id="carouselIndicators" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item  active">
          <img src={img10} alt="A man standing on the edge of a cliff."/>
        </div>
        <div className="carousel-item">
          <img src={img8} alt="Fog along the coast."/>
        </div>
        <div className="carousel-item">
          <img src={img10} alt="A man standing on the edge of a cliff."/>
        </div>
        <div className="carousel-item">
          <img src={img8} alt="Fog along the coast."/>
        </div>
      </div>
      <ol className="carousel-indicators">
        <li data-target="#carouselIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselIndicators" data-slide-to="1"></li>
        <li data-target="#carouselIndicators" data-slide-to="2"></li>
        <li data-target="#carouselIndicators" data-slide-to="3"></li>
      </ol>
    </div>
)
}
export default MyCarousel
