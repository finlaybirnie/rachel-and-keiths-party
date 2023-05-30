import { z } from "zod";
import { zfd } from "zod-form-data";

export const schema = zfd.formData({
  email: zfd.text(z.string().email()),
  names: zfd.repeatable(z.array(zfd.text())),
  childCount: zfd.numeric(z.number()),
  aleConsumption: zfd.numeric(z.number()),
  cocktailContribution: zfd.text(z.string().default("")),
  comments: zfd.text(z.string().default("")),
});
