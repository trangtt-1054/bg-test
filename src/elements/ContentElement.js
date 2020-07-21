import styled from "styled-components"

export const ContentWrapper = styled.main`
  grid-column: 4 / span 8;
  grid-row: 3 / span 5;
  background-color: ${props => props.theme.colors.light2};
  padding: ${props =>
    `${props.theme.spacing.xLarge} ${props.theme.spacing.xxLarge}`};
  box-shadow: ${props => props.theme.shadows.shadow1};
  z-index: 10;
  /* so that it could overlap the img */

  @media ${props => props.theme.breakPoints.tablet} {
    grid-column: 2 / span 6;
  }

  @media ${props => props.theme.breakPoints.mobile} {
    padding: ${props =>
      `${props.theme.spacing.medium} ${props.theme.spacing.large}`};
  }
`
