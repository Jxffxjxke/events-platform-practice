import { Text, View, StyleSheet } from "react-native";
import EventCard from "./EventCard";

const EventsList = ({ events }) => {
  return events.map((event, index) => {
    return <EventCard event={event} />;
  });
};

export default EventsList;
