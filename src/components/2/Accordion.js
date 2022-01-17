import React from 'react'
import BackgroundImage from "./TabBackgroundImage"

const Accordion = ({img1, img2})=>{
  return (
<div className="accordion" id="mobile-accordion">
  <div className="card">
    <div className="card-header" id="headingOne">
      <h2 className="mb-0">
        <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
          Mountain 1
        </button>
      </h2>
    </div>
    <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#mobile-accordion">
      <div className="card-body">
        <BackgroundImage img={img1}/>
      </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header" id="headingTwo">
      <h2 className="mb-0">
        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Mountain 2
        </button>
      </h2>
    </div>
    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#mobile-accordion">
      <div className="card-body">
        <BackgroundImage img={img2}/>
      </div>
    </div>
  </div>
</div>
  )
}


export default Accordion
