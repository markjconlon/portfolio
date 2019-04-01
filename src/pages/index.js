import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
      }}
    >
      <div
        style={{
          display: `flex`,
          alignItems: `center`,
          justifyContent: `space-around`,
          height: `90vh`,
        }}
      >
        <div
          style={{
            height: `300px`,
            width: `300px`,
            marginRight: `2.9rem`,
          }}
        >
          <div style={{ width: `300px`, marginBottom: `1.45rem` }}>
            <Image />
          </div>
        </div>

        <div>
          <p
            style={{
              display: `flex`,
              flexDirection: `column`,
              width: `60%`,
            }} >
            I am a software developer working out of Toronto. The majority of my time at work is spent on a React-Redux application using a C# backend. I am accomplished at wearing many hats from developer operations to maintaining highly performant, responsive web applications.
          </p>
          <h3 style={{margin: `0`,}}>Let's build something great together!</h3>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage