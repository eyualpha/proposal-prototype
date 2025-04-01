import React from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import agents from "../data/agents";

const AgentsScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={agents}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.profilePicture} style={styles.image} />
            <View style={styles.agentInfo}>
              <Text style={styles.name}>{item.fullName}</Text>
              <Text style={styles.email}>{item.email}</Text>
              <Text>{item.address}</Text>
              <Text style={styles.posts}>{item.posts} Posts</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  card: {
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: "row",
    backgroundColor: "#fff",
  },
  agentInfo: {
    marginLeft: 10,
    justifyContent: "center",
  },
  image: { width: 100, height: 100, borderRadius: 50 },
  name: { fontSize: 18, fontWeight: "bold" },
  email: { color: "gray" },
  posts: {
    color: "white",
    backgroundColor: "tomato",
    padding: 5,
    borderRadius: 5,
    width: 70,
  },
});

export default AgentsScreen;
