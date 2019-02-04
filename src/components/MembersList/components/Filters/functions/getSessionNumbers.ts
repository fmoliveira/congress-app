const ranges = {
  house: [80, 115],
  senate: [102, 115]
}

export function getSessionNumbers(chamber: string = "senate"): number[] {
  const values = []
  const [min, max] = ranges[chamber]

  for (let i = min; i <= max; i++) {
    values.push(i)
  }

  const reversed = values.reverse()
  return reversed
}
