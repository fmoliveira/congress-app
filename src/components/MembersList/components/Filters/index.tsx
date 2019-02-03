import React from "react"
import styled from "styled-components"

import { ControlLabel, Input, SectionTitle } from "../../../_common"

const Container = styled.div`
  margin: 0.5em 1em;
`

const Hint = styled.span`
  margin: 0 1em;
  font-size: 0.8em;
  color: #ae86cb;
`

const Filters = () => (
  <div>
    <SectionTitle>
      Filters
      <Hint>
        Are you looking for a specific senator or representative? Use the
        filters below.
      </Hint>
    </SectionTitle>
    <Container>
      <ControlLabel description="Senator Name">
        <Input type="text" placeholder="Type a name to filter" />
      </ControlLabel>
    </Container>
  </div>
)

export default Filters
