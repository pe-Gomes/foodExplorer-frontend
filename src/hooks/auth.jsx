import { createContext, useContext, useState, useEffect } from "react";
import { api } from '../services/api';

export const AuthContext = createContext({});

function AuthProvider ({ children }) {
  const [data, setData] = useState({});
  const [admin, setAdmin] = useState(false);

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password });
      const { token, user } = response.data;

      localStorage.setItem("@food-explorer:user", JSON.stringify(user));
      localStorage.setItem("@food-explorer:token", token);

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setData({user, token});

      const objectUser = JSON.parse(user);
      const isAdmin = objectUser.admin == true;
      setAdmin(isAdmin);

    } catch (error) {
      if (error) {
        alert(error.response.data.message);
      } else {
        alert('Não foi possível entrar.')
      };
    };
  };

  async function signOut() {
    localStorage.removeItem("@food-explorer:user");
    localStorage.removeItem("@food-explorer:token");

    setData({});
  }


  useEffect( () => {
    const token = localStorage.getItem("@food-explorer:token");
    const user = localStorage.getItem("@food-explorer:user");

    if (token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      const objectUser = JSON.parse(user);
      const isAdmin = objectUser.admin == true;

      setData({
        token,
        user: JSON.parse(user)
      });
      setAdmin(isAdmin);
    };
  }, [admin]);

  return (
    <AuthContext.Provider value={{
      signIn,
      signOut,
      user:data.user,
      admin
    }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export {
  AuthProvider,
  useAuth
}






