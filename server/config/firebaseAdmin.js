import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let serviceAccount;

// ======================================
// Production / Render
// ======================================

if (process.env.FIREBASE_SERVICE_ACCOUNT) {
  serviceAccount = JSON.parse(
    process.env.FIREBASE_SERVICE_ACCOUNT
  );

  console.log("✅ Firebase Admin: using environment variable");
}

// ======================================
// Local Development
// ======================================

else {
  const localPath = path.join(
    __dirname,
    "../secrets/firebase-service-account.json"
  );

  if (!fs.existsSync(localPath)) {
    throw new Error(
      "Firebase credentials not found. Set FIREBASE_SERVICE_ACCOUNT or provide server/secrets/firebase-service-account.json"
    );
  }

  serviceAccount = JSON.parse(
    fs.readFileSync(localPath, "utf8")
  );

  console.log("✅ Firebase Admin: using local service account");
}

// ======================================
// Initialize Firebase Admin
// ======================================

if (getApps().length === 0) {
  initializeApp({
    credential: cert(serviceAccount),
  });

  console.log("✅ Firebase Admin Initialized");
}

export const adminAuth = getAuth();