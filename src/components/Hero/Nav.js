import React, { Component } from "react"
import logo from "../../images/Hero-Logo.png"
import {Link} from "gatsby"

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
      <nav className="navbar navbar-expand-sm bg-* navbar-dark">
        <Link to="/" className="navbar-brand">
          <img alt="" src={logo} className="logo"/>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={this.navbarHandler}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={this.state.css}>
          <ul className="navbar-nav mx-auto">
            {this.state.links.map(link => {
              return (
                <li key={link.id} className="internal-link nav-item">
                  <Link to={link.path} className="nav-link text-capitalize"
                    style={{
                      color: '#fefeff',
                    }}>
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
