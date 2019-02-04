import React, { useState } from "react"
import styled from "styled-components"

import { noop } from "lodash"

const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  position: relative;
`

const SelectStyle = styled.select`
  padding: 0.75em;
  padding-right: 2em;
  height: 40px;
  color: #888888;
  font-size: 0.9em;
  background-color: #ffffff;
  border: 1px solid #ebeded;
  border-radius: 6px;

  &::placeholder {
    color: #cfcfcf;
  }
`

export const Select = ({
  initialValue = "",
  children,
  onChange = noop,
  ...others
}: any) => {
  const [value, setValue] = useState(initialValue)
  const updateValue = (newValue: string) => {
    setValue(newValue)
    onChange(newValue)
  }
  const valueChanged = (event: any) => updateValue(event.target.value)

  return (
    <Wrapper>
      <SelectStyle value={value} onChange={valueChanged} {...others}>
        {children}
      </SelectStyle>
    </Wrapper>
  )
}
