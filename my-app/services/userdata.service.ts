import { Firestore, setDoc } from "firebase/firestore";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { storage, auth } from "../firebase.config";
import WorkoutRepo, { IWorkout } from "./repos/workoutRepo";
interface IUserDataObject {
  _id: string;
  currentWorkout?: IWorkout;
  settings: any;
}
const userDataTemplate: Omit<IUserDataObject, "_id"> = {
  settings: {},
};
const COLLECTION = "userdata";

export class UserDataStore {
  constructor(private store: Firestore) {
    auth.onAuthStateChanged((user) => {
      if (!user) return;
      let docref = doc(this.store, COLLECTION, user.uid);
      this.workoutRepo = new WorkoutRepo(store, docref);
    });
  }
  private workoutRepo!: WorkoutRepo;
  async setDoc(userid: string, userData?: IUserDataObject) {
    const userDocRef = doc(this.store, "userdata", userid);
    const query = await getDoc(userDocRef);
    if (!query.exists()) {
      await this.makeDefaultSettings(userid);
    }
    if (userData) await updateDoc(userDocRef, { ...userData });
  }
  async getWorkout() {
    return this.workoutRepo.read();
  }
  private async makeDefaultSettings(userid: string) {
    await setDoc(doc(this.store, COLLECTION, userid), userDataTemplate);
    console.log("Doc created");
  }
}
