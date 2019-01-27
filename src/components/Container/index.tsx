import React from "react";
import styled from "styled-components";

const WrappedLayer = styled.div`
  margin: 0 auto;
  padding: 1em;
  width: 1280px;
`;

type Props = {
  children: React.ReactNode;
};

export const Container = ({ children }: Props) => (
  <WrappedLayer>{children}</WrappedLayer>
);
