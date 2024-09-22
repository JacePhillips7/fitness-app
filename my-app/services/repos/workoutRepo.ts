import { Firestore } from "firebase/firestore";
import { IRoutine } from "../../components/routine/routine";
const COLLECTION = "userdata";
export default class WorkOutRepo {
  constructor(private readonly store: Firestore) {}
  create() {
    throw new Error("Not Implemented");
  }
  read() {
    throw new Error("Not Implemented");
  }
  update() {
    throw new Error("Not Implemented");
  }
  delete() {
    throw new Error("Not Implemented");
  }
}
