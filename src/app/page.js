import { Analytics } from "@vercel/analytics/next";
import Homepage from "../components/Homepage";

export default function Page() {
  return (
    <>
      <Analytics />
      <Homepage />;
    </>
  );
}
