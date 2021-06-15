import React from "react";
import styled from "@emotion/styled";
import { breakpoints } from "../../helpers";

const Wrapper = styled.div`
  margin: 4rem 0;
  display: flex;
  flex-direction: column;
  ${breakpoints.max_md} {
    & > div:first-of-type {
      margin-bottom: 4rem;
    }
  }
  ${breakpoints.md} {
    flex-direction: row;
    justify-content: space-between;

    & > div {
      flex-basis: 48%;
    }

    &>div: ${(props) => (props.staggered ? "last-child" : "first-child")} {
      margin-top: 4rem;
    }
  } ;
`;

export default function FolioDouble({ staggered, children }) {
  return <Wrapper staggered={staggered}>{children}</Wrapper>;
}
