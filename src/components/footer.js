import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { breakpoints, centre_content } from "./helpers";
import { StaticImage } from "gatsby-plugin-image";

const Wrapper = css`
  margin-top: 10rem;
  position: relative;
  &:after {
    content: "";
    background-color: #1b1b1b;
    position: absolute;
    height: 100%;
    width: 100%;
    top: 150px;
  }
`;

const formWrapper = css`
  display: flex;
  flex-direction: column;
  z-index: 10;
  position: relative;
  ${breakpoints.md} {
    flex-direction: row;
  }
  padding: 6rem 2rem;
  background-color: #2b2928;
  color: white;
  margin-top: -150px;
  ${centre_content.md};
`;

const formStyles = css`
  flex-basis: 70%;
  color: white;
`;

const DoubleColumn = styled.div`
  display: flex;
  flex-direction: column;
  ${breakpoints.md} {
    flex-direction: row;
    & > div:first-of-type {
      margin-right: 2rem;
    }
  } ;
`;

const SubmitColumn = styled.div`
  display: flex;
  ${breakpoints.md} {
    justify-content: space-between;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 1rem 0;
  label {
    font-size: var(--smallText);
    margin-bottom: 0.25rem;
  }
  input {
    padding: 0.75rem 1rem;
    background-color: #1b1b1b;
    color: white;
    line-height: 1.4rem;
    border: none;
    border-bottom: 5px solid white;
    transition: border-bottom-color 200ms;
    &:focus {
      outline: none;
      border-bottom: 5px solid var(--orange);
    }
  }
`;

const Details = styled.div`
  h4 {
    text-decoration: underline;
  }
  a {
    color: white;
  }
  ${breakpoints.md} {
    margin-left: 2rem;
  }
`;

const FooterWrapper = styled.footer`
  background-color: #1b1b1b;
  padding: 4rem 0;
`;

const footerInner = css`
  ${centre_content.md};
`;

export default function Footer() {
  return (
    <>
      <section css={Wrapper}>
        <div css={formWrapper}>
          <form css={formStyles} action="">
            <DoubleColumn>
              <InputWrapper>
                <label htmlFor="first-name">First Name</label>
                <input
                  type="text"
                  id="first-name"
                  name="first_name"
                  placeholder="First Name"
                />
              </InputWrapper>
              <InputWrapper>
                <label htmlFor="last-name">Last Name</label>
                <input
                  type="text"
                  id="last-name"
                  name="last_name"
                  placeholder="Last Name"
                />
              </InputWrapper>
            </DoubleColumn>
            <DoubleColumn>
              <InputWrapper>
                <label htmlFor="company">Company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Company"
                />
              </InputWrapper>
              <InputWrapper>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  pattern=".+@globex\.com"
                  placeholder="Email"
                />
              </InputWrapper>
            </DoubleColumn>
            <div>
              <InputWrapper>
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Phone Number"
                />
              </InputWrapper>
            </div>
            <SubmitColumn>
              <p>I agree to the privacy policy</p>
              <button type="submit" value="Submit">
                Submit
              </button>
            </SubmitColumn>
          </form>
          <Details>
            <h3>Our details.</h3>
            <h4>Melbourne</h4>
            <p>Level 23, Tower 5, 727 Collins Street Docklands VIC 3008</p>
            <p>
              Phone <a href="tel:0390089838">03 9008 9838</a>
            </p>
            <h4>Ballarat</h4>
            <p>
              Suite 8, 34A Doveton Street Nth <br /> Ballarat, VIC, 3350
            </p>
            <p>
              Phone <a href="tel:03 5324 2288">03 5324 2288</a>
            </p>
          </Details>
        </div>
      </section>
      <FooterWrapper>
        <div css={footerInner}>
          <StaticImage
            css={css`
              max-width: 300px;
              margin: 0 auto;
              display: block;
            `}
            src="../images/seamer_logo.png"
            alt="Seamer Design logo."
            quality={100}
          />
        </div>
      </FooterWrapper>
    </>
  );
}
