import React, 
{ 
  createContext,
  useContext,
  useState,
  ReactNode
} from 'react';

import * as AuthSession from 'expo-auth-session';

import {
  SCOPE,
  CLIENT_ID,
  CDN_IMAGE,
  REDIRECT_URI,
  RESPONSE_TYPE
} from '../configs';

import { api } from '../services/api';

type User = {
  id: string;
  username: string;
  firstName: string;
  avatar: string;
  email: string;
  token: string;
}

type AuthContextData = {
  user: User;
  signIn: () => Promise<void>;
}

type AuthProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>({} as User);
  const [loading, setLoading] = useState(false);

  async function signIn() {

    const authUrl = `https://discord.com/api/oauth2/authorize?client_id=857706709744615444&redirect_uri=https%3A%2F%2Fauth.expo.io%2FGabrielM%2Fgameplay&response_type=code&scope=identify%20email%20connections%20guilds`; 

    await AuthSession.startAsync({authUrl});
  }

  return (
    <AuthContext.Provider value={{
      user,
      signIn
    }}>
      { children }
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export {
  AuthProvider,
  useAuth
}