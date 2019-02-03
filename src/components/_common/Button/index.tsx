import styled from "styled-components"

export const Button = styled.button`
  display: inline-block;
  margin: 1em;
  padding: 0.75em 1em;
  border-radius: 20px;
  color: #ffffff;
  background-color: #7220d9;
  border: none;
  box-shadow: 1px 1px 10px #b89fd6;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: #8c45e5;
  }

  &:active {
    transform: translate(1px, 1px);
  }
`
