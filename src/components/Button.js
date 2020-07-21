import React from "react"
import { ButtonWrapper } from "../elements"

export const Button = ({ children, href }) => {
  //href để pass vào cái `to` của Gatsby Link
  return <ButtonWrapper to={href}>{children}</ButtonWrapper>
}
