import { z } from "zod";
import { zfd } from "zod-form-data";

export const schema = zfd.formData({
  email: zfd.text(z.string().email()),
  // age: zfd.numeric(z.number().min(25).max(50)),
  // likesPizza: zfd.checkbox(),
});
