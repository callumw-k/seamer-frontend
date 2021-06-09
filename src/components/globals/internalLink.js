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
  ${(props) => (props.onHover ? "margin-left:0.75rem;" : "")}
`;

export default function InternalLink(props) {
  const [isHover, hoverChanger] = useState(false);

  return (
    <Link
      onMouseEnter={() => hoverChanger(true)}
      onMouseLeave={() => hoverChanger(false)}
      css={[linkStyles, props.extendedStyle]}
      to={props.internalLinkUrl}
    >
      {props.internalLinkText}
      <RightArrow onHover={isHover} />
    </Link>
  );
}
