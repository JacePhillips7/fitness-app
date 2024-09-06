import { View, Button, Text } from "react-native";
import { storage } from "../firebase.config";
import { auth } from "../firebase.config";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import AuthService from "../services/auth.service";
import { router } from "expo-router";
export default function UserData() {
  const [data, setData] = useState<any[]>([]);
  const [user, setUser] = useState<any | null>(null);
  const fetchData = async (userid: string) => {
    try {
      console.log("fetching data", userid);
      const userDocRef = doc(storage, "userdata", userid);
      const querySnapshot = await getDoc(userDocRef);
      if (querySnapshot.exists()) {
        setData(querySnapshot.data() as any);
      }
    } catch (error) {
      console.error("Error getting documents: ", error);
    }
  };
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log("user", user);
      if (!user) {
        router.push("");
      } else {
        setUser(user);
        fetchData(user.uid);
      }
    });
  }, []);
  return (
    <View>
      <Text>UserData</Text>
      <Text>{JSON.stringify(data, null, 2)}</Text>
      <Button
        onPress={async () => {
          const userDocRef = doc(storage, "userdata", user.uid);
          await updateDoc(userDocRef, {
            title: "Badass",
          });
          await fetchData(user.uid);
        }}
        title="Add some data"
      />
      <Button
        title="logout"
        onPress={async () => {
          AuthService.signOut();
        }}
      />
    </View>
  );
}
