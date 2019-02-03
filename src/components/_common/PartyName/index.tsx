const PartiesList = {
  D: "Democrats",
  I: "Independents",
  R: "Republicans"
}

interface IProps {
  id: string
}

export const PartyName = ({ id = "" }: IProps) => {
  const initial = id.toUpperCase()
  return PartiesList[initial] || initial
}
