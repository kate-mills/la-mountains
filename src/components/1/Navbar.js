import React, { Component } from "react"
import {Link} from 'gatsby'
import logo from "../../images/Hero-Logo.png"

export default class Navbar extends Component {
  state = {
    navbarOpen: false,
    css: "collapse navbar-collapse",
    links: [
      {
        id: 1,
        path: "/#history",
        text: "01. HISTORY",
      },
      {
        id: 2,
        path: "/#team",
        text: "02. TEAM",
      },
    ],
  }

  navbarHandler = () => {
    this.state.navbarOpen
      ? this.setState({ navbarOpen: false, css: "collapse navbar-collapse" })
      : this.setState({
          navbarOpen: true,
          css: "collapse navbar-collapse show",
        })
  }

  render() {
    return (
      <nav className="navbar navbar-history navbar-expand-sm navbar-light" style={{background:'white',width: '100%',}}>
          <div className="logo-with-text">
        <Link to="/" className="logo-with-text">
            <img className="logo" alt="" src={logo} />
            <h2 className="logo-text">
              <div>LOSANGELES</div>
              <div>MOUNTAINS</div>
            </h2>
        </Link>
          </div>
        <button
          className="navbar-toggler"
          type="button"
          onClick={this.navbarHandler}>
          <span className="navbar-toggler-icon" />
        </button>
        <div className={this.state.css}>
          <ul className="navbar-nav mx-auto">
            {this.state.links.map(link => {
              return (
                <li key={link.id} className="nav-item internal-link">
                  <Link to={link.path} className="nav-link internal-link"
                    style={{
                      color: 'var(--blueDark)'
                    }}
                  >
                    {link.text}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    )
  }
}
