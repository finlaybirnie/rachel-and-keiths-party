import { Pool } from "pg";
// import { Kysely, PostgresDialect, Generated } from "kysely";
import { Generated } from "kysely";
import { createKysely } from "@vercel/postgres-kysely";

export interface RSVP {
  id: Generated<number>;
  email: string;
  names: Array<string>;
  childCount: number;
  aleConsumption: number;
  cocktailContribution: string | null;
  comments: string;
}

// Keys of this interface are table names.
export interface Database {
  rsvp: RSVP;
}

// export const db = new Kysely<Database>({
//   dialect: new PostgresDialect({
//     pool: new Pool({
//       host: process.env.POSTGRES_HOST,
//       database: process.env.POSTGRES_DATABASE,
//       password: process.env.POSTGRES_PASSWORD,
//     }),
//   }),
// });

export const db = createKysely<Database>();
