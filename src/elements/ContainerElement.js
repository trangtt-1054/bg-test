import styled from "styled-components"

//repeat(12, minmax(auto, 4.2rem)): calculate the max width for us, 2 cái 1fr ở ngoài là 2 khoảng trắng trong file design, giữa 2 khoảng trắng mới là design gồm 12 columns
export const ContainerWrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr repeat(12, minmax(auto, 4.2rem)) 1fr;
  grid-template-rows: 7.8rem 20rem 5rem auto;
  gap: 0 2rem;
  @media ${props => props.theme.breakPoints.tablet} {
    grid-template-columns: 2rem repeat(6, 1fr) 2rem;
    grid-gap: 0 1 rem;
  }
  @media ${props => props.theme.breakPoints.mobile} {
    grid-template-columns: 1rem repeat(6, 1fr) 1rem;
  }
`
