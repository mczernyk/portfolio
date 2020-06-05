import React from "react"
import Plx from "react-plx"
import { FontAwesomeIcon } from
'@fortawesome/react-fontawesome'
import { faCircle, faLaptop } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons'

const parallaxData = [
  {
    start: "self",
    duration: "800vh",
    startOffset: "100vh",
    properties: [
      {
        startValue: 0,
        endValue: -50,
        unit: "vh",
        property: "translateY",
      },
    ],
  },
]

const Experience = () => (
  <section id="experience">
    <Plx parallaxData={parallaxData}>
      <div className="section-container-experience">
        <div>
          <h1 className="section-title-coral">Experience</h1>
          <br></br>

          <div className="resume-item">
            <div className="resume-content">
              <div className="title-heading-exp">Founder</div>
              <div className="subheading">Off-Chain Consulting</div>
              <ul>
                <li>
                  Cryptocurrency consulting specializing in trading strategy,
                  portfolio management and general Blockchain education.
                </li>
                <li>
                  Providing guidance re: mining, trading and analyzing
                  Cryptoassets.
                </li>
              </ul>
            </div>
            <div className="resume-date">
              <div className="date-heading">January 2018 - Present</div>
            </div>
          </div>
          <br></br>

          <div className="resume-item">
            <div className="resume-content">
              <div className="title-heading-exp">Founder</div>
              <div className="subheading">Rad Dads Official</div>
              <ul>
                <li>
                  Leading design, marketing and sales for men’s lifestyle brand.
                </li>
                <li>
                  Building and managing{" "}
                  <a href="http://www.raddadsofficial.com">
                    Rad Dads Official webstore
                  </a>{" "}
                  and{" "}
                  <a href="http://www.instagram.com/raddadsofficial">
                    Instagram
                  </a>{" "}
                  /{" "}
                  <a href="http://www.facebook.com/raddadsofficial">Facebook</a>{" "}
                  social accounts
                </li>
              </ul>
            </div>
            <div className="resume-date">
              <div className="date-heading">January 2015 - Present</div>

              <div className="social-icons">
                <a
                  key="https://www.instagram.com/raddadsofficial/"
                  href="https://www.instagram.com/raddadsofficial/"
                >
                <span className="fa-layers fa-fw fa2">
                  <FontAwesomeIcon icon={faCircle} transform="grow-20"/>
                  <FontAwesomeIcon icon={faInstagram} transform="grow-5" inverse/>
                </span>
                </a>
                <a
                  key="https://www.facebook.com/raddadsofficial/"
                  href="https://www.facebook.com/raddadsofficial/"
                >
                <span className="fa-layers fa-fw fa2">
                  <FontAwesomeIcon icon={faCircle} transform="grow-20"/>
                  <FontAwesomeIcon icon={faFacebookF} transform="grow-5" inverse/>
                </span>
                </a>
                <a
                  key="https://www.raddadsofficial.com"
                  href="https://www.raddadsofficial.com"
                >
                <span className="fa-layers fa-fw fa2">
                  <FontAwesomeIcon icon={faCircle} transform="grow-20"/>
                  <FontAwesomeIcon icon={faLaptop} transform="grow-5" inverse/>
                </span>
                </a>
              </div>
            </div>
          </div>
          <br></br>

          <div className="resume-item">
            <div className="resume-content">
              <div className="title-heading-exp">
                Sales & Operations Director
              </div>
              <div className="subheading">MTC Transportation</div>
              <ul>
                <li>
                  Overseeing daily operations of NY-based Trucking and Logistics
                  Co. (~100 truck fleet; 3 divisions).
                </li>
                <li>
                  Securing new accounts and maintaining client relationships.
                </li>
                <li>
                  Implementing new operational structure and technology upgrade
                  of Brooklyn and Bronx divisions; opening and managing remote
                  NJ division.
                </li>
                <li>
                  Designing company logo, business cards and ad copy /
                  campaigns; building and maintaining{" "}
                  <a href="http://www.mtctransportation.com">
                    MTC Transportation website
                  </a>
                  , amplifying online presence.
                </li>
              </ul>
            </div>
            <div className="resume-date">
              <div className="date-heading">January 2016 - December 2017</div>
              <div className="social-icons">
                <a
                  key="https://www.mtctransportation.com/"
                  href="https://www.mtctransportation.com/"
                >
                <span className="fa-layers fa-fw fa2">
                  <FontAwesomeIcon icon={faCircle} transform="grow-20"/>
                  <FontAwesomeIcon icon={faLaptop} transform="grow-5" inverse/>
                </span>
                </a>
              </div>
            </div>
          </div>
          <br></br>

          <div className="resume-item">
            <div className="resume-content">
              <div className="title-heading-exp">Litigation Paralegal</div>
              <div className="subheading">Proskauer Rose LLP</div>
              <ul>
                <li>
                  Assisting lawyers on all phases of the litigation process
                  including preparation of pleadings and filings.
                </li>
                <li>Performing factual research and document review.</li>
                <li>
                  Maintaining case files and databases. Implementing firm-wide
                  database structure and file naming conventions.
                </li>
              </ul>
            </div>
            <div className="resume-date">
              <div className="date-heading">April 2012 - December 2015</div>
            </div>
          </div>
          <br></br>

          <div className="resume-item">
            <div className="resume-content">
              <div className="title-heading-exp">
                Sales Intern, Sales Associate
              </div>
              <div className="subheading">Searchlight Group</div>
              <ul>
                <li>
                  Assisting senior sales team at finance-focused executive
                  search firm by cold calling for leads and coordinating with
                  clients both in person and over the phone.
                </li>
              </ul>
            </div>
            <div className="resume-date">
              <div className="date-heading">June 2010 - March 2012</div>
            </div>
          </div>
          <br></br>
        </div>
      </div>
    </Plx>
  </section>
)

export default Experience
