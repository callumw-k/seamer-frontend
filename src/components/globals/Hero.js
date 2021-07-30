import React from "react";
import styled from "@emotion/styled";
import { breakpoints, centre_content, fontMarginReset } from "../helpers";
import { css } from "@emotion/react";
import { GatsbyImage } from "gatsby-plugin-image";
import { useSpring, animated } from "react-spring";

const HeroSection = styled.div``;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  ${(props) =>
    props.width === "md" ? centre_content.lg : centre_content.xxxl};
  padding: 10rem 0;
  ${breakpoints.md} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  h2 {
    ${fontMarginReset};
    margin-top: 1rem;
    font-size: var(--h3);
    ${breakpoints.md} {
      flex-basis: 50%;
      margin-left: 2%;
    }
  }
`;

const LeftContent = styled.div`
  overflow: hidden;
`;
const Header = styled(animated.h1)`
  word-break: break-word;
  font-weight: var(--fontExtraBold);
  font-size: var(--biggerHeading);
  ${breakpoints.md} {
    ${fontMarginReset};
  }
`;
export default function Hero({ title, description, width, subtitle, image }) {
  const slideUp = useSpring({
    from: { opacity: 0, transform: `translateY(100px)` },
    to: { opacity: 1, transform: `translateY(0)` },
  });
  return (
    <HeroSection width={width}>
      <Inner>
        <LeftContent>
          {subtitle && (
            <p
              css={css`
                font-size: var(--smallText);
              `}
            >
              {subtitle}
            </p>
          )}
          <Header style={slideUp}> {title}</Header>
        </LeftContent>
        {description && <h2>{description}</h2>}
      </Inner>
      {image && <GatsbyImage layout="fullWidth" image={image} alt={title} />}
    </HeroSection>
  );
}
