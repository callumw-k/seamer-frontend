import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { breakpoints, centre_content, fontMarginReset } from "../helpers";
import InternalLink from "../globals/internalLink";
import { useSpring, animated } from "react-spring";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10rem 0;

  ${breakpoints.md} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  ${centre_content.xxxl};

  h2 {
    font-size: var(--h3);
    ${breakpoints.md} {
      ${fontMarginReset}
    }
  }
`;

const LeftFlexBox = styled.div`
  flex-basis: 48%;
  h1 {
    ${fontMarginReset};
    ${breakpoints.md} {
      font-size: var(--jumboHeading);
    }
  }
  overflow: hidden;
`;

const RightFlexBox = styled.div`
  ${breakpoints.md} {
    flex-basis: 50%;
  }
`;

export default function HomeHero(props) {
  const title = props.title;
  const subtitle = props.subtitle;
  const internalLinkText = props.internalLinkText;
  const internalLinkUrl = props.internalLinkUrl;

  const slideUp = useSpring({
    from: { opacity: 0, transform: `translateY(100px)` },
    to: { opacity: 1, transform: `translateY(0)` },
  });
  return (
    <Wrapper>
      <LeftFlexBox>
        <animated.h1 style={slideUp}>{title ? title : "Title"}</animated.h1>
      </LeftFlexBox>
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
