import styled, { keyframes } from "styled-components"

interface ITextProps {
  fullWidth?: boolean
}

const WaveAnimation = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`

export const TextSkeleton = styled.div`
  display: ${(props: ITextProps) =>
    props.fullWidth ? "block" : "inline-block"};
  margin: ${(props: ITextProps) => (props.fullWidth ? "0.5em" : "0")};
  padding: 0 0.5em;
  color: transparent;
  background-color: #d5dbe2;
  background-image: linear-gradient(90deg, #d5dbe2, #c0c9d5, #d5dbe2);
  background-size: 200px 100%;
  background-repeat: no-repeat;
  animation: ${WaveAnimation} 1.5s ease-in-out infinite;
`

export const CircleSkeleton = styled.div`
  display: inline-block;
  width: 32px;
  height: 32px;
  border-radius: 100%;
  background-color: #d5dbe2;
  background-image: linear-gradient(90deg, #d5dbe2, #c0c9d5, #d5dbe2);
  background-size: 200px 100%;
  background-repeat: no-repeat;
  animation: ${WaveAnimation} 1.5s ease-in-out infinite;
`
