import React from "react";
import styled from "@emotion/styled";

const Wrapper = styled.footer`
  position: fixed;
  bottom: 0;
  height: 100vh;
  overflow-x: hidden;
  width: 100%;
  left: 0;
  z-index: -1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default function Footer() {
  return (
    <Wrapper>
      <p>This is the footer</p>
    </Wrapper>
  );
}
