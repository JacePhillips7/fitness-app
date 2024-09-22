import { Firestore } from "firebase/firestore";
import { IRoutine } from "../../components/routine/routine";
const COLLECTION = "userdata";
export default class WorkOutRepo {
  constructor(private readonly store: Firestore) {}
}
