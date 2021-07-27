import BlockContent from "@sanity/block-content-to-react";
import React from "react";
import styled from "@emotion/styled";
import { breakpoints, centre_content, fontMarginReset } from "../helpers";

const ContentBlockWrapper = styled.div`
  ${centre_content.xl};
  margin: 4rem auto;
  ${breakpoints.lg} {
    display: grid;
    grid-template-columns: 48% 50%;
    justify-content: space-between;
    h3 {
      ${fontMarginReset};
      font-size: var(--h2);
    }
  }
`;

const Paragraph = styled.div`
  flex-basis: 50%;
  & p:first-of-type {
    margin-top: 0;
  }
`;

export default function ContentBlock({ block }) {
  if (block.title && block.content) {
    return (
      <ContentBlockWrapper>
        <h3>{block.title}</h3>
        <Paragraph>
          <BlockContent blocks={block.content} />
        </Paragraph>
      </ContentBlockWrapper>
    );
  } else {
    return null;
  }
}
