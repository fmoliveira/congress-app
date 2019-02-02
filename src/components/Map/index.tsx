import React, { PureComponent } from "react"

import { Box } from "../index"

interface IProps {
  address: string
  state: string
}

export class Map extends PureComponent<IProps> {
  public render() {
    const { address, state } = this.props
    return (
      <Box title="Office Location">
        {address} {state}
      </Box>
    )
  }
}
