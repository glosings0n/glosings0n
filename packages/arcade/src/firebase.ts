import { getApp, getApps, initializeApp, type FirebaseApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInAnonymously,
  signInWithPopup,
  signOut,
  type Auth,
  type User,
} from "firebase/auth";
import { getFirestore, type Firestore } from "firebase/firestore";

export type AuthUser = User;

const firebaseConfig = {
  apiKey:
    process.env.NEXT_PUBLIC_FIREBASE_API_KEY ||
    "AIzaSyDuxyyMdDu1hPNDzpdSKl7JWgk_YpD32tA",
  authDomain:
    process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ||
    "glosings0n.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "glosings0n",
  storageBucket:
    process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET ||
    "glosings0n.firebasestorage.app",
  messagingSenderId:
    process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "1042780748428",
  appId:
    process.env.NEXT_PUBLIC_FIREBASE_APP_ID ||
    "1:1042780748428:web:c56eb129b93b92d4f299a9",
};

export function getFirebaseApp(): FirebaseApp {
  return getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
}

export function getFirebaseAuth(): Auth {
  return getAuth(getFirebaseApp());
}

export function getFirestoreDb(): Firestore {
  return getFirestore(getFirebaseApp());
}

export async function signInWithGoogle(): Promise<User> {
  const auth = getFirebaseAuth();
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });
  const result = await signInWithPopup(auth, provider);
  return result.user;
}

export async function ensureAnonymousParticipant(): Promise<User> {
  const auth = getFirebaseAuth();
  if (auth.currentUser) {
    return auth.currentUser;
  }
  const result = await signInAnonymously(auth);
  return result.user;
}

export async function signOutFirebase(): Promise<void> {
  const auth = getFirebaseAuth();
  await signOut(auth);
}

export function subscribeAuthState(
  callback: (user: User | null) => void,
): () => void {
  const auth = getFirebaseAuth();
  return onAuthStateChanged(auth, callback);
}
