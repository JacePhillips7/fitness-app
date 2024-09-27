import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { Text } from "react-native";
import { auth } from "../../firebase.config";
import { User } from "firebase/auth";
interface AuthContext {
  user: User | null;
}
const AuthContext = createContext<AuthContext>({ user: null });

export default function AuthProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  });
  return (
    <>
      {user ? (
        <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
      ) : (
        <Text>Loading...</Text>
      )}
    </>
  );
}
export const useAuth = () => {
  return useContext(AuthContext);
};
