import React from "react";
import styled from "styled-components";

const ItemWrapper = styled.div`
  margin: 1em;
  padding: 1em;
  background-color: #ffffff;
`;

type Props = {
  id: number;
  name: string;
};

export const ListItem = ({ id, name }: Props) => (
  <ItemWrapper>
    #{id} - {name}
  </ItemWrapper>
);
