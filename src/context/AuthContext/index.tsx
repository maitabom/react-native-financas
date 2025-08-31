import { createContext, useState } from "react";
import AuthContextProperties from "./properties";
import User from "../../models/user";

export const AuthContext = createContext<User>({ name: "" });

function AuthProvider({children}: AuthContextProperties) {
  const [user, setUser] = useState<User>({
    name: "Valentim"
  });

  return (
    <AuthContext.Provider value={user}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;