import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { centre_content } from "./helpers";
import { StaticImage } from "gatsby-plugin-image";
import ContactSection from "./footer/footer.ContactSection";

const FooterWrapper = styled.footer`
  background-color: #1b1b1b;
  padding: 4rem 0;
`;

const footerInner = css`
  ${centre_content.md};
`;

export default function Footer({ location }) {
  return (
    <>
      <ContactSection location={location} />
      <FooterWrapper>
        <div css={footerInner}>
          <StaticImage
            css={css`
              margin: 0 auto;
              max-width: 300px;
              display: block;
            `}
            imgStyle={{ objectFit: "contain" }}
            width={300}
            src="../images/seamer_logo.png"
            alt="Seamer Design logo."
            quality={100}
          />
        </div>
      </FooterWrapper>
    </>
  );
}
