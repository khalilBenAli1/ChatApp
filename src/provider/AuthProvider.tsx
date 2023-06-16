import React, { createContext, useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../../config/firebase";
import { FirebaseApp } from "firebase/app";

type ContextProps = {
  user: null | boolean;
};

const AuthContext = createContext<Partial<ContextProps>>({});

interface Props {
  children: React.ReactNode;
}

const AuthProvider = (props: Props) => {
  const App:FirebaseApp=app
  const auth = getAuth(app);
  // user null = loading
  const [user, setUser] = useState<null | boolean>(null);

  useEffect(() => {
    checkLogin();
  }, []);

  function checkLogin() {
    onAuthStateChanged(auth, function (u) {
      if (u) {
        setUser(true);
        // getUserData();
      } else {
        setUser(false);
        // setUserData(null);
      }
    });
  }

  return (
    <AuthContext.Provider
      value={{
        user,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
