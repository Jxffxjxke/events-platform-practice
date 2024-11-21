import * as React from "react";
import { Card, Title, Paragraph } from "react-native-paper";

const EventCard = ({ event }) => (
  <Card>
    <Card.Title title={event.eventname} subtitle={event.date} />
    <Card.Content>
      <Title>{event.venue.name}</Title>
      <Paragraph>{event.description}</Paragraph>
    </Card.Content>
    <Card.Cover source={{ uri: event.largeimageurl }} />
  </Card>
);

export default EventCard;
