import { useRef } from "react";
import React from "react";
import useIntersectionObserver from "@react-hook/intersection-observer";

const LazyIframe = () => {
  const containerRef = useRef();
  const lockRef = useRef(false);
  const { isIntersecting } = useIntersectionObserver(containerRef);
  if (isIntersecting) {
    lockRef.current = true;
  }
  return (
    <div
      style={{
        overflow: "hidden",
        paddingTop: "56.25%",
        position: "relative",
        width: "100%",
      }}
      ref={containerRef}
    >
      {lockRef.current && (
        <iframe
          src="https://iframe.videodelivery.net/343f1a0f80efd25096c6913ccfd8e5c4?muted=true&loop=true&autoplay=true&controls=false"
          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
          allowFullScreen="true"
          loading="lazy"
          style={{
            bottom: 0,
            height: "100%",
            outline: "none",
            border: "none",
            left: 0,
            position: "absolute",
            right: 0,
            top: 0,
            width: "100%",
          }}
        />
      )}
    </div>
  );
};

export default LazyIframe;
