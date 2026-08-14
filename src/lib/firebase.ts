import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  projectId: "gen-lang-client-0542795675",
  appId: "1:698676305111:web:89e66e9886836850ff6492",
  apiKey: "AIzaSyCfsPPTLTejN7X5-MabDhUC8aqRnIJbst8",
  authDomain: "gen-lang-client-0542795675.firebaseapp.com",
  storageBucket: "gen-lang-client-0542795675.firebasestorage.app",
  messagingSenderId: "698676305111",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app, "ai-studio-gleeangelsmusicl-623bb7c4-05b1-417e-add9-79beb2dcae28");
