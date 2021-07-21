import React from "react";
import styled from "@emotion/styled";

const OuterWrapper = styled.div`
  width: 30px;
  height: 12px;
  cursor: pointer;
  padding: 10px 0 10px 10px;
  display: flex;
  align-items: center;
  box-sizing: content-box;
`;
const Wrapper = styled.div`
  width: 30px;
  height: 12px;
  transition: height 0.3s;
  transform: translate3d(0px, 0px, 0px);
  z-index: 120;
  position: absolute;
`;

const Hamburger = styled.span`
  height: 2px;
  width: 100%;
  position: absolute;
  background-color: white;
  mix-blend-mode: difference;
  z-index: 3;
`;

const HamburgerOne = styled(Hamburger)`
  top: 0;
`;
const HamburgerTwo = styled(Hamburger)`
  top: 100%;
`;
export default function NavIcon() {
  return (
    <OuterWrapper>
      <Wrapper>
        <HamburgerOne></HamburgerOne>
        <HamburgerTwo></HamburgerTwo>
      </Wrapper>
    </OuterWrapper>
  );
}
