import { addDoc, collection, CollectionReference, doc, DocumentReference, Firestore, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { IRoutine } from "../../components/routine/routine";
export interface IWorkout {
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
  constructor(private readonly store: Firestore, private readonly docRef: DocumentReference) {}
  private async getObject(): Promise<IWorkout | undefined> {
    let document = await getDoc(this.docRef);
    return document.get(workoutField);
  }
  private async createTemplate(ref: DocumentReference) {
    await updateDoc(ref, workoutField, workoutTemplate);
  }

  async read(): Promise<IWorkout> {
    let _obj = await this.getObject();
    if (!_obj) {
      await this.createTemplate(this.docRef);
      return { ...workoutTemplate };
    }
    return _obj;
  }

  update() {
    throw new Error("Not Implemented");
  }

  delete() {
    throw new Error("Not Implemented");
  }
  genId() {
    return crypto.randomUUID();
  }
}
