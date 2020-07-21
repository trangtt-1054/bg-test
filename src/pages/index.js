import React from "react"
import { Container, FeatureImage, Content, ContentCard } from "../components"

const IndexPage = () => {
  return (
    <Container>
      <FeatureImage />
      <Content>
        <ContentCard
          date="Jul 21, 2020"
          title="How To Practice Self-Care As A Minority"
          excerpt="I’m talking about the offhand joke which everyone else laughed at, that you’ll be branded a killjoy for calling out. The panel that wants you to talk, yet again, about race or sex or gender, instead of your artistic, political or scientific achievements. Above all, about putting your neck on the line, sometimes quite literally, just by living your (let’s face it, relatively average) day-to-day life in the face of physical or verbal violence, because that’s what it is to be one of the disempowered."
          slug="/how-to-get-awesome"
        />
      </Content>
    </Container>
  )
}

export default IndexPage
