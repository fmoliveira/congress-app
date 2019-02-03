import React from "react"

import { format, parse } from "date-fns"

const formatDate = (value: string, displayFormat: string) =>
  format(parse(value), displayFormat)

interface IProps {
  value: string
  displayFormat?: string
}

export const Date = ({ value, displayFormat = "YYYY-MM-DD" }: IProps) => {
  if (!value) {
    return null
  }
  return <time dateTime={value}>{formatDate(value, displayFormat)}</time>
}
