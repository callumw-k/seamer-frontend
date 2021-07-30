import React from "react";
import styled from "@emotion/styled";
import { breakpoints, centre_content } from "../helpers";

const Wrapper = styled.div`
  padding: 2rem;
  background-color: var(--orange);
`;

const Inner = styled.div`
  display: grid;

  justify-content: space-between;
  ${breakpoints.md} {
    grid-template-columns: repeat(3, 30%);
  }

  ${centre_content.xxl};
`;

export default function AboutValues() {
  return (
    <Wrapper>
      <Inner>
        <div>
          <h3>Imagination</h3>
          <p>
            It fires our ideas; the concepts we generate to bring your brand and
            your story to life.
          </p>
        </div>
        <div>
          <h3>Creativity</h3>
          <p>It’s at the heart of everything we do.</p>
        </div>
        <div>
          <h3>Integrity</h3>
          <p>
            We operate with the honesty and reliability that builds trust and
            lasting relationships.
          </p>
        </div>
        <div>
          <h3>Quality</h3>
          <p>
            Excellence drives us because we want what we deliver to be
            extraordinary.
          </p>
        </div>
        <div>
          <h3>Client Service</h3>
          <p>
            Products and processes are pointless without people. It’s why, for
            us, you come first.
          </p>
        </div>
        <div>
          <h3>Dependability</h3>
          <p>
            You can depend on us to deliver projects which exceed all
            expectations on time, every time.
          </p>
        </div>
      </Inner>
    </Wrapper>
  );
}
