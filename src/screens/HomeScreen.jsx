import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import PropertyCard from "../components/PropertyCard";
import properties from "../data/properties";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = properties
    .filter(
      (item) =>
        filter === "All" || item.type.toLowerCase() === filter.toLowerCase()
    )
    .filter(
      (item) => item.location.toLowerCase().includes(searchQuery.toLowerCase()) // Updated from `name`
    );

  console.log("Filtered Data:", filteredData); // Debugging

  return (
    <View style={styles.container}>
      {/* Search Input */}
      <TextInput
        style={styles.searchInput}
        placeholder="Search properties..."
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
      />

      {/* Filter Buttons */}
      <View style={styles.filterContainer}>
        {["All", "Villa", "Condominium"].map((type) => (
          <TouchableOpacity
            key={type}
            onPress={() => setFilter(type)}
            style={styles.filterButton}
          >
            <Text style={styles.filterText}>{type}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Property List */}
      {filteredData.length === 0 ? (
        <Text style={styles.noResultsText}>No properties found</Text>
      ) : (
        <FlatList
          data={filteredData}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("PropertyDetail", { property: item })
              }
            >
              <PropertyCard property={item} />
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  searchInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  filterButton: {
    padding: 10,
    borderColor: "tomato",
    borderRadius: 5,
    borderWidth: 1,
  },
  filterText: { fontWeight: "bold", color: "tomato" },
  noResultsText: {
    textAlign: "center",
    fontSize: 16,
    color: "gray",
    marginTop: 20,
  },
});

export default HomeScreen;
