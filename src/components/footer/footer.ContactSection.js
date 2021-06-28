import Form from "../globals/Form";
import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { breakpoints, centre_content } from "../helpers";

const Wrapper = styled.section`
  margin-top: ${(props) =>
    props.location === "/contact/" || "/contact" ? "0" : "10rem"};
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

const Inner = styled.div`
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
export default function ContactSection({ location }) {
  return (
    <Wrapper location={location?.pathname}>
      <Inner>
        <Form />
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
      </Inner>
    </Wrapper>
  );
}
