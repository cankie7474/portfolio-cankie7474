import Contact from "@/components/Contact";
import CoreStack from "@/components/CoreStack";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import { getGitHubLanguages, getGitHubProfile } from "@/data/github";

export const dynamic = "force-dynamic";

export default async function Home() {
  const [githubProfile, githubLanguages] = await Promise.all([
    getGitHubProfile(),
    getGitHubLanguages(),
  ]);

  return (
    <>
      <Navbar />
      <main>
        <Hero githubProfile={githubProfile} githubLanguages={githubLanguages} />
        <CoreStack />
        <Projects />
        <Experience />
        <Contact githubProfile={githubProfile} />
      </main>
      <Footer />
    </>
  );
}
