import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const PropertyDetailScreen = ({ route }) => {
  const { property } = route.params;
  return (
    <View style={styles.container}>
      <Image source={property.image} style={styles.image} />
      <Text style={styles.title}>{property.type}</Text>
      <Text>{property.location}</Text>
      <Text style={styles.price}>{property.price}</Text>
      <Text>
        {property.bedrooms} Beds | {property.bathrooms} Baths | {property.area}
      </Text>
      <Text style={{ marginTop: 10, fontWeight: "bold" }}>Description:</Text>
      <Text style={{ marginTop: 5, color: "gray" }}>
        This is a beautiful property located in {property.location}. It has
        {property.bedrooms} bedrooms and {property.bathrooms} bathrooms. It is
        perfect for families or individuals looking for a comfortable living
        space. The area is {property.area} square feet, providing ample space
        for all your needs. The property is well-maintained and features modern
        amenities.
      </Text>
      <Text style={{ marginTop: 10, fontWeight: "bold" }}>Contact Agent:</Text>
      <Text style={{ marginTop: 5, color: "blue" }}>
        {property.agentName} - {property.agentPhone}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  image: { width: "100%", height: 300, borderRadius: 10 },
  title: { fontSize: 24, fontWeight: "bold", marginTop: 10 },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
    marginVertical: 5,
  },
});

export default PropertyDetailScreen;
