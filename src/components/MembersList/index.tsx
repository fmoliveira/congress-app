import React from "react";

import { ListItem } from "./components";

const mockData = [
  { id: 1, name: "Alexander" },
  { id: 2, name: "Graham" },
  { id: 3, name: "Bell" },
  { id: 4, name: "Steve" },
  { id: 5, name: "Jobs" }
];

type Props = {
  data: [
    {
      id: number;
      name: string;
    }
  ];
};

export const MembersList = ({ data }: Props) => (
  <div>
    {data.map(i => (
      <ListItem key={i.id} {...i} />
    ))}
  </div>
);

MembersList.defaultProps = {
  data: mockData
};
