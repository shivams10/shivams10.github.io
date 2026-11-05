import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { PointerGlow } from "@/components/PointerGlow";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { profile } from "@/data/portfolio";

export default function Home() {
  return (
    <>
      <PointerGlow />
      <Nav />
      <main id="main">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="bg-fg text-bg">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 border-t border-bg/15 px-4 py-8 font-mono text-xs opacity-75 sm:flex-row sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} {profile.name}</p>
          <p>Built with Next.js, TypeScript and Tailwind CSS. Statically exported.</p>
        </div>
      </footer>
    </>
  );
}
