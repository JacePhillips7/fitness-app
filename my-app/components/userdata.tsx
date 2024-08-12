import { storage } from "../firebase.config";
import { auth } from "../firebase.config";
import { collection, getDocs, addDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
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
      if (!user) {
        return;
      }
      setUser(user);
      fetchData(user.uid);
    });
  }, []);
  return (
    <div>
      <h1>UserData</h1>
      {/* dump the data as json string */}
      <pre>{JSON.stringify(data, null, 2)}</pre>
      {/* <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul> */}

      <button
        onClick={async () => {
          //   await addDoc(collection(storage, "userdata"), {
          //     name: "New User",
          //     id: data.length + 1,
          //   });
          const userDocRef = doc(storage, "userdata", user.uid);
          await updateDoc(userDocRef, {
            title: "Badass",
          });
          await fetchData(user.uid);
        }}
      >
        Add some data
      </button>
    </div>
  );
}
