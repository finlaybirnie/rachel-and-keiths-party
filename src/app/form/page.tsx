import { cookies } from "next/headers";
import Form from "./form";

export default function Page() {
  const complete = cookies().get("complete")?.value === "yes";

  return <Form initialComplete={complete} />;
}
