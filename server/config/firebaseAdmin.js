import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

const serviceAccount = JSON.parse(
  process.env.FIREBASE_SERVICE_ACCOUNT
);

if (getApps().length === 0) {
  initializeApp({
    credential: cert(serviceAccount),
  });

  console.log("✅ Firebase Admin Initialized");
}

export const adminAuth = getAuth();