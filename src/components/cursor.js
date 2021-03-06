import React, { useState, useEffect } from "react";
import styled from "@emotion/styled"; //we already import useState and useEffect that we will use later

const CursorStyles = styled.div`
  width: 40px;
  height: 40px;
  background-color: white;
  border-radius: 100%;
  position: fixed;
  pointer-events: none;
  z-index: 2;
  mix-blend-mode: difference;
  opacity: 1;
  transform: translate(-100%, -100%);
  transition: 200ms height, opacity, width;
  ${(props) => (props.hidden ? "opacity: 0; visibility: hidden;" : "")};
  ${(props) => (props.linkHover ? "width: 50px; height: 50px;" : null)}
`;

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);
  const [click, setClick] = useState(false);
  const [linkHover, setLinkHover] = useState(false);

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener("mousemove", mMove);
      document.addEventListener("mouseenter", mEnter);
      document.addEventListener("mouseleave", mLeave);
      document.addEventListener("mousedown", mDown);
      document.addEventListener("mouseup", mUp);
    };

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", mMove);
      document.removeEventListener("mouseenter", mEnter);
      document.removeEventListener("mouseleave", mLeave);
      document.removeEventListener("mousedown", mDown);
      document.removeEventListener("mouseup", mUp);
    };

    const mDown = () => {
      setClick(true);
    };

    const mUp = () => {
      setClick(false);
    };

    const mMove = (el) => {
      setPosition({ x: el.clientX, y: el.clientY });
    };

    const mLeave = () => {
      setHidden(true);
    };

    const mEnter = () => {
      setHidden(false);
    };

    const addLinkEvents = () => {
      document.querySelectorAll(".iframe-container").forEach((el) => {
        el.addEventListener("mouseover", () => setHidden(true));
        el.addEventListener("mouseout", () => setHidden(false));
      });
      document.querySelectorAll("a").forEach((el) => {
        el.addEventListener("mouseover", () => setLinkHover(true));
        el.addEventListener("mouseout", () => setLinkHover(false));
      });
      document.querySelectorAll("button").forEach((el) => {
        el.addEventListener("mouseover", () => setLinkHover(true));
        el.addEventListener("mouseout", () => setLinkHover(false));
      });
      document.querySelectorAll(".menu-icon").forEach((el) => {
        el.addEventListener("mouseover", () => setLinkHover(true));
        el.addEventListener("mouseout", () => setLinkHover(false));
      });
    };

    addEventListeners();
    addLinkEvents();
    return () => removeEventListeners();
  }, []);

  return (
    <CursorStyles
      hidden={hidden ? 1 : 0}
      click={click ? 1 : 0}
      linkHover={linkHover ? 1 : 0}
      posY={position.y}
      posX={position.x}
      // style={{ left: `${position.x}px`, top: `${position.y}px` }}
      style={{
        transform: `translate( ${
          position.x === 0 ? "-100%" : `calc(${position.x}px - 50%)`
        } , calc(${position.y}px - 50%))`,
      }}
    />
  );
};

export default Cursor;
