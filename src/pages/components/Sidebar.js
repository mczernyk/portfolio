import React, { Component } from "react"
import Scrollspy from "react-scrollspy"
import Scroll from "./indexcomp"

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
    }
  }

  render() {
    const { tabs } = this.state

    return (
      <div className="nav">
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
                <li className="nav-item" key={href}>
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
              <span className="fa-stack fa-3x">
                <i class="fa fa-circle fa-stack-2x"></i>
                <i className="fa fa-github fa-stack-1x fa-inverse"></i>
              </span>
            </a>

            <a
              key="https://linkedin.com/in/czernyk/"
              href="https://linkedin.com/in/czernyk/"
            >
              <span className="fa-stack fa-3x">
                <i class="fa fa-circle fa-stack-2x"></i>
                <i className="fa fa-linkedin fa-stack-1x fa-inverse"></i>
              </span>
            </a>
            <a key="email" href={`mailto:mczernyk@gmail.com`}>
              <span className="fa-stack fa-3x">
                <i class="fa fa-circle fa-stack-2x"></i>
                <i className="fa fa-envelope fa-stack-1x fa-inverse"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    )
  }
}
