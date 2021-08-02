import { css } from "@emotion/react";
import ExternalLink from "./externalLink";
import React from "react";

export default function SocialLinks() {
  return (
    <React.Fragment>
      <p>Social</p>
      <ExternalLink
        text="Facebook"
        url="https://www.facebook.com/Seamer-Design-103537193025995"
      />
      <ExternalLink
        text="Instagram"
        url="https://www.instagram.com/seamer_design/"
      />
      <ExternalLink
        text="LinkedIn"
        url="https://www.linkedin.com/company/seamer-design"
      />
    </React.Fragment>
  );
}
