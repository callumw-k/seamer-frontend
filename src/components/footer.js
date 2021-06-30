import React from "react";
import styled from "@emotion/styled";

const Wrapper = styled.footer`
  position: fixed;
  bottom: 0;
  height: 100vh;
  overflow: hidden;
`;
export default function Footer() {
  return (
    <Wrapper>
      <p>This is the footer</p>
    </Wrapper>
  );
}
