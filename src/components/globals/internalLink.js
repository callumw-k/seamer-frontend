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
  transition: 200ms transform;
  margin-left: 0.5rem;
  ${(props) => (props.hover ? "transform: translate(0.75rem,0);" : "")}
`;

export default function InternalLink(props) {
  const [isHover, hoverChanger] = useState(false);

  return (
    <Link
      onMouseEnter={() => hoverChanger(true)}
      onMouseLeave={() => hoverChanger(false)}
      css={[linkStyles, props.extendedStyle]}
      to={props.url}
    >
      {props.text}
      <RightArrow hover={isHover ? 1 : 0} />
    </Link>
  );
}
