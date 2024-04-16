import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./component/screens/Home";
import AboutUs from "./component/screens/AboutUs";
import Setting from "./component/screens/Setting";
import { Ionicons } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerTitleAlign: "center" }}>
        <Tab.Screen
          name="Main Screen"
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <Ionicons name="home" size={size} color={color} />;
            },
          }}
        />
        <Tab.Screen
          name="About Us"
          component={AboutUs}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <Ionicons name="people" size={size} color={color} />;
            },
          }}
        />
        <Tab.Screen
          name="Setting"
          component={Setting}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <Ionicons name="settings" size={size} color={color} />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
