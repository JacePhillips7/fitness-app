import { Auth } from "@firebase/auth";
import { auth } from "../firebase.config";
class MyAuthService {
  constructor(private auth: Auth) {}

  signOut() {
    this.auth.signOut();
  }
}
const AuthService = new MyAuthService(auth);
export default AuthService
