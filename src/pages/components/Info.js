import React from "react"
import Plx from "react-plx"

const parallaxData = [
  {
    start: "self",
    duration: "300vh",
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

const Info = () => (
  <Plx parallaxData={parallaxData}>
    <div className="section-container-info">
      <section id="interests">
        <h1 className="section-title-blue">Interests</h1>
        <div className="interests-container">
          <p>
            When I'm not programming, I spend most of my time coming up with dad
            jokes for the <span className="subheading">Rad Dads Official</span>{" "}
            <a href="https://instagram.com/raddadsofficial">Instagram account</a>, watching crypto charts & scouring eBay &
            Craigslist for good deals. I'm a collector & reseller of many
            things -- most notably NFTs, vinyl, sneakers, clothing, vintage audio
            equipment & instruments.
          </p>
          <p>
            I do my best to stay active & healthy. I still play lacrosse with
            my Rad Dads squad in a local men's league & am always looking for
            new recipes to try out in the kitchen & on the grill. I spend as
            much time as I can outside in my apartment's backyard where I
            maintain a small garden & keep myself busy tinkering around on
            outdoor projects.
          </p>
          <p>
            I'd love to chat. Don't hesitate to <a key="email" href={`mailto:mczernyk@gmail.com`}>shoot me an email</a> or <a href="https://www.linkedin.com/in/czernyk/">connect on
            LinkedIn</a>.
          </p>
        </div>
      </section>
    </div>
  </Plx>
)

export default Info
