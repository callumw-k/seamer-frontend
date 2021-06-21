import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
export default function GallerySorter({ gallery }) {
  console.log(gallery);
  return <div>{gallery?.asset?.map((image) => console.log(image))}</div>;
}
