import React from "react";
import styled from "@emotion/styled";
import { breakpoints, centre_content } from "../helpers";
import { StaticImage } from "gatsby-plugin-image";

const Wrapper = styled.div`
  ${centre_content.lg};
  margin: 8rem auto;
`;
const Inner = styled.div``;
const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 8rem 0;
  ${breakpoints.md} {
    flex-direction: row;
  }
  & > .grid__image {
    flex: 1 0 35%;
    max-width: 300px;
    ${breakpoints.md} {
      max-width: 400px;
      margin-right: 4rem;
    }
  }
`;
const Content = styled.div`
  order: 1;
`;
export default function SecondContentBlock() {
  return (
    <Wrapper>
      <h2>
        We deliver a creative and tailored branding, graphic and digital design
        service, that will exceed all of your communication needs.
      </h2>
      <Inner>
        <GridItem>
          <Content>
            <h3>Branding</h3>
            <h4>
              We brand for maximum impact. Delivering powerful brands is our
              speciality.
            </h4>
            <p>
              We create new brands, giving them with a bold voice that can be
              heard in a congested market, and refresh existing brands that no
              longer speak up. In both cases, we strip back the messaging to
              brand fundamentals and identify the best ways to get your story
              told so it’s remembered.
            </p>
            <p>
              Brand Audit • Brand Name • Rebranding • Brand Rollout • Brand
              Activation Campaigns • Brand Strategy • Identity Design • Style
              Guides • Research and Analysis • Art Direction
            </p>
          </Content>
          <StaticImage
            className="grid__image"
            layout="constrained"
            src="../../images/about/brand-audit.png"
            alt="yeet"
          />
        </GridItem>
        <GridItem>
          <Content>
            <h3>Graphic design</h3>
            <h4>
              We create beautiful, evocative designs that bring ideas and your
              story to life.{" "}
            </h4>
            <p>
              From brochures, annual reports, catalogues, packaging posters and
              flyers right down to presentation templates and internal
              communication forms. We provide the solution across all elements
              of your strategic planning and brand development. Handling all
              these services under one roof insures continuity in your brand,
              cost effectiveness & maximizes results.
            </p>
            <p>
              Brochure Design • Annual Report Design • Stationery • Publication
              Design • Promotion Design • Flyers • Wayfinding • Packaging •
              Illustrations • Exhibition Design • Catalogues • Internal
              Templates • Print Production
            </p>
          </Content>
          <StaticImage
            className="grid__image"
            layout="constrained"
            src="../../images/about/graphic-design.png"
            alt="yeet"
          />
        </GridItem>
        <GridItem>
          <Content>
            <h3>Website and Digital</h3>
            <h4>
              Our savvy digital solutions help grow your business because we
              know the channels that will reach your audience in the ways that
              work for them.
            </h4>
            <p>
              At the core of this work is your website. We’re expert at creating
              the clean, modern, highly functional and responsive space that
              engages time-poor users, draws them in and gets them taking
              action. We achieve this by leveraging the website’s wide and
              focused communication channels.
            </p>
            <p>
              Digital Strategy • Web Development • Ecommerce • Web Graphic
              Design • Social Media • Front-End Development • Website
              Maintenance • Digital Banner • Enewsletters • Animation
            </p>
          </Content>
          <StaticImage
            className="grid__image"
            layout="constrained"
            src="../../images/about/website-digital.png"
            alt="yeet"
          />
        </GridItem>
      </Inner>
    </Wrapper>
  );
}
