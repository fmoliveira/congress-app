import React from "react"

import { format, parse } from "date-fns"

interface IProps {
  value: string
  displayFormat?: string
}

const formatDate = (value: string, displayFormat: string) =>
  format(parse(value), displayFormat)

export const Date = ({ value, displayFormat = "YYYY-MM-DD" }: IProps) => (
  <time dateTime={value}>{formatDate(value, displayFormat)}</time>
)
