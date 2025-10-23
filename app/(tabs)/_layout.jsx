import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../theme/Colors";


    // tabBarInactiveTintColor: "#829ecfff", // inactive gray

export default function TabsLayout() {
  return (
    <Tabs
  screenOptions={{
     headerShown: false ,
    tabBarActiveTintColor: "#829ecfff", // active icon/text color
    tabBarInactiveTintColor: "#d2d6e2ff", // inactive gray
    tabBarStyle: {
      backgroundColor: "#235c0cff",
      borderTopColor: "#e5e7eb",
      height: 60,
      paddingBottom: 5,
      paddingTop: 5,
      shadowColor: "#000",
      shadowOpacity: 0.08,
      shadowOffset: { width: 0, height: -2 },
      shadowRadius: 6,
      elevation: 4,
    },
    tabBarLabelStyle: {
      fontSize: 12,
      fontWeight: "600",
      marginBottom: 2,
    },
  }}
>
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{
          title: "Menu",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="restaurant" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="item/[id]"
        options={{
          title: "Menu",
           tabBarButton: () => null,
          tabBarIcon: ({ color, size ,  }) => (
            <Ionicons name="restaurant" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}

