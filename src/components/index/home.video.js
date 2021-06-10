import React from "react";
import ReactPlayer from "react-player/lazy";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
export default function HomeVideo() {
  const PlayerWrapper = styled.div`
    position: relative;
    padding-top: 56.25%;
  `;

  return (
    <PlayerWrapper>
      <ReactPlayer
        url="https://player.vimeo.com/video/420485156"
        playing={true}
        loop={true}
        muted={true}
        width="100%"
        height="100%"
        css={css`
          position: absolute;
          top: 0;
          left: 0;
        `}
      />
    </PlayerWrapper>
  );
}
