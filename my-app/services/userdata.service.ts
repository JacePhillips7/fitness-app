import { Firestore, setDoc } from "firebase/firestore";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { storage, auth } from "../firebase.config";
import { Auth } from "firebase/auth";
import Workout from "../components/routine/workout";
interface UserDataObject {
  _id: string;
  workouts: Workout[];
  settings: any;
}
const userDataTemplate: Omit<UserDataObject, "_id"> = {
  workouts: [],
  settings: {},
};
const COLLECTION = "userdata";
class UserDataStore {
  constructor(
    private store: Firestore,
    private auth: Auth,
  ) {}

  async setDoc(userid: string, userData?: UserDataObject) {
    const userDocRef = doc(this.store, "userdata", userid);
    const query = await getDoc(userDocRef);
    if (!query.exists()) {
      await this.makeDefaultSettings(userid);
    }
    if (userData) await updateDoc(userDocRef, { ...userData });
  }
  getWorkouts() {
    throw new Error("Not Implemented Yet");
  }
  private async makeDefaultSettings(userid: string) {
    await setDoc(doc(this.store, COLLECTION, userid), userDataTemplate);
    console.log("Doc created");
  }
}
const UserDataService = new UserDataStore(storage, auth);
export default UserDataService;
