import React from "react"
import tabs from 'tabs'
import BackgroundImage from './TabBackgroundImage'

const Navbar = ({tab1, tab2})=>{
  React.useEffect(()=>{
    var container=document.querySelector('.tab-container')
    tabs(container);
  },[])
  return (
    <div className="tab-container">
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
  )
}
export default Navbar
