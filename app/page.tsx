"use client";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { MacbookScroll } from "@/components/ui/MacBoookScroll";
import { WavyBackground } from "@/components/ui/WavyBackground";
import { navItems } from "@/data";

export default function Home() {
  return (
   <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <div>
          <MacbookScroll title="Beyond the Code" showGradient={false} src="/mac-output.png" />
          <div className="h-[60vh] md:h-[100vh] w-full flex items-center justify-center">
          </div>
        </div>
        <Grid />
      </div>
   </main>
  );
}
