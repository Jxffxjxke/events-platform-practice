import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, StatusBar, ScrollView } from "react-native";
import EventsList from "./Components/EventsList";

export default function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch(
      "https://www.skiddle.com/api/v1/events/search/?api_key=eaa92cb57d1d9d72a69feaddf994ff60&latitude=53.4839&longitude=-2.2446&radius=5&eventcode=LIVE&order=distance&description=1"
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((jsonRes) => {
        console.log(jsonRes);
        setEvents(jsonRes.results || []);
      })
      .catch((err) => console.error("Fetch error:", err.message));
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <EventsList events={events} />
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  }
} );
