import React from "react"

import { Box } from "../index"
import { MapDisplay } from "./MapDisplay"

interface IProps {
  address: string
}

export const Map = ({ address }: IProps) => (
  <Box title="Office Location">
    {!address && <div>Office location unknown.</div>}
    {address && <MapDisplay address={address} />}
  </Box>
)
