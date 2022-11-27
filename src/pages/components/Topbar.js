import React, { Component } from "react"
import Scrollspy from "react-scrollspy"
import Scroll from "./Scroll"
import { FontAwesomeIcon } from
'@fortawesome/react-fontawesome'
import { faCircle, faEnvelope, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default class Sidebar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tabs: [
        { content: "About", href: "about" },
        { content: "Projects", href: "projects" },
        { content: "Experience", href: "experience" },
        { content: "Education", href: "education" },
        { content: "Design", href: "design" },
        { content: "Music", href: "music" },
        { content: "Interests", href: "interests" },
      ],
      hiddenBar: true
    }
    this.toggleBar = this.toggleBar.bind(this)
  }

  toggleBar = e => {
    this.setState({
      hiddenBar: !this.state.hiddenBar,
    })
  }

  onClose = e => {
    this.props.hiddenBar = true
  }

  render() {
    const { tabs } = this.state

    return !this.state.hiddenBar ? (
      <div className="nav-topbar">
        <nav className="nav-buttons">
          <Scrollspy
            items={tabs.map(s => s.href)}
            currentClassName="nav-item-active"
            offset={-50}
            className="nav-inner"
          >
            {tabs.map((tab, i) => {
              const { href, content } = tab

              return (
                <li className="nav-item" key={href} onClick={this.toggleBar}>
                  <Scroll type="id" element={href}>
                    <a href={`#${href}`} className="nav__link">
                      {content}
                    </a>
                  </Scroll>
                </li>
              )
            })}
          </Scrollspy>
        </nav>
        <div className="social-buttons">
          <div className="social-icons-nav">
            <a
              key="https://github.com/mczernyk"
              href="https://github.com/mczernyk"
            >
            <span className="fa-layers fa-fw fa-3x">
              <FontAwesomeIcon icon={faCircle} transform="grow-15"/>
              <FontAwesomeIcon icon={faGithub} inverse transform="grow-2"/>
            </span>
            </a>

            <a
              key="https://linkedin.com/in/czernyk/"
              href="https://linkedin.com/in/czernyk/"
            >
              <span className="fa-layers fa-fw fa-3x">
                <FontAwesomeIcon icon={faCircle} transform="grow-15"/>
                <FontAwesomeIcon icon={faLinkedin} inverse transform="grow-2"/>
              </span>
            </a>
            <a key="email" href={`mailto:mczernyk@gmail.com`}>
              <span className="fa-layers fa-fw fa-3x">
                <FontAwesomeIcon icon={faCircle} transform="grow-15"/>
                <FontAwesomeIcon icon={faEnvelope} inverse transform="grow-2"/>
              </span>
            </a>
          </div>
        </div>
        <div className="close-bar" onClick={this.toggleBar}>
        <FontAwesomeIcon icon={faChevronUp} transform="grow-15" className="close-bar-button"/>
        </div>
      </div>
    ) : (
      <div className="open-bar" onClick={this.toggleBar}>
        <FontAwesomeIcon icon={faChevronDown} transform="grow-15" className="open-bar-button"/>
      </div>
    )
  }
}
