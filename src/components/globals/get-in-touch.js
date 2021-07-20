import React from "react";
import styled from "@emotion/styled";
import InternalLink from "./internalLink";
import { breakpoints, centre_content, fontMarginReset } from "../helpers";
const Wrapper = styled.section`
  margin-bottom: 100vh;
  padding: 6rem 5%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--black);
  ${breakpoints.md} {
    flex-direction: row;
    align-items: center;
  }
  .title {
    font-size: var(--h1);
    ${fontMarginReset};
  }
  .content {
    ${breakpoints.md} {
      max-width: 42%;
    }
    font-size: var(--h4);
  }
  a {
    color: white;
  }
`;

export default function GetInTouch() {
  return (
    <Wrapper>
      <h2 className="title">Get in touch</h2>
      <p className={"content"}>
        Looking to update an existing project, or get started on a new one?{" "}
        <InternalLink text="Let's get started" url="/contact" />{" "}
      </p>
    </Wrapper>
  );
}
