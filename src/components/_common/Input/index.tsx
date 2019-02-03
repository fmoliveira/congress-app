import React, { useState } from "react"
import styled from "styled-components"

import { noop } from "lodash"

const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  position: relative;
`

const InputStyle = styled.input`
  padding: 0.75em;
  padding-right: 2em;
  color: #888888;
  font-size: 0.9em;
  background-color: #ffffff;
  border: 1px solid #ebeded;
  border-radius: 6px;

  &::placeholder {
    color: #cfcfcf;
  }
`

const ClearButton = styled.div`
  position: absolute;
  right: 0.25em;
  display: inline-block;
  padding: 0.5em;
  color: #bababa;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    color: #e54570;
  }

  &:active {
    transform: translate(1px, 1px);
  }
`

export const Input = ({
  initialValue = "",
  onChange = noop,
  ...others
}: any) => {
  const [value, setValue] = useState(initialValue)
  const updateValue = (newValue: string) => {
    setValue(newValue)
    onChange(newValue)
  }
  const valueChanged = (event: any) => updateValue(event.target.value)
  const clearValue = () => updateValue("")

  return (
    <Wrapper>
      <InputStyle value={value} onChange={valueChanged} {...others} />
      {value && (
        <ClearButton onClick={clearValue} title="Click to clear this field">
          &times;
        </ClearButton>
      )}
    </Wrapper>
  )
}
