import React from "react"
import { ContainerWrapper } from "../elements"
import Nav from "./Nav"

//grio template for the whole app
export const Container = ({ children }) => {
  return (
    <ContainerWrapper>
      <Nav />
      {children}
    </ContainerWrapper>
  )
}
