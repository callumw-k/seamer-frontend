import BlockContent from "@sanity/block-content-to-react";
import React from "react";
import styled from "@emotion/styled";
import { breakpoints, centre_content, fontMarginReset } from "../helpers";
import { css } from "@emotion/react";

const ContentBlockWrapper = styled.div`
  ${centre_content.xxl};
  margin: 8rem auto;
  ${breakpoints.lg} {
    display: grid;
    grid-template-columns: 48% 50%;
    justify-content: space-between;
  }
`;

const Paragraph = styled.div`
  flex-basis: 50%;
  font-size: var(--h3);
  line-height: 1.2;
  ul {
    line-height: 1.4;
  }
  & p:first-of-type {
    margin-top: 0;
  }
`;

export default function ContentBlock({ block }) {
  if (block.title && block.content) {
    return (
      <ContentBlockWrapper>
        <h3
          className="medium-heading"
          css={css`
            ${fontMarginReset};
            margin-bottom: 1.38rem;
          `}
        >
          {block.title}
        </h3>
        <Paragraph>
          <BlockContent blocks={block.content} />
        </Paragraph>
      </ContentBlockWrapper>
    );
  } else {
    return null;
  }
}
