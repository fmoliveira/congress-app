import React from "react"
import { node } from "prop-types"
import styled from "styled-components"

const WrappedLayer = styled.div`
  flex: 1;
  margin: 0 auto;
  padding: 1em;
  width: 1280px;
  background-color: #f6f8f9;
`

const Container = ({ children }) => <WrappedLayer>{children}</WrappedLayer>

Container.propTypes = {
  children: node
}

export default Container
