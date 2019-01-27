import React from "react"
import styled from "styled-components"

import logoImage from "./logo.png"

const WrappedImage = styled.img`
  height: 80px;
`

const Logo = () => <WrappedImage src={logoImage} alt="Ubiquity 6" />

export default Logo
