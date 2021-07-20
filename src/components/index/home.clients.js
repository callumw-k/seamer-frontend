import React from "react";
import MediaCard from "../globals/MediaCard";
import ClientDouble from "./client.components/client.double";
import ClientSingle from "./client.components/client.single";
import styled from "@emotion/styled";

const FolioWrapper = styled.section`
  max-width: 2200px;
  margin: var(--marginSpacingLarge);
`;
function ClientGenerator({ client, single }) {
  return (
    <MediaCard
      image={client.heroImage.asset.gatsbyImageData}
      alt={client.heroImage.asset.altText}
      type={client.type}
      title={client.name}
      subtitle={client.subtitle}
      url={"work/" + client.slug.current}
      single={(single && single) || null}
      home={true}
    />
  );
}

export default function HomeClients({ clients }) {
  return (
    <FolioWrapper>
      <ClientDouble>
        {clients.slice(0, 2).map((client) => {
          return <ClientGenerator key={client._id} client={client} />;
        })}
      </ClientDouble>
      <ClientSingle>
        <ClientGenerator single key={clients[2]._id} client={clients[2]} />
      </ClientSingle>
      <ClientDouble staggered={1}>
        {clients.slice(3).map((client) => {
          return <ClientGenerator key={client._id} client={client} />;
        })}
      </ClientDouble>
    </FolioWrapper>
  );
}
