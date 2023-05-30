import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .createTable("rsvp")
    .addColumn("id", "serial", (col) => col.primaryKey())
    .addColumn("aleConsumption", "integer", (col) => col.notNull())
    .addColumn("childCount", "integer", (col) => col.notNull())
    .addColumn("cocktailContribution", "text", (col) => col.notNull())
    .addColumn("comments", "text", (col) => col.notNull())
    .addColumn("email", "text", (col) => col.notNull())
    .addColumn("names", sql`text[]`, (col) => col.notNull())
    .addColumn("submittedAt", "timestamp", (col) =>
      col.defaultTo(sql`now()`).notNull()
    )
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("rsvp").execute();
}
