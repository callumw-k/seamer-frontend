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
    justify-content: center;
    ${centre_content.xxxl};
    margin: var(--marginSpacingLarge);
    ${breakpoints.md} {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    h1 {
      ${fontMarginReset};
      ${breakpoints.md} {
        font-size: var(--jumboHeading);
        font-weight: var(--fontExtraBold);
        flex-basis: 48%;
      }
    }
    h2 {
      font-size: var(--h3);
      ${breakpoints.md} {
        ${fontMarginReset}
      }
    }
  `;

  const RightFlexBox = styled.div`
    ${breakpoints.md} {
      flex-basis: 50%;
    }
  `;

  return (
    <Wrapper>
      <h1>{title ? title : "Title"}</h1>
      <RightFlexBox>
        <h2>{subtitle ? subtitle : "Subtitle."}</h2>
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
