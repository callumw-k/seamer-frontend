import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { breakpoints, centre_content, fontMarginReset } from "../helpers";
import InternalLink from "../globals/internalLink";

export default function HomeHero(props) {
  const title = props.title;
  const subtitle = props.subtitle;
  const internalLinkText = props.internalLinkText;
  const internalLinkUrl = props.internalLinkUrl;

  const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    height: 50vh;
    justify-content: center;
    ${centre_content.lg};
    ${breakpoints.md} {
      height: 60vh;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    h1 {
      ${fontMarginReset};
      ${breakpoints.md} {
        font-size: var(--jumboHeading);
        font-weight: var(--fontExtraBold);
        flex-basis: 40%;
      }
    }
    h3 {
      ${breakpoints.md} {
        ${fontMarginReset}
      }
    }
  `;

  const RightFlexBox = styled.div`
    ${breakpoints.md} {
      flex-basis: 40%;
    }
  `;

  return (
    <Wrapper>
      <h1>{title ? title : "Title"}</h1>
      <RightFlexBox>
        <h3>{subtitle ? subtitle : "Subtitle."}</h3>
        <InternalLink
          text={internalLinkText}
          url={internalLinkUrl}
          extendedStyle={css`
            font-size: var(--h3);
            font-weight: var(--fontBold);
          `}
        />
      </RightFlexBox>
    </Wrapper>
  );
}
