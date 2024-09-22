import { View, Button, Text } from "react-native";
import { storage } from "../firebase.config";
import { auth } from "../firebase.config";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import AuthService from "../services/auth.service";
import { router } from "expo-router";
import { UserDataStore } from "../services/userdata.service";
export default function UserData() {
  const [data, setData] = useState<any[]>([]);
  const [user, setUser] = useState<any | null>(null);
  let datastore!: UserDataStore;
  const fetchData = async (userid: string) => {
    try {
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
      console.log(user);
      if (!user) {
        router.push("");
      } else {
        setUser(user);
        fetchData(user.uid);
        datastore = new UserDataStore(storage)
      }
    });
  }, []);
  return (
    <View>
      <Text>UserData</Text>
      <Text>{JSON.stringify(data, null, 2)}</Text>
        {datastore ? (
      <Button
        onPress={async () => {
          await datastore.setDoc(user.uid);
          await fetchData(user.uid);
        }}
        title="Add some data"
      />
        ):<View></View>}
      <Button
        title="logout"
        onPress={async () => {
          AuthService.signOut();
        }}
      />
    </View>
  );
}
