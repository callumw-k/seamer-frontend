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

    //target the second divs ContentWrapper and remove the padding
    & > div:nth-child(2) > div {
      padding: 0;
    }
    & > div {
      flex-basis: 50%;
    }

    &>div: ${(props) => (props.staggered ? "last-child" : "first-of-type")} {
      margin-top: 12rem;
      flex-basis: 45%;
    }
  } ;
`;

export default function ClientDouble({ staggered, children }) {
  return <Wrapper staggered={staggered}>{children}</Wrapper>;
}
