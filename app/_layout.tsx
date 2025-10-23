import { Stack } from "expo-router";
import Colors from "./theme/Colors";


export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="(auth)" /> */}
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
