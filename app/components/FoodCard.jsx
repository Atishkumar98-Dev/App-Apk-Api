import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../theme/Colors";

const Main_url = "http://192.168.0.130:8000/";
const BASE_URL = "http://192.168.0.130:8000/api/foodlist/";

const getFullImageUrl = (url) => {
  if (!url) return null;
  if (url.startsWith("http")) return url;
  return `${Main_url}${url.startsWith("/") ? "" : "/"}${url}`;
};

export default function FoodCard({ item, onPress, small }) {
  return (
    <TouchableOpacity
      style={[
        styles.card,
        small && { width: "47%", margin: "1.5%" },
        Platform.OS === "ios" && { shadowColor: "#000" },
      ]}
      onPress={onPress}
      activeOpacity={0.85}
    >
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: getFullImageUrl(item.image) }}
          style={styles.image}
        />
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.6)"]}
          style={styles.overlay}
        >
          <Text numberOfLines={1} style={styles.overlayText}>
            {item.food_name}
          </Text>
        </LinearGradient>
      </View>

      <View style={styles.details}>
        <View style={styles.priceRow}>
          <Ionicons name="cash-outline" size={18} color={Colors.primary} />
          <Text style={styles.price}> ${item.price}</Text>
        </View>

        <View style={styles.typeRow}>
          <Ionicons name="restaurant-outline" size={16} color="#8D5F8C" />
          <Text style={styles.desc}>{item.types}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.cardBackground || "#fff",
    borderRadius: 16,
    marginBottom: 20,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 5,
  },
  imageContainer: {
    position: "relative",
    width: "100%",
    height: 160,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
    justifyContent: "flex-end",
  },
  overlayText: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
  },
  details: {
    padding: 12,
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  price: {
    fontSize: 15,
    fontWeight: "600",
    color: Colors.primary || "#1E3A8A",
    marginLeft: 5,
  },
  typeRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  desc: {
    color: "#8D5F8C",
    fontSize: 13,
    marginLeft: 5,
  },
});
