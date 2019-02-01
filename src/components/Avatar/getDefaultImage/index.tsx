import female from "./female.svg"
import male from "./male.svg"
import placeholder from "./placeholder.png"

const genderImages = { F: female, M: male }

export default function getDefaultImage(gender: string) {
  return genderImages[gender] || placeholder
}
