import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView , ActivityIndicator } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { getFoodById } from "../../data/foods";
import Colors from "./../../theme/Colors";


const getFullImageUrl = (url) => {
  if (!url) return null;
  if (url.startsWith("http")) return url;
  return `${BASE_URL}${url.startsWith("/") ? "" : "/"}${url}`;
};

export default function ItemDetailScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItem = async () => {
      const data = await getFoodById(id);
      setItem(data);
      setLoading(false);
    };
    fetchItem();
  }, [id]);

  if (loading)
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: getFullImageUrl(item.image) }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{item.food_name}</Text>
        <Text style={styles.price}>${item.price}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  image: { width: "100%", height: 260, resizeMode: "cover" },
  details: { padding: 16 },
  name: { fontSize: 24, fontWeight: "700" },
  price: { fontSize: 18, color: Colors.primary, marginTop: 8 },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
});