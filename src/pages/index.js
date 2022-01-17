import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

import Carousel from "../components/Carousel"
import Hero from "../components/Hero"
import StickyNav from "../components/StickyNav"
import SectionOne from "../components/1"
import SectionTwo from "../components/2"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Hero
        img={data.hero.childImageSharp.fluid}
        styleClass="hero-background">
      </Hero>
      <StickyNav/>
      <SectionOne
        img={data.peak.childImageSharp.fluid}
        styleClass="hero-background"
      />
      <Carousel img={data.carouselBg.childImageSharp.fluid} />
      <SectionTwo
        text={data.sectionTwo.childImageSharp.fluid}
        tab1={data.climbOne.childImageSharp.fluid}
        tab2={data.climbTwo.childImageSharp.fluid}
      />
    </Layout>
  )
}

export const query = graphql`
  {
    hero: file(relativePath: { eq: "Hero.jpg" }) {
      childImageSharp {
        fluid(toFormat: JPG) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    carouselBg: file(relativePath: { eq: "Carousel-Bg.jpg" }) {
      childImageSharp {
        fluid(toFormat: JPG) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    peak: file(relativePath: { eq: "1-History.jpg" }) {
      childImageSharp {
        fluid(toFormat: JPG) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }

    sectionTwo: file(relativePath: { eq: "2-Text.jpg" }) {
      childImageSharp {
        fluid(toFormat: JPG) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }

    climbOne: file(relativePath: { eq: "2-Tab-1.jpg" }) {
      childImageSharp {
        fluid(toFormat: JPG) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    climbTwo: file(relativePath: { eq: "2-Tab-2.jpg" }) {
      childImageSharp {
        fluid(toFormat: JPG) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
export default IndexPage
