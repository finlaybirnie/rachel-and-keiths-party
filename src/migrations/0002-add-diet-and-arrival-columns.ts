import { Kysely } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .alterTable("rsvp")
    .addColumn("diet", "integer", (col) => col.notNull())
    .addColumn("arrivalDay", "text", (col) => col.notNull())
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema
    .alterTable("rsvp")
    .dropColumn("diet")
    .dropColumn("arrivalDay")
    .execute();
}
