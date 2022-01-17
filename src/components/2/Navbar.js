import React from "react"
import tabs from 'tabs'
import BackgroundImage from './TabBackgroundImage'
import Accordion from './Accordion'

const Navbar = ({tab1, tab2, acc1, acc2})=>{
  React.useEffect(()=>{
    var container=document.querySelector('.tab-container')
    tabs(container);
  },[])
  return (
    <React.Fragment>

    <div id="desktop-tabs" className="tab-container">
      <div className="tabs">
        <button className="tab active">MOUNTAIN 1</button>
        <button className="tab">MOUNTAIN 2</button>
      </div>
      <div className="tab-panes">
        <div className="tab-pane active">
          <BackgroundImage img={tab1}/>
        </div>
      <div className="tab-pane">
        <BackgroundImage img={tab2}/>
      </div>
    </div>
  </div>
  <Accordion img1={acc1} img2={acc2}/>
</React.Fragment>

  )
}
export default Navbar
