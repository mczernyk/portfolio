import React from "react"
import Plx from "react-plx"
import { FontAwesomeIcon } from
'@fortawesome/react-fontawesome'
import { faCircle, faLaptop } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons'

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

const parallaxText = [
  {
    start: "self",
    duration: "800vh",
    properties: [
      {
        startValue: 0,
        endValue: 20,
        unit: "vh",
        property: "translateY",
      }
    ],
  },
]

const Experience = () => (
  <section id="experience">
    <Plx parallaxData={parallaxData}>
      <div className="section-container-experience">
      <Plx parallaxData={parallaxText}>
        <div>
          <h1 className="section-title-coral">Experience</h1>
          <br></br>

          <div className="resume-item">
            <div className="resume-content">
              <div className="title-heading-exp">Co-Founder & CTO</div>
              <div className="subheading">Shep</div>
              <ul>
                <li>
                  Building <a href="https://shep.social/">
                  Shep
                  </a>, a link saving and sharing app.
                </li>
                <li>
                We believe that friends make better recommendations than algorithms.
                </li>
                <li>
                Shep lets you share and discover content with people you know and trust.
                </li>
              </ul>
            </div>
            <div className="resume-date">
              <div className="date-heading">July 2020 - Present</div>

              <div className="social-icons">
              <a
                key="https://shep.social/"
                href="https://shep.social/"
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
              <div className="title-heading-exp">Product & Business Strategy Lead</div>
              <div className="subheading">Batchbud</div>
              <ul>
                <li>
                  Leading Product & Business Strategy at <a href="https://batchbud.com">
                  BatchBud
                  </a>, a modern resource planning hub tailored to infused product manufacturers. Onboarding & managing new accounts.
                </li>
                <li>
                  Supporting CTO and contributing to product development as a Software Engineer.
                </li>
              </ul>
            </div>
            <div className="resume-date">
              <div className="date-heading">August 2020 - November 2020</div>

              <div className="social-icons">
              <a
                key="https://batchbud.com"
                href="https://batchbud.com"
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
              <div className="title-heading-exp">Founder</div>
              <div className="subheading">Off-Chain Consulting</div>
              <ul>
                <li>
                  Cryptocurrency consulting specializing in trading strategy,
                  portfolio management & general Blockchain education.
                </li>
                <li>
                  Providing guidance re: trading, analyzing & mining Cryptoassets.
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
                  Leading design, marketing & sales for men’s lifestyle brand.
                </li>
                <li>
                  Building & managing{" "}
                  <a href="http://www.raddadsofficial.com">
                    Rad Dads Official webstore
                  </a>{" "}
                  &{" "}
                  <a href="http://www.instagram.com/raddadsofficial">
                    Instagram
                  </a>{" "}
                  /{" "}
                  <a href="http://www.facebook.com/raddadsofficial">
                    Facebook
                  </a>{" "}
                  /{" "}
                  <a href="http://www.twitter.com/officialraddads">Twitter</a>{" "}
                  social accounts.
                </li>
                <li>
                  Building automated Twitter bot that posts a dad joke & corresponding image every three hours to the <a href="http://www.twitter.com/officialraddads">Rad Dads Twitter feed</a> to augment cross-posted Instagram content.
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
                  key="https://www.twitter.com/officialraddads/"
                  href="https://www.twitter.com/officialraddads/"
                >
                <span className="fa-layers fa-fw fa2">
                  <FontAwesomeIcon icon={faCircle} transform="grow-20"/>
                  <FontAwesomeIcon icon={faTwitter} transform="grow-5" inverse/>
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
                  Overseeing daily operations of NY-based Trucking & Logistics
                  Co. (~100 truck fleet; 3 divisions).
                </li>
                <li>
                  Securing new accounts & maintaining client relationships.
                </li>
                <li>
                  Implementing new operational structure & technology upgrade
                  of Brooklyn & Bronx divisions; opening & managing remote
                  NJ division.
                </li>
                <li>
                  Designing company logo, business cards & ad copy /
                  campaigns; building & maintaining{" "}
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
                  including preparation of pleadings & filings.
                </li>
                <li>Performing factual research & document review.</li>
                <li>
                  Maintaining case files & databases. Implementing firm-wide
                  database structure & file naming conventions.
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
                  search firm by cold calling for leads & coordinating with
                  clients both in person & over the phone.
                </li>
              </ul>
            </div>
            <div className="resume-date">
              <div className="date-heading">June 2010 - March 2012</div>
            </div>
          </div>
          <br></br>

          <div className="resume-item">
            <div className="resume-content">
              <div className="title-heading-exp">Press Office, Public Integrity Bureau</div>
              <div className="subheading">NYS Office of the Attorney General</div>
              <ul>
                <li>
                Providing research & support to senior staff handling investigations into government corruption, fraud & abuse of authority.
                </li>
                <li>Writing press releases & researching stories related to OAG business. Coordinating with statewide news outlets regarding actions of the OAG & organizing media presence at OAG press events.
                </li>
              </ul>
            </div>
            <div className="resume-date">
              <div className="date-heading">Summers 2008 & 2009</div>
            </div>
          </div>
          <br></br>
        </div>
        </Plx>
      </div>
    </Plx>
  </section>
)

export default Experience
