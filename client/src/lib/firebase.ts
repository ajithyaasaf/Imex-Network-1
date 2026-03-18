import { initializeApp, type FirebaseApp } from "firebase/app";
import { getAuth, type Auth } from "firebase/auth";
import { 
  getFirestore, 
  type Firestore, 
  collection, 
  addDoc, 
  getDocs, 
  deleteDoc, 
  doc, 
  query, 
  orderBy, 
  serverTimestamp 
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Validate required environment variables
const requiredKeys = [
  'VITE_FIREBASE_API_KEY',
  'VITE_FIREBASE_AUTH_DOMAIN',
  'VITE_FIREBASE_PROJECT_ID',
  'VITE_FIREBASE_APP_ID'
];

requiredKeys.forEach(key => {
  if (!import.meta.env[key]) {
    console.warn(`Firebase: Missing environment variable ${key}`);
  }
});

let app: FirebaseApp;
let auth: Auth;
let db: Firestore;

try {
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app);
} catch (error) {
    console.warn("Firebase initialization failed:", error);
}

export { auth, db };

// Function to submit website form (Standard GodivaTech structure)
export const submitWebsiteForm = async (formData: any) => {
  if (!db) throw new Error("Database not initialized");
  try {
    const docRef = await addDoc(collection(db, "websites", "imex-network", "contactInquiries"), {
      ...formData,
      timestamp: serverTimestamp(),
      createdAt: serverTimestamp(), // Keep both for compatibility
    });
    return docRef.id;
  } catch (error) {
    console.error("Error submitting form: ", error);
    throw error;
  }
};

// Firestore Helpers (Updated to use shared collection)
export const submitContactForm = async (data: any) => {
  return submitWebsiteForm(data);
};

export const getSubmissions = async () => {
  if (!db) return [];
  const contactsCol = collection(db, "websites", "imex-network", "contactInquiries");
  const q = query(contactsCol, orderBy("timestamp", "desc"));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};

export const deleteSubmission = async (id: string) => {
  if (!db) return;
  const docRef = doc(db, "websites", "imex-network", "contactInquiries", id);
  return deleteDoc(docRef);
};