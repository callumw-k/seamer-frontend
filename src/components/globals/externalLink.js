import React, { useState } from "react";
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

export default function ExternalLink({ url, text, extendedStyle }) {
  const [isHover, hoverChanger] = useState(false);

  return (
    <a
      onMouseEnter={() => hoverChanger(true)}
      onMouseLeave={() => hoverChanger(false)}
      css={[linkStyles, extendedStyle]}
      href={url}
    >
      {text}
      <RightArrow hover={isHover ? 1 : 0} />
    </a>
  );
}
