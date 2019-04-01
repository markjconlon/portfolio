import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { device } from "../components/helpers"

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 90vh;

  @media ${device.tablet}{
    align-items: space-around;
    justify-content: center;
    flex-direction: column;
  }
`

const ImgContainer = styled.div`
  height: 300px;
  width: 300px;
  margin-right: 2.9rem;
  @media ${device.tablet}{
    margin-bottom: 1.45rem;
    margin-right: 0;
  }
`

const AboutCopy = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin-bottom: 1.45rem;
  font-family: "Open Sans";

  @media ${device.tablet}{
    flex-direction: column-reverse;
  }
`

const AboutCopyP = styled.p`
  @media ${device.tablet}{
    margin: 0;
  }
`

const AboutCopyH3 = styled.h3`
  @media ${device.tablet}{
    margin-bottom: 1.45rem;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
      }}
    >
      <Main>
        <ImgContainer>
          <div style={{ width: `300px`, marginBottom: `1.45rem` }}>
            <Image />
          </div>
        </ImgContainer>

        <AboutCopy>
          <AboutCopyP>
            I am a software developer working out of Toronto. The majority of my time at work is spent on a React-Redux application using a C# backend. I am accomplished at wearing many hats from developer operations to maintaining highly performant, responsive web applications.
          </AboutCopyP>
          <AboutCopyH3>Let's build something great together!</AboutCopyH3>
        </AboutCopy>
      </Main>
    </div>
  </Layout>
)

export default IndexPage