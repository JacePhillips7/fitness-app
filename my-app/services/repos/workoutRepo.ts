import {
  addDoc,
  collection,
  doc,
  DocumentReference,
  Firestore,
  getDoc,
  setDoc,
} from "firebase/firestore";
import { IRoutine } from "../../components/routine/routine";
import { auth } from "../../firebase.config";
export interface IWorkout {
  _id: string;
  date: Date;
  stopwatch: string;
  complete: boolean;
  routine: IRoutine[];
}
const workoutTemplate: Omit<IWorkout, "_id"> = {
  date: new Date(),
  stopwatch: "",
  complete: false,
  routine: [],
};
const workoutField = "currentWorkout";
export default class WorkoutRepo {
  constructor(
    private readonly store: Firestore,
    private readonly docRef: DocumentReference,
  ) {}
  private async getObject(): Promise<IWorkout | undefined> {
    let document = await getDoc(this.docRef);
    return document.get(workoutField);
  }
  private async createTemplate() {
    if (!auth.currentUser) {
      throw new Error("No User ID");
    }
    console.log(auth.currentUser);
    return await addDoc(
      collection(this.store, this.docRef.parent.path, auth.currentUser.uid),
      workoutTemplate,
    );
  }

  async read(): Promise<IWorkout> {
    let _obj = await this.getObject();
    if (!_obj) {
      let id = (await this.createTemplate()).id;
      return { _id: id, ...workoutTemplate };
    }
    return _obj;
  }

  update() {
    throw new Error("Not Implemented");
  }

  delete() {
    throw new Error("Not Implemented");
  }
}
