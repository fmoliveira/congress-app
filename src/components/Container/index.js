import React from "react"
import { node } from "prop-types"
import styled from "styled-components"

const WrappedLayer = styled.div`
  margin: 0 auto;
  padding: 1em;
  width: 1280px;
`

export const Container = ({ children }) => (
  <WrappedLayer>{children}</WrappedLayer>
)

Container.propTypes = {
  children: node
}
