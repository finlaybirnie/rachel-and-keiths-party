// import { up } from "../migrations/0001-create-rsvp-table";
import { up } from "../migrations/0002-add-diet-and-arrival-columns";
import { db } from "../db";

up(db)
  .then(() => console.log("Success"), console.error)
  .finally(() => db.destroy());
