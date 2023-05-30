import { up } from "../migrations/0001-create-rsvp-table";
import { db } from "../db";

up(db)
  .then(() => console.log("Success"), console.error)
  .finally(() => db.destroy());
