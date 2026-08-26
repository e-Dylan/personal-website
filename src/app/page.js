import { Analytics } from "@vercel/analytics/next";
import Homepage from "../components/Homepage";
import About from "../components/About";
import Projects from "../components/Projects";

export default function Page() {
  return (
    <>
      <Analytics />
      <Homepage />
      <About />
      <Projects />
    </>
  );
}
