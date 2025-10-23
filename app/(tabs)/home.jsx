import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../theme/Colors";
import FoodCard from "../components/FoodCard";
import { getFoods } from "../data/foods";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getFoods();
        setFoods(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <LinearGradient colors={["#f9fafb", "#e0f7f6"]} style={styles.center}>
        <ActivityIndicator size="large" color={Colors.primary} />
        <Text style={styles.loadingText}>Fetching delicious foods...</Text>
      </LinearGradient>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Ionicons name="alert-circle-outline" size={60} color="red" />
        <Text style={styles.error}>Failed to load: {error}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/hero-bg.jpg")}
        style={styles.headerBg}
        resizeMode="cover"
      >
        <LinearGradient
          colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.7)"]}
          style={styles.headerOverlay}
        >
          <Text style={styles.title}>Explore Delicious Meals</Text>
          <Text style={styles.subtitle}>Handpicked just for you 🍽️</Text>
        </LinearGradient>
      </ImageBackground>

      <View style={styles.content}>
        <FlatList
          data={foods}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ paddingBottom: 60 }}
          renderItem={({ item }) => (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() =>
                router.push({ pathname: "(tabs)/item/[id]", params: { id: item.id } })
              }
            >
             <FoodCard item={item} onPress={() => router.push({ pathname: "(tabs)/item/[id]", params: { id: item.id } })} />
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background || "#f8f9fa",
  },
  headerBg: {
    height: 200,
    width: "100%",
    justifyContent: "flex-end",
  },
  headerOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "800",
    color: "white",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    color: "#f2f2f2",
    marginTop: 6,
    textAlign: "center",
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9fafb",
  },
  loadingText: {
    marginTop: 12,
    color: "#666",
    fontSize: 16,
  },
  error: {
    color: "red",
    marginTop: 10,
    fontSize: 16,
  },
});
