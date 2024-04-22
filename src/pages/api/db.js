// Initialize Firebase Admin
import admin from 'firebase-admin';

// Replace 'path/to/serviceAccountKey.json' with your actual file path
const serviceAccount = require('./mining.json');

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

const db = admin.firestore();

export default db;
