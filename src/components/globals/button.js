import React, { useState } from "react";
import { css } from "@emotion/react";
import { BiRightArrowAlt } from "react-icons/bi";
import styled from "@emotion/styled";

const linkStyles = css`
  text-decoration: underline;
  display: inline-flex;
  align-items: center;
  background-color: transparent;
  border: none;
  outline: none;
  font-weight: bold;
  cursor: pointer;
`;

const RightArrow = styled(BiRightArrowAlt)`
  transition: 200ms transform;
  ${(props) => (props.hover ? "transform: translate(0.5rem,0);" : "")}
`;

export default function Button({ extendedStyle, text, type, value }) {
  const [isHover, hoverChanger] = useState(false);

  return (
    <button
      onMouseEnter={() => hoverChanger(true)}
      onMouseLeave={() => hoverChanger(false)}
      css={[linkStyles, extendedStyle]}
      type={type}
      value={value}
    >
      {text}
      <RightArrow hover={isHover ? 1 : 0} size={30} />
    </button>
  );
}
