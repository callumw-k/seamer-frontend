import React, { useState } from "react";
import { Link } from "gatsby";
import { css } from "@emotion/react";
import { BiRightArrowAlt } from "react-icons/bi";
import styled from "@emotion/styled";

const linkStyles = css`
  text-decoration: underline;
  display: inline-flex;
  align-items: center;
`;

const RightArrow = styled(BiRightArrowAlt)`
  transition: 200ms margin-left;
  margin-left: 0.25rem;
  ${(props) => (props.hover ? "margin-left:0.75rem;" : "")}
`;

export default function externalLink(props) {
  const [isHover, hoverChanger] = useState(false);

  return (
    <a
      onMouseEnter={() => hoverChanger(true)}
      onMouseLeave={() => hoverChanger(false)}
      css={[linkStyles, props.extendedStyle]}
      href={props.url}
    >
      {props.text}
      <RightArrow hover={isHover ? 1 : 0} />
    </a>
  );
}
