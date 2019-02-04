import React, { useState } from "react"
import styled from "styled-components"

import { ControlLabel, Input, SectionTitle, Select } from "../../../_common"
import { getSessionNumbers } from "./functions"

const Container = styled.div`
  margin: 0.5em 1em;

  & > * {
    margin-right: 1em;
  }
`

const Hint = styled.span`
  margin: 0 1em;
  font-size: 0.8em;
  color: #ae86cb;
`

export interface IFilters {
  chamber: string
  fullName: string
  party: string
  session: number
}

const initialFilters: IFilters = {
  chamber: "senate",
  fullName: "",
  party: "",
  session: 115
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
        <ControlLabel description="Party">
          <Select onChange={updateFilter("party")}>
            <option value="">All parties</option>
            <option value="D">Democrats</option>
            <option value="R">Republicans</option>
            <option value="I">Independents</option>
          </Select>
        </ControlLabel>
        <ControlLabel description="Chamber">
          <Select onChange={updateFilter("chamber")}>
            <option value="senate">Senate</option>
            <option value="house">House of Representatives</option>
          </Select>
        </ControlLabel>
        <ControlLabel description="Session">
          <Select onChange={updateFilter("session")}>
            {getSessionNumbers(currentFilters.chamber).map((i: number) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </Select>
        </ControlLabel>
      </Container>
    </div>
  )
}

export default Filters
