import { Tabs } from "expo-router";
import { User } from "firebase/auth";
import { useState, useEffect } from "react";
import { auth } from "../../firebase.config";
import { Icon } from "react-native-paper";

export default function TabLayout() {
  const [user, setUser] = useState<User | null>(auth.currentUser);
  const [initials, setInitials] = useState<string | null>(null);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        setInitials(getUserIntials(currentUser));
      }
    });
    return () => unsubscribe();
  });
  const getUserIntials = (user: User) => {
    if (user.displayName !== null) {
      return user.displayName[0] + user.displayName[1];
    } else if (user.email !== null) {
      return user.email[0] + user.email[1];
    } else {
      return "";
    }
  };
  return (
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
        name="history"
        options={{
          tabBarIcon: ({ color }) => (
            <Icon source="weight-lifter" size={28} color={color} />
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
  );
}
