import React from "react";
import Content from "../components/about/about.first-content-block";
import Layout from "../components/layout";
import { css } from "@emotion/react";
import SecondContentBlock from "../components/about/about.second-content-block";
import styled from "@emotion/styled";
const HeaderWrapper = styled.div`
  background-color: #f5f5f4;
  padding: 6rem 0;
`;
export default function About() {
  return (
    <Layout>
      <HeaderWrapper>
        <h2
          css={css`
            max-width: 1200px;
            margin-left: clamp(
              5%,
              calc((100vw - 1564px) / 2),
              calc((100vw - 1564px) / 2)
            );
            margin-right: 5%;
          `}
        >
          We’re a collaborative team of strategists, creatives and designers,
          who create, disperse, manage and maintain the branding pieces that
          tell your story.
        </h2>
        <Content />
      </HeaderWrapper>
      <SecondContentBlock />
    </Layout>
  );
}
