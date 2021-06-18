import React, { useContext, useState, useEffect } from "react"
import { auth } from "../firebase/firebase"
export interface AuthContextInterface {
  login: any,
  signup: any,
  logout: any,
  resetPassword: any,
  currentUser: any
}
const AuthContext = React.createContext<AuthContextInterface | null>(null)
export const UseAuth = () => useContext(AuthContext);
export function AuthProvider(props: any) {
  const [currentUser, setCurrentUser] = useState({});
  const [loading, setLoading] = useState(true);
  const signup = (email: any, password: any) => auth.createUserWithEmailAndPassword(email, password);
  const login = (email: any, password: any) => auth.signInWithEmailAndPassword(email, password);
  const logout = () => auth.signOut();
  const resetPassword = (email: any) => auth.sendPasswordResetEmail(email)
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user: any) => {
      await setCurrentUser(user);
      await setLoading(false);
    })
    return unsubscribe;
  }, [])
  const value: any = { currentUser, login, signup, logout, resetPassword, }
  return (
    <AuthContext.Provider value={value}>
      {!loading && props.children}
    </AuthContext.Provider>
  )
}