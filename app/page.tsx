import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Stack } from "@/components/Stack";
import { Projects } from "@/components/Projects";
import { Contributions } from "@/components/Contributions";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stack />
        <Projects />
        <Contributions />
        <Contact />
      </main>
    </>
  );
}
