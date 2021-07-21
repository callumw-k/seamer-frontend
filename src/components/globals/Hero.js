import React from "react";
import styled from "@emotion/styled";
import { breakpoints, centre_content, fontMarginReset } from "../helpers";
import { css } from "@emotion/react";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";

const HeroSection = styled.div``;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  ${(props) =>
    props.width === "md" ? centre_content.lg : centre_content.xxxl};
  padding: 8rem 0;
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
  h1 {
    word-break: break-word;
    font-weight: var(--fontExtraBold);
    font-size: var(--biggerHeading);
    ${breakpoints.md} {
      ${fontMarginReset};
    }
  }
`;
export default function Hero({ title, description, width, subtitle, image }) {
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
          <h1>{title}</h1>
        </LeftContent>
        {description && <h2>{description}</h2>}
      </Inner>
      {/*<StaticImage*/}
      {/*  src="../../images/services/saffron-services-main.jpg"*/}
      {/*  alt={title}*/}
      {/*/>*/}
    </HeroSection>
  );
}
