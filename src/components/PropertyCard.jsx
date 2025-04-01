import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const PropertyCard = ({ property }) => {
  return (
    <View style={styles.card}>
      <Image source={property.image} style={styles.image} />
      <View style={styles.propertyInfo}>
        <Text style={styles.title}>{property.type}</Text>
        <Text>{property.location}</Text>
        <Text>{property.price}</Text>
        <Text>
          {property.bedrooms} Beds | {property.bathrooms} Baths |{" "}
          {property.area}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    marginBottom: 10,
    bgroundColor: "#fff",
    borderColor: "#ddd",
    borderWidth: 1,
  },
  image: {
    width: "100%",
    height: 150,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  propertyInfo: { padding: 10 },
  title: { fontSize: 18, fontWeight: "bold" },
});

export default PropertyCard;
