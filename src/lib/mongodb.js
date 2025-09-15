import { MongoClient } from 'mongodb';

// Uses NEXT_PUBLIC or server env var MONGODB_URI and optional MONGODB_DB
const uri = 'mongodb+srv://admin:admin@cluster0.ac1fznk.mongodb.net';
const dbName = process.env.MONGODB_DB || 'crownexceladmin';

if (!uri) {
  // Don't crash at import time in environments where env isn't set; throw when used.
  console.warn('MONGODB_URI not set. Set process.env.MONGODB_URI to connect to MongoDB.');
}

let cachedClient = global._mongoClient;
let cachedDb = global._mongoDb;

if (!cachedClient) {
  cachedClient = null;
  cachedDb = null;
  global._mongoClient = cachedClient;
  global._mongoDb = cachedDb;
}

export async function getDb() {
  if (cachedDb) return cachedDb;
  if (!uri) throw new Error('MONGODB_URI environment variable is not set');
  if (!cachedClient) {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    cachedClient = client;
    global._mongoClient = client;
  }
  const db = cachedClient.db(dbName);
  cachedDb = db;
  global._mongoDb = db;
  return db;
}

export async function closeConnection() {
  if (cachedClient) {
    await cachedClient.close();
    cachedClient = null;
    cachedDb = null;
    global._mongoClient = null;
    global._mongoDb = null;
  }
}
