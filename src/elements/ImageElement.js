import styled from "styled-components"

//create a div to wrap a gatsby image, make it responsive
export const FeatureImageWrapper = styled.div`
  grid-column: 3 / span 10;
  grid-row: 2 / 4;
  overflow: hidden;
  position: relative;

  @media ${props => props.theme.breakPoints.tablet} {
    grid-column: 2 / span 6;
  }
`
