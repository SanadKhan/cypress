import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres"
import * as schema from '../../../migrations/schema'
import { migrate } from "drizzle-orm/postgres-js/migrator";

if(!process.env.DATABASE_URL) {
  console.log("Cannot find databse url")
}

const connectionString = process.env.DATABASE_URL

console.log("connection", connectionString);
const client = postgres(connectionString as string, { prepare: false });

const db = drizzle(client, { schema });

const migrateDb = async () => {
  try {
    console.log("MIGRATING CLIENT...");
    await migrate(db, { migrationsFolder: 'migrations' });
    console.log("SUCCESSFULLY MIGRATED!")
  } catch (error) {
    console.log("ERROR MIGRATING!!!", error)
  }
}
migrateDb();

export default db;