import { Auth } from "@firebase/auth";
import { auth } from "../firebase.config";
class MyAuthService {
  constructor(private auth: Auth) {}

  signOut() {
    this.auth.signOut();
  }
  getUser() {
    return this.auth.currentUser;
  }
}
const AuthService = new MyAuthService(auth);
export default AuthService;
