import Nav        from '@/components/Nav';
import Hero       from '@/components/Hero';
import About      from '@/components/About';
import Skills     from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects   from '@/components/Projects';
import WhyHire    from '@/components/WhyHire';
import Contact    from '@/components/Contact';
import ScrollObserver from '@/components/ScrollObserver';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <WhyHire />
        <Contact />
      </main>
      <ScrollObserver />
    </>
  );
}
