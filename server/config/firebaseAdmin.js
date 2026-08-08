import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const serviceAccount = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, "../secrets/firebase-service-account.json"),
    "utf8"
  )
);

if (getApps().length === 0) {
  initializeApp({
    credential: cert(serviceAccount),
  });

  console.log("✅ Firebase Admin Initialized");
}

export const adminAuth = getAuth();