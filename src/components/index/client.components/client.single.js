import React from "react";
import styled from "@emotion/styled";
import { breakpoints } from "../../helpers";

const Wrapper = styled.div`
  ${breakpoints.md} {
    margin: 8rem 0;
    padding-left: 4rem;
  }
`;

export default function ClientSingle({ children }) {
  return <Wrapper>{children}</Wrapper>;
}
