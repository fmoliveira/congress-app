import React, { useState } from "react"
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

export interface IFilters {
  fullName: string
}

const initialFilters: IFilters = {
  fullName: ""
}

interface IProps {
  onChange: (newFilters: IFilters) => void
}

const Filters = ({ onChange }: IProps) => {
  const [currentFilters, setFilters] = useState(initialFilters)

  const updateFilter = (filterName: string) => (newValue: string) => {
    const newFilters = {
      ...currentFilters,
      [filterName]: newValue
    }
    setFilters(newFilters)
    onChange(newFilters)
  }

  return (
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
          <Input
            type="text"
            placeholder="Type a name to filter"
            onChange={updateFilter("fullName")}
          />
        </ControlLabel>
      </Container>
    </div>
  )
}

export default Filters
