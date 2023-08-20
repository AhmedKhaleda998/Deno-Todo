import { MongoClient, Database } from 'https://deno.land/x/mongo@v0.8.0/mod.ts';

let db: Database;

export function connect() {
  const client = new MongoClient();
  client.connectWithUri(
    'mongodb+srv://ahmedkhaleda:abcd1234@cluster.1w2hiwu.mongodb.net/'
  );
  db = client.database('todo');
}

export function getDb() {
  return db;
}
