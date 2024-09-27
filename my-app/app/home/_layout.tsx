import { Tabs } from "expo-router";
import { Icon } from "react-native-paper";
import AuthProvider from "../providers/auth.provider";

export default function TabLayout() {
  return (
    <AuthProvider>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "red",
          headerShown: false,
          tabBarShowLabel: false,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => (
              <Icon size={28} source="home" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="social"
          options={{
            tabBarIcon: ({ color }) => (
              <Icon source="account-multiple" size={28} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="create"
          options={{
            tabBarIcon: ({ color }) => (
              <Icon source="weight-lifter" size={28} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="history"
          options={{
            tabBarIcon: ({ color }) => (
              <Icon source="chart-areaspline" size={28} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            tabBarIcon: ({ color }) => (
              <Icon size={28} source="account-circle" color={color} />
            ),
          }}
        />
      </Tabs>
    </AuthProvider>
  );
}
